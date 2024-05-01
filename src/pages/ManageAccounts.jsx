import React, { useState } from 'react';
import UserProfileCard from '../components/appLayout/ManageAccounts/UserProfileCard';
import AccountDetailsCard from '../components/appLayout/ManageAccounts/AccountDetailsCard';
import ProfileModal from '../components/appLayout/Modals/ProfileModal';
import LocationCard from '../components/appLayout/ManageAccounts/LocationCard';

import '../styles/appLayout/ManageAccounts.scss';

const ManageAccounts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('edit clicked');
    setAnchorEl(null);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    setAnchorEl(null);
    setShowModal(true);
  };

  const handleFormSubmit = () => {
    handleCloseModal();
    // Add your form submission logic here
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <div className="heading-dec">
        <h4>Manage Accounts </h4>
      </div>
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          <UserProfileCard
            selectedImage={selectedImage}
            handleImageUpload={handleImageUpload}
            handleShowModal={handleShowModal}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
            open={open}
          />
          <AccountDetailsCard />
          <div className="card-placement">
            <a className="clickable" href="/">
              Add Account
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right Column */}
        <div className="right-column">
          <LocationCard
            selectedImage={selectedImage}
            handleImageUpload={handleImageUpload}
            handleShowModal={handleShowModal}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
            open={open}
          />
        </div>
      </div>

      <ProfileModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleFormSubmit={handleFormSubmit}
        selectedImage={selectedImage}
        handleImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default ManageAccounts;
