import React from 'react';
import '../../../styles/appLayout/Tabs.scss';

import TabItems from './TabItems';

import DotIcon from '../../../assets/sideBar/horizontal.svg';
import LightDotIcon from '../../../assets/sideBar/light_dots.svg';

import { TABS } from '../../../constants/SideItems';

const Tabs = ({ activeTab, miniSideBar, handleTabClick, darkMode }) => {
  return (
    <div className="tab-container">
      {miniSideBar ? (
        <div className="ps-3 mb-4">
          <img src={darkMode ? DotIcon : LightDotIcon} className="icon" alt="dot-icon" />
        </div>
      ) : (
        <ul className="tab-list">
          {TABS.map(({ label, value, heading }, index) => (
            <li
              key={index}
              className={`tab-item ${activeTab?.value === value ? 'active' : ''}`}
              onClick={() => handleTabClick({ value, heading })}>
              {label}
            </li>
          ))}
        </ul>
      )}
      <TabItems activeTab={activeTab} miniSideBar={miniSideBar} darkMode={darkMode} />
    </div>
  );
};

export default Tabs;
