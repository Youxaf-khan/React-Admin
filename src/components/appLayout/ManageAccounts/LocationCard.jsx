import React from 'react';
import Card from 'react-bootstrap/Card';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationModal from '../Modals/LocationModal';

import '../../../styles/appLayout/ManageAccounts.scss';

import GuestIcon from '../../../assets/sideBar/example.svg';
import UserAvatar from '../../../assets/sideBar/avatar.svg';
import EditIcon from '../../../assets/ManageAccounts/profile-edit.svg';
import SettingsIcon from '../../../assets/ManageAccounts/settings-icon.svg';

const LocationCard = ({ handleShowModal, handleClick, handleClose, anchorEl, open }) => {
  return (
    <div className="card-placement">
      <Card style={{ width: '20rem', height: '8rem' }}>
        <Card.Body className="location-card-body">
          <img
            src={localStorage.getItem('access_token') ? UserAvatar : GuestIcon}
            className="user-avatar"
            alt={`user-avatar`}
          />
          <div>
            <h6 className="username">Michale Angelo</h6>
            <span className="account-type">Account Type - Fan</span>
          </div>
          <MoreVertIcon
            className="ms-5"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}>
            <MenuItem onClick={handleShowModal}>
              <img className="me-3" src={EditIcon} />
              Edit Profile
            </MenuItem>
            <MenuItem>
              <img className="me-3" src={SettingsIcon} />
              Account Settings
            </MenuItem>
          </Menu>
        </Card.Body>
        <LocationModal />
      </Card>
    </div>
  );
};

export default LocationCard;
