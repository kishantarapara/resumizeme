import logo from "../../icons/logo.svg";
import x from "../../icons/x.svg";
import menu from "../../icons/menu.svg";
import search from "../../icons/search.svg";
import template from "../../icons/template.svg";
import clock from "../../icons/clock.svg";
import myBoard from "../../icons/myBoard.svg";
import add from "../../icons/add.svg";
import settings from "../../icons/settings.svg";
import profile from "../../assets/profile.png";

import "./sidebar.css";
import SidebarItem from "./SidebarItem";
import { useState } from "react";

const Sidebar = ({ searches, myBoards, userName, forMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} />
          <img src={menu} onClick={() => setIsOpen(true)} />
        </div>
      </nav>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`sidebar-container column-flex r-gap-10 ${
          isOpen ? "show" : "hide"
        }`}
      >
        <div className="logo">
          <img src={logo} />
          {forMobile && <img src={x} />}
        </div>
        <div>
          <SidebarItem
            icon={<img src={template} />}
            label="My Templates"
            bold
          />
        </div>
        <div className="column-flex r-gap-10">
          <SidebarItem icon={<img src={search} />} label="Search" bold />
          {searches.staredSearches.map((item) => (
            <SidebarItem key={item} icon={<span>⭐️</span>} label={item} />
          ))}
          {searches.history.map((item) => (
            <SidebarItem key={item} icon={<img src={clock} />} label={item} />
          ))}
        </div>
        <div className="column-flex r-gap-10">
          <SidebarItem
            icon={<img src={myBoard} />}
            label="My boards"
            bold
            endIcon={<img src={add} />}
          />
          {myBoards.boards.map((item) => (
            <SidebarItem key={item} icon={<span>🗂️</span>} label={item} />
          ))}
          {myBoards.boardAgents.map((item) => (
            <SidebarItem key={item} icon={<span>🔒</span>} label={item} />
          ))}
        </div>
        <div className="spacer" />
        <div className="sidebar-footer">
          <SidebarItem
            className="gap-10"
            icon={<img className="sidebar-footer-profile" src={profile} />}
            label={userName}
            bold
            endIcon={<img src={settings} />}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
