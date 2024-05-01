import React from 'react';
import LightForwardArrow from '../../../assets/sideBar/light-arrow-right.svg';
import DarkForwardArrow from '../../../assets/sideBar/dark-arrow-right.svg';

const SubMenuItems = ({ id, icon, name, subMenu, link, darkMode, handleSubMenuClick }) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      key={id}
      className="d-flex align-items-center ps-3 mb-4 pe-2 mt-3"
      onClick={() => handleSubMenuClick(subMenu, name, link)}>
      <img src={icon} className="icon" alt={`${name}-icon`} />
      <span className="ms-4">{name}</span>
      {subMenu.length >= 1 && (
        <img
          src={darkMode ? DarkForwardArrow : LightForwardArrow}
          className="sub-icon"
          alt={`${name}-icon`}
        />
      )}
    </div>
  );
};

export default SubMenuItems;
