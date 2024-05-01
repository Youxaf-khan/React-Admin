import React, { useState } from 'react';
import '../../../styles/appLayout/SideBar.scss';

import { TABS } from '../../../constants/SideItems';

import Tabs from './Tabs';
import SignInModal from '../../appLayout/Modals/SignInModal';
import SwitchButton from '../Sidebar/SwitchButton';

const SideBar = ({ expanded, setExpanded }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [checked, setDarkMode] = useState(true);
  const [pinned, setPinned] = useState(false);

  const sidebarClasses = `h-100
  ${checked ? 'dark-sidebar-container' : 'light-sidebar-container'}
  ${expanded ? 'expanded' : 'shrinked'}
  ${pinned ? 'pinned-sidebar ' : ''}`;

  function ToggleDarkMode() {
    setDarkMode(!checked);
  }

  function PinSidebar() {
    setPinned(!pinned);
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleMouseEnter = () => {
    if (!pinned) {
      setExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!pinned) {
      setExpanded(false);
    }
  };

  return (
    <div
      id="mySidebar"
      className={sidebarClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <SignInModal />
      <Tabs
        activeTab={activeTab}
        miniSideBar={!expanded}
        darkMode={checked}
        handleTabClick={handleTabClick}
      />
      {expanded && (
        <div className="switch-button-container">
          <SwitchButton handleToggle={ToggleDarkMode} checked={checked} label={'Dark Mode'} />
          <SwitchButton handleToggle={PinSidebar} checked={pinned} label={'Pin Sidebar'} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
