/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import baseStyles from './styles/baseStyles';
import { usePrevious } from 'lib/hooks/usePrevious';

const initialState = {
  isOpen: true,
  hover: false,
};

/** This is a burger menu */
const Menu = (props) => {

  const {
    bodyClassName = '',
    customBurgerIcon,
    customCrossIcon,
    customOnKeyDown,
    disableAutoFocus = false,
    disableCloseOnEsc = false,
    disableOverlayClick,
    htmlClassName = '',
    id = '',
    type: menuType = '',
    isOpen,
    hideX,
    noOverlay = false,
    noTransition = false,
    onStateChange = () => {},
    outerContainerId = '',
    pageWrapId = '',
    right,
    styles = {},
    customStyles = {},
    width = 250,
    children,
  } = props;

  const [state, setState] = React.useState(initialState);

  let timeoutId;
  const firstItem = React.useRef();

  // const memoizedToggle = React.useCallback(() => {
  //   applyWrapperStyles();
  // }, [isOpen]);

  const toggleMenu = (options = {}) => {
    const { isOpen, noStateChange } = options;
    const newState = (state) => ({
      ...state,
      isOpen: typeof isOpen !== 'undefined' ? isOpen : !state.isOpen
    });

    // memoizedToggle();

    applyWrapperStyles();

    setState((s) => newState(s));

    !noStateChange && onStateChange(newState);

    if (!disableAutoFocus) {
      // For accessibility reasons, ensures that when we toggle open,
      // we focus the first menu item if one exists.
      if (newState.isOpen) {
        if (firstItem.current) {
          firstItem.current.focus();
        }
      }
      else {
        if (document.activeElement) {
          document.activeElement.blur();
        }
        else {
          document.body.blur(); // Needed for IE
        }
      }
    }

    // Timeout ensures wrappers are cleared after animation finishes.
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!newState.isOpen) {
        applyWrapperStyles(false);
      }
    }, 500);
  };

  // Applies component-specific styles to external wrapper elements.
  const applyWrapperStyles = (set = true) => {
    const applyClass = (el, className) =>
      el.classList[set ? 'add' : 'remove'](className);

    if (htmlClassName) {
      applyClass(document.querySelector('html'), htmlClassName);
    }
    if (bodyClassName) {
      applyClass(document.querySelector('body'), bodyClassName);
    }

    if (styles.pageWrap && pageWrapId) {
      handleExternalWrapper(pageWrapId, styles.pageWrap, set);
    }

    if (styles.outerContainer && outerContainerId) {
      handleExternalWrapper(
        outerContainerId,
        styles.outerContainer,
        set
      );
    }
  };

  // Sets or unsets styles on DOM elements outside the menu component.
  // This is necessary for correct page interaction with some of the menus.
  // Throws and returns if the required external elements don't exist,
  // which means any external page animations won't be applied.
  const handleExternalWrapper = (id, wrapperStyles, set) => {
    const wrapper = document.getElementById(id);

    if (!wrapper) {
      console.error(`Element with ID '${id}' not found`);
      return;
    }

    const builtStyles = getStyle(wrapperStyles);

    for (const prop in builtStyles) {
      // eslint-disable-next-line no-prototype-builtins
      if (builtStyles.hasOwnProperty(prop)) {
        wrapper.style[prop] = set ? builtStyles[prop] : '';
      }
    }

    // Prevent any horizontal scroll.
    // Only set overflow-x as an inline style if htmlClassName or
    // bodyClassName is not passed in. Otherwise, it is up to the caller to
    // decide if they want to set the overflow style in CSS using the custom
    // class names.
    const applyOverflow = (el) =>
      (el.style['overflow-x'] = set ? 'hidden' : '');
    if (!htmlClassName) {
      applyOverflow(document.querySelector('html'));
    }
    if (!bodyClassName) {
      applyOverflow(document.querySelector('body'));
    }
  };

  // Builds styles incrementally for a given element.
  const getStyles = (el, index, inline) => {
    const propName =
      'bm' + el.replace(el.charAt(0), el.charAt(0).toUpperCase());

    // Set base styles.
    let output = baseStyles[el] ? getStyle(baseStyles[el]) : {};

    // Add animation-specific styles.
    if (styles[el]) {
      output = {
        ...output,
        ...getStyle(styles[el], index + 1)
      };
    }

    // Add custom styles.
    if (customStyles[propName]) {
      output = {
        ...output,
        ...customStyles[propName]
      };
    }

    // Add element inline styles.
    if (inline) {
      output = {
        ...output,
        ...inline
      };
    }

    // Remove transition if required
    // (useful if rendering open initially).
    if (noTransition) {
      delete output.transition;
    }

    return output;
  };

  const getStyle = (style, index) => {
    const formattedWidth = typeof width !== 'string' ? `${width}px` : width;
    return style(state.isOpen, formattedWidth, right, index);
  };

  const listenForClose = (e) => {
    e = e || window.event;

    // Close on ESC, unless disabled
    if (
      !disableCloseOnEsc &&
      state.isOpen &&
      (e.key === 'Escape' || e.keyCode === 27)
    ) {
      toggleMenu();
    }
  };

  const shouldDisableOverlayClick = () => {
    if (typeof disableOverlayClick === 'function') {
      return disableOverlayClick();
    } else {
      return disableOverlayClick;
    }
  };

  const getLineStyle = (index) => {
    return {
      position: 'absolute',
      height: '20%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: state.hover ? 0.6 : 1,
      ...(state.hover && customStyles.bmBurgerBarsHover)
    };
  };


  // componentWillUnmount
  React.useEffect(() => {
    return () => {
      window.onkeydown = null;
      applyWrapperStyles(false);
    };
  }, [applyWrapperStyles]);

  // componentDidUpdate
  const mounted = React.useRef();

  const prevProps = usePrevious(props);

  React.useEffect(() => {
    // Bind ESC key handler (unless custom function supplied).
    if (customOnKeyDown) {
      window.onkeydown = customOnKeyDown;
    } else {
      window.onkeydown = listenForClose;
    }

    // Allow initial open state to be set by
    if (isOpen) {
      toggleMenu({ isOpen: true, noStateChange: true });
    }

    if (!mounted.current) {
      mounted.current = true;
    }
    else {
      const wasToggled =
        typeof isOpen !== 'undefined' &&
        isOpen !== state.isOpen &&
        isOpen !== prevProps.isOpen;
      if (wasToggled) {
        toggleMenu();
        // Toggling changes SVG animation requirements, so we defer these until the next componentDidUpdate
        return;
      }

      if (styles.svg) {
        // eslint-disable-next-line react/no-find-dom-node
        const morphShape = ReactDOM.findDOMNode(this, 'bm-morph-shape');
        const path = styles.svg.lib(morphShape).select('path');

        if (state.isOpen) {
          // Animate SVG path.
          styles.svg.animate(path);
        } else {
          // Reset path (timeout ensures animation happens off screen).
          setTimeout(() => {
            path.attr('d', styles.svg.pathInitial);
          }, 300);
        }
      }
    }
  }, [
    isOpen,
    // customOnKeyDown,
    // listenForClose,
    // prevProps.isOpen,
    // state.isOpen,
    // styles.svg,
    // toggleMenu,
  ]);




  const bmMenuStyles = {
    slide: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    stack: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    reveal: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bubble: {
      padding: '3.4em 1em 0',
    },
    push: {
      padding: '3.4em 1em 0',
    },
    elastic: {
      padding: '2em 1em',
      fontSize: '1.15em',
    },
    scaleDown: null,
    scaleRotate: null,
    pushRotate: null,
    fallDown:  null,
  };

  const buttonStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    border: 'none',
    fontSize: 0,
    background: 'transparent',
    cursor: 'pointer'
  };

  const buttonWrapperStyle = {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 8,
    top: 8
  };

  const extraBurgerProps = {
    style: {
      ...{ width: '100%', height: '100%' },
      ...customStyles.bmIcon
    }
  };

  const burgerIcon = customBurgerIcon
    ? React.cloneElement(customBurgerIcon, extraBurgerProps)
    : (
      <span>
        {[0, 1, 2].map((bar) => (
          <span
            key={bar}
            style={{
              ...getLineStyle(bar),
              ...customStyles.bmBurgerBars,
              background: '#484848',
            }}
          />
        ))}
      </span>
    );


  const backgroundColors = {
    slide: '#bdc3c7',
    stack: '#bdc3c7',
    reveal: '#bdc3c7',
    bubble: '#999',
    push: '#999',
    elastic: '#888',
    scaleDown: '#888',
    scaleRotate: '#888',
    pushRotate: '#888',
    fallDown:  '#888',
  };

  const getCrossStyle = (type) => ({
    position: 'absolute',
    width: 3,
    height: 14,
    transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
  });

  const extraCrossIconProps = {
    style: {
      ...{ width: '100%', height: '100%' },
      ...customStyles.bmCross
    }
  };

  const crossIcon = customCrossIcon
    ? React.cloneElement(customCrossIcon, extraCrossIconProps)
    : (
      <span style={{ position: 'absolute', top: '6px', right: '14px' }}>
        {['before', 'after'].map((type, i) => (
          <span
            key={i}
            style={{
              ...getCrossStyle(type),
              ...customStyles.bmCross,
              background: backgroundColors[menuType]
            }}
          />
        ))}
      </span>
    );

  return (
    <div>
      {!noOverlay && (
        <div
          onClick={() =>
            !shouldDisableOverlayClick() && toggleMenu()
          }
          css={{
            ...getStyles('overlay'),
            label: 'bm-overlay'
          }}
        />
      )}
      <div
        id={id}
        css={{
          label: 'bm-menu-wrap',
          ...getStyles('menuWrap'),
          ...((menuType==='bubble' || menuType==='push')
            && {
              'a': {
                padding: '1em',
              },

              'i': {
                fontSize: '1.7em',
                verticalAlign: 'middle',
                color: '#282a35',
              },
            }
          ),
          ...(menuType==='elastic'
            && {
              'span': {
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.75em',
              },

              'i': {
                opacity: '0.5',
              },
            }
          ),
          ...((
            menuType==='scaleDown'
            || menuType==='scaleRotate'
            || menuType==='pushRotate'
            || menuType==='fallDown'
          ) && {
            'a': {
              padding: '1em',
              textTransform: 'uppercase',
              transition: 'background 0.3s, box-shadow 0.3s',
              boxShadow: 'inset 0 -1px rgba(0, 0, 0, 0.2)',

              'span': {
                letterSpacing: '1px',
                fontWeight: '400',
              },

              '&:hover': {
                background: 'rgba(0, 0, 0, 0.2)',
                boxShadow: 'inset 0 -1px rgba(0, 0, 0, 0)',
                color: '#b8b7ad',
              },
              '&:focus': {
                background: 'rgba(0, 0, 0, 0.2)',
                boxShadow: 'inset 0 -1px rgba(0, 0, 0, 0)',
                color: '#b8b7ad',
              }
            },

            'h2': {
              margin: '0 auto',
              padding: '2em 1em',
              color: 'rgba(0, 0, 0, 0.4)',
              boxShadow: 'inset 0 -1px rgba(0, 0, 0, 0.2)',

              'i': {
                marginLeft: '0.2em',
              },

              'span': {
                fontSize: '1.6em',
                fontWeight: '700',
              },
            }
          }
        ),

        }}
      >
        {styles.svg && (
          <div
            css={{
              ...getStyles('morphShape'),
              fill: '#484848',
              label: 'bm-morph-shape'
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <path d={styles.svg.pathInitial} />
            </svg>
          </div>
        )}
        <div
          css={{
            ...getStyles('menu'),

            label: 'bm-menu',

            background: '#484848',

            'a': {
              color: '#b8b7ad',

              '&:hover': {
                color: '#f67977',
              },
              '&:focus': {
                color: '#c94e50',
              }
            },

            ...bmMenuStyles[menuType],

            overflow: 'none',
          }}
        >
          <nav
            css={{
              ...getStyles('itemList'),

              label: 'bm-item-list',

              'a': {
                padding: '0.8em',

                'span': {
                  marginLeft: '10px',
                  fontWeight: '700',
                }
              }
            }}
          >

            {React.Children.map(children, (Item, index) => {
              if (Item) {
                const extraProps = {
                  ref: index === 0 ? firstItem : null,
                  key: index,
                  style: {
                    ...getStyles('item', index, Item.style),

                    '&:focus': {
                      outline: 'none',
                    }
                  },
                  tabIndex: state.isOpen ? 0 : -1
                };
                return React.cloneElement(Item, extraProps);
              }
            })}
          </nav>
        </div>
        {!hideX && customCrossIcon !== false && (
          <div
            css={{
              ...getStyles('closeButton')
            }}
          >
            <div
              css={{
                label: 'bm-cross-button',
                ...buttonWrapperStyle,
                ...customStyles.bmCrossButton
              }}
            >
              {crossIcon}
              <button
                onClick={() => toggleMenu()}
                style={buttonStyle}
                tabIndex={state.isOpen ? 0 : -1}
              />
            </div>
          </div>
        )}
      </div>
      {customBurgerIcon !== false && (
        <div
          css={{
            ...getStyles('burgerIcon'),

            // position: 'fixed',
            // width: '100%',
            // height: '50px',
            // backgroundColor: 'red'
          }}
        >
          <div
            css={{
              ...{ zIndex: 1000 },
              ...customStyles.bmBurgerButton,
              position: 'fixed',
              width: '36px',
              height: '30px',
              left: !right ? '36px' : 'initial',
              right: !right ? null : '36px',
              top: '36px',
            }}
          >
            {burgerIcon}
            <button
              onClick={() => toggleMenu()}
              onMouseOver={() => setState((s) => ({ ...s, hover: true }))}
              onMouseOut={() => setState((s) => ({ ...s, hover: false }))}
              css={buttonStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

Menu.propTypes = {
  bodyClassName: PropTypes.string,
  burgerBarClassName: PropTypes.string,
  burgerButtonClassName: PropTypes.string,
  className: PropTypes.string,
  crossButtonClassName: PropTypes.string,
  crossClassName: PropTypes.string,
  customBurgerIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.oneOf([false])
  ]),
  customCrossIcon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.oneOf([false])
  ]),
  customOnKeyDown: PropTypes.func,
  disableAutoFocus: PropTypes.bool,
  disableCloseOnEsc: PropTypes.bool,
  disableOverlayClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  htmlClassName: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  itemClassName: PropTypes.string,
  itemListClassName: PropTypes.string,
  menuClassName: PropTypes.string,
  morphShapeClassName: PropTypes.string,
  noOverlay: PropTypes.bool,
  noTransition: PropTypes.bool,
  onStateChange: PropTypes.func,
  outerContainerId: PropTypes.string,
  overlayClassName: PropTypes.string,
  pageWrapId: PropTypes.string,
  right: PropTypes.bool,
  styles: PropTypes.object,
  customStyles: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Menu;
