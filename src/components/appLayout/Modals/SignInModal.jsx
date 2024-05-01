import React, { useState } from 'react';
import '../../../styles/SignInModal.scss';
import { Modal } from 'react-bootstrap';
import ProfileSwitchModal from './ProfileSwitchModal';
import GuestIcon from '../../../assets/sideBar/example.svg';
import UserAvatar from '../../../assets/sideBar/avatar.svg';
import { sineWaveSignupPath } from '../../../constants/SideItems';

const SignInModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    REACT_APP_SINEWAVE_API_HOSTNAME,
    REACT_APP_SECRET_ID,
    REACT_APP_REDIRECT_URL,
    REACT_APP_APPLICATION_ID
  } = process.env;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Perform sign-in logic with email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Close the modal
    handleClose();

    fetch(`${REACT_APP_SINEWAVE_API_HOSTNAME}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: REACT_APP_APPLICATION_ID,
        client_secret: REACT_APP_SECRET_ID,
        grant_type: 'password',
        redirect_uri: REACT_APP_REDIRECT_URL,
        email: email,
        password: password
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('refresh_token', data.refresh_token);
          window.location = `http://localhost:3000`;
        }
      });
  };

  return (
    <>
      <div className="d-flex align-items-center ps-2 my-4">
        <img
          src={localStorage.getItem('access_token') ? UserAvatar : GuestIcon}
          className="user-avatar"
          alt={`user-avatar`}
        />
        {!localStorage.getItem('access_token') && (
          <div>
            <a href={sineWaveSignupPath} className="btn btn-link ps-5">
              REGISTER
            </a>
            <button className="btn btn-link" onClick={handleShow}>
              SIGN IN
            </button>
          </div>
        )}
        {localStorage.getItem('access_token') && (
          <div className="d-flex gap-3 ms-2">
            <div>
              <h6 className="username">Michale Angelo</h6>
              <span className="account-type">Account Type - Fan</span>
            </div>
            <ProfileSwitchModal />
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="btn btn-secondary float-end" onClick={handleSignIn}>
            Sign In
          </button>
        </Modal.Body>
        <Modal.Footer>
          <span> Do not have an account? </span>
          <a href={sineWaveSignupPath} className="btn btn-link">
            Register
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignInModal;
