const styles = {
  pageWrap: (isOpen, width, right) => ({
    MozTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    MsTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    OTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    WebkitTransform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    transform: isOpen
      ? ''
      : right
      ? `translate3d(-${width}, 0, 0)`
      : `translate3d(${width}, 0, 0)`,
    transition: 'all 0.5s'
  }),

  outerContainer: (isOpen) => ({
    overflow: isOpen ? '' : 'hidden'
  })
};

export default styles;
