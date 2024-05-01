import React from 'react';
import '../../styles/appLayout/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CcIcon from '../../assets/sideBar/crystalcommerce_icon.svg';
import {
  faBell,
  faCartShopping,
  faCircleQuestion,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container d-flex align-items-center px-3">
      <img id="icon" src={CcIcon} className="cc-icon" alt={`CrystalCommerce-icon`} />
      <div className="vertical-line"></div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
        <input placeholder="Search" />
      </div>

      <div className="header-icons d-flex gap-4">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
      </div>
    </div>
  );
};

export default Header;
