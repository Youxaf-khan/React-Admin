import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import SubMenuItems from './SubMenuItems';
import { TAB_ITEMS } from '../../../constants/SideItems';

import BackArrowIcon from '../../../assets/sideBar/arrow_back.svg';
import BackArrowLightIcon from '../../../assets/sideBar/arrow-back-light.svg';

const TabItems = ({ activeTab, miniSideBar, darkMode }) => {
  const [open, setOpen] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuName, setMenuName] = useState(TAB_ITEMS[activeTab.value][0].name);
  const [subMenuItems, setSubMenuItems] = useState([TAB_ITEMS[activeTab.value]]);

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const handleSubMenuClick = (subMenuItems, menuName, link) => {
    if (subMenuItems && subMenuItems.length !== 0) {
      setShowSubMenu(true);
      setMenuName(menuName);
      setSubMenuItems(subMenuItems);
      setBreadcrumbs([...breadcrumbs, { menuName, subMenuItems }]);
    } else if (link && link.length !== 0) {
      window.open(link);
    } else {
      return;
    }
  };

  const handleBackArrowClick = () => {
    const updatedBreadcrumbs = [...breadcrumbs];
    updatedBreadcrumbs.pop();

    if (updatedBreadcrumbs.length == 0) {
      setShowSubMenu(false);
      setBreadcrumbs([]);
      return;
    }

    const { menuName, subMenuItems } = updatedBreadcrumbs[updatedBreadcrumbs.length - 1];
    setShowSubMenu(true);
    setMenuName(menuName);
    setSubMenuItems(subMenuItems);
    setBreadcrumbs(updatedBreadcrumbs);
  };

  const renderSubMenu = () => {
    return (
      <div className="submenu">
        <img
          style={{ cursor: 'pointer' }}
          src={darkMode ? BackArrowIcon : BackArrowLightIcon}
          onClick={handleBackArrowClick}
          className="ps-3 mb-3 mt-3"
          alt="Back Arrow"
        />
        <span className="p-4">{menuName}</span>
        {subMenuItems.map(({ id, icon, name, subMenu, link }) => (
          <SubMenuItems
            key={id}
            icon={icon}
            name={name}
            subMenu={subMenu}
            link={link}
            handleSubMenuClick={handleSubMenuClick}
            darkMode={darkMode}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="tab-content mt-3" style={{ overflowY: 'scroll' }}>
      {showSubMenu ? (
        renderSubMenu()
      ) : (
        <>
          {!miniSideBar && (
            <div
              style={{ cursor: 'pointer' }}
              className="collapse-button"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}>
              {activeTab.heading}
            </div>
          )}
          <Collapse in={open}>
            <div id="example-collapse-text" className="tab-content-container">
              {TAB_ITEMS[activeTab.value].map(({ id, icon, name, subMenu }) => (
                <SubMenuItems
                  key={id}
                  icon={icon}
                  name={name}
                  subMenu={subMenu}
                  handleSubMenuClick={handleSubMenuClick}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </Collapse>
        </>
      )}
    </div>
  );
};

export default TabItems;
