import { useState, useEffect } from "react";

import iconService from "services/icons";
import { NAV_LINK } from "services/constant";

const NavBarComponent = (props) => {
  // checks which navigation is selected - used for selectively rendering highlight
  const [selectedNav, setSelectedNav] = useState();

  // dummy notification count - used to add notification indicator
  const [notificationCount, setNotificationCount] = useState(4);

  const MainLogoSVG = iconService("logo");
  const LogOutSVG = iconService("logout");

  const NavLink = () => {
    return (
      <ul className="navbar-menu">
        {NAV_LINK.map((nav_item) => {
          const { id, icon: IconSVG, name } = nav_item;

          const NOTIFICATION_SELECTOR = "notification";

          const isSelected = name === selectedNav;
          const isNotification =
            name === NOTIFICATION_SELECTOR && notificationCount > 0;

          return (
            <li
              key={id}
              className={`navbar-menu-item navbar-menu-item-${name}`}
              onClick={() => setSelectedNav(name)}
            >
              <a
                href="/"
                className={`navbar-menu-item-icon ${
                  isSelected ? "navbar-menu-item-icon-selected" : ""
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  NOTIFICATION_SELECTOR === name && setNotificationCount(0);
                }}
              >
                {isNotification && (
                  <span className="navbar-menu-item-icon-notification" />
                )}
                <IconSVG className="navbar-menu-item-icon-value" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    setSelectedNav(NAV_LINK[0].name);
  }, []);

  return (
    <nav className="navbar">
      <MainLogoSVG className="navbar-logo" />
      <NavLink />
      <div className="navbar-menu-item navbar-menu-item-last">
        <LogOutSVG className="navbar-menu-item-icon-value" />
      </div>
    </nav>
  );
};

export default NavBarComponent;
