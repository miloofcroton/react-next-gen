/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import menuStyles from '../styles/slide';
import BurgerMenu from '../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faMapMarker,
  faMortarPestle,
  faMoneyBill,
  faPhotoVideo,
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components|Layout/BurgerMenu',
};

export const BasicLeftSlideMenu = () => {

  // const [visible, setVisible] = React.useState(false);

  return (
      <div
        css={{
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        }}
      >
      <BurgerMenu
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right={false}
        styles={menuStyles}
        id={'slide'}
        type={'slide'}
      >

        <h2
          key="0"
          css={{
            backgroundColor: '#484848',
            color: 'white',
            fontSize: '24px',
            fontWeight: 400,
            fontFamily: 'Circular-Air-Book, serif',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <img
            className="header-logo"
            src="/next.png"
            alt="Next"
          />
          <span>CCPAM</span>
        </h2>

        <a key="1" href="">
          <FontAwesomeIcon icon={faDatabase} />
          <span>Data Management</span>
        </a>
        <a key="2" href="">
          <FontAwesomeIcon icon={faMapMarker} />
          <span>Location</span>
        </a>
        <a key="3" href="">
          <FontAwesomeIcon icon={faMortarPestle} />
          <span>Study</span>
        </a>
        <a key="4" href="">
          <FontAwesomeIcon icon={faPhotoVideo} />
          <span>Collections</span>
        </a>
        <a key="5" href="">
          <FontAwesomeIcon icon={faMoneyBill} />
          <span>Credits</span>
        </a>
      </BurgerMenu>
    </div>
  );
};
