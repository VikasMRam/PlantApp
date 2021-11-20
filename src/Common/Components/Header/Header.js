import React, { useContext, useState } from "react";
import "./Header.scss";
import { RouterContext } from "../../Contexts/RouterContext/RouterContext";
import { AppUrls } from "../../../Constants/AppUrls";
import sidebar_open from "./../../../Assets/Icons/sidebar_open.png";
import sidebar_close from "./../../../Assets/Icons/sidebar_close.png";

const menuItems = [
  {
    name: "Home",
    path: AppUrls.Home,
  },
  {
    name: "Available Plants",
    path: AppUrls.ALL_PLANTS,
  },
  {
    name: "About",
    path: AppUrls.ABOUT_US,
  },
];

function Header() {
  const { navigate } = useContext(RouterContext);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toHome = () => {
    navigate(AppUrls.Home);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const menuItemClicked = (item) => {
    toggleSideBar();
    navigate(item.path);
  };

  return (
    <div className="headerCompContainer">
      <div className="companyName" onClick={toHome}>
        Plant App
      </div>

      <div className="hamburgerMenu">
        <div className="hamburgerMenuIcon" onClick={toggleSideBar}>
          {isSideBarOpen && <img src={sidebar_open} />}
          {!isSideBarOpen && <img src={sidebar_close} />}
        </div>
      </div>

      {isSideBarOpen && (
        <>
          <div
            className="hamburgerMenuBackground"
            onClick={toggleSideBar}
          ></div>
          <div className="hamburgerMenuContent">
            {menuItems.map((item) => (
              <div
                className="hamburgerMenuItem"
                onClick={() => menuItemClicked(item)}
                key={item.path}
              >
                {item.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
