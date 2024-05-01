import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import '../../../styles/appLayout/ProfileSwitchModal.scss';

import GuestIcon from '../../../assets/sideBar/example.svg';
import UserAvatar from '../../../assets/sideBar/avatar.svg';

import { sineWaveSignoutPath } from '../../../constants/SideItems.js';

const ProfileSwitchModal = () => {
  const handleClick = () => {
    window.location = window.location.origin + '/accounts';
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location = sineWaveSignoutPath;
  };

  return (
    <NavDropdown>
      <div className="d-flex align-items-center my-4 gap-2 px-4">
        <img
          src={localStorage.getItem('access_token') ? UserAvatar : GuestIcon}
          className="user-avatar"
          alt={`user-avatar`}
        />
        <div>
          <h6 className="username">Michale Angelo</h6>
          <span className="account-type">Account Type - Fan</span>
        </div>
      </div>
      <div className="dropdown-options">
        <NavDropdown.Divider style={{ border: '3px solid lightgray' }} />
        <NavDropdown.Item className="dropdown-item" onClick={handleClick}>
          Manage Accounts
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="dropdown-item" onClick={handleLogout}>
          Log out of all accounts
        </NavDropdown.Item>
      </div>
    </NavDropdown>
  );
};

export default ProfileSwitchModal;
