import React from 'react';
import { Modal } from 'react-bootstrap';
import BasicTextField from '../MuiComponents/BasicTextField';
import Button from '@mui/material/Button';

import '../../../styles/appLayout/ManageAccounts.scss';

const ProfileModal = ({
  showModal,
  handleCloseModal,
  handleFormSubmit,
  selectedImage,
  handleImageUpload
}) => {
  return (
    <Modal size="lg" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <div className="container">
          <div className="left-column">
            {selectedImage && <img className="profile-img" src={selectedImage} alt="Uploaded" />}
          </div>
          <div className="right-column">
            <BasicTextField
              fullWidth
              color=""
              id="outlined-basic"
              label="Profile Name"
              variant="outlined"
            />
            <div className="profile-img-edit">
              <span> Profile Image </span>
              <Button
                variant="outlined"
                onClick={() => document.getElementById('image-upload').click()}>
                Edit
              </Button>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-secondary float-end" onClick={handleFormSubmit}>
          Save
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
