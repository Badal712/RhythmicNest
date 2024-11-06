import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../Image/Logo.png";
import menu_White from "../Image/menu_White.png";
import SidebarButton from "./sidebarButton";

import { MdFavorite } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

export default function Sidebar() {

  const [isNameVisible, setIsNameVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNameVisibility = () => {
    setIsNameVisible((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
    toggleNameVisibility();
  };

  return (
    <div className={`sidebar_container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar_header">
        <img
          src={menu_White}
          alt="menu"
          className="menu"
          onClick={() => {
            toggleSidebar();
            // toggleNameVisibility();
          }}
        />
        <div className="logo">
          <img src={Logo} className="logoImg" alt="Logo" />
          {isNameVisible && (
            <a href="/" className="name">
              RhythmicNest
            </a>
          )}
        </div>
      </div>
      <div>
        <SidebarButton title={isNameVisible ? "Feed" : ""} to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title={isNameVisible ? "Trending" : ""} to="/trending" icon={<FaGripfire />} />
        <SidebarButton title={isNameVisible ? "Player" : ""} to="/player" icon={<FaPlay />} />
        <SidebarButton title={isNameVisible ? "Favorites" : ""} to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title={isNameVisible ? "Library" : ""} to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title={isNameVisible ? "Sign Out" : ""} to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
