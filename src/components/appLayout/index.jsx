import React from 'react';
import { useState } from 'react';
import SideBar from '../appLayout/Sidebar/SideBar';
import Header from './Header';
import BottomNavBar from '../appLayout/BottomNavBar';
import '../../styles/appLayout/BottomNavBar.scss';

const AppLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="d-flex w-100 h-100">
      <div>
        <SideBar expanded={expanded} setExpanded={setExpanded} />
      </div>

      <div id="main" className="w-100 h-100 left-pane">
        <Header />
        {children}
      </div>
      <div className="bottom-navbar-container">
        <BottomNavBar expanded={expanded} setExpanded={setExpanded} />
      </div>
    </div>
  );
};

export default AppLayout;
