/* eslint-disable global-require */
import React from 'react';

import './CustomerChannelHeader.css';

import { ClockIcon } from '../../assets/ClockIcon';

export const SupportChannelHeader = () => (
  <div className="channel-header__container">
    <div className="channel-header__heading">
      <div style={{ width: '115px' }}>
        <img
          className="channel-header__image-3"
          src={require('../../assets/user3.png')}
          alt="user-3"
          height="64"
          width="64"
        />
        <img
          className="channel-header__image-2"
          src={require('../../assets/user2.png')}
          alt="user-3"
          height="64"
          width="64"
        />
        <img
          className="channel-header__image-1"
          src={require('../../assets/user1.png')}
          alt="user-3"
          height="64"
          width="64"
        />
        <div className="channel-header__active" />
      </div>
      <div className="channel-header__text">
        <p className="channel-header__name">Hello</p>
        <p className="channel-header__subtitle">We are here to help.</p>
      </div>
    </div>
    <div className="channel-header__wait__wrapper">
      <ClockIcon />
      <p className="channel-header__wait__text">
        Average wait time: <b>2 minutes</b>
      </p>
    </div>
  </div>
);
