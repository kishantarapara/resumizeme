import logo from "../../icons/logo.svg";
import search from "../../icons/search.svg";
import template from "../../icons/template.svg";
import clock from "../../icons/clock.svg";
import myBoard from "../../icons/myBoard.svg";
import add from "../../icons/add.svg";
import settings from "../../icons/settings.svg";
import profile from "../../assets/profile.png";

import "./sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ searches, myBoards, userName }) => {
  return (
    <div className="sidebar-container column-flex r-gap-10">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <SidebarItem icon={<img src={template} />} label="My Templates" bold />
      </div>
      <div className="column-flex r-gap-10">
        <SidebarItem icon={<img src={search} />} label="Search" bold />
        {searches.staredSearches.map((item) => (
          <SidebarItem key="item" icon={<span>⭐️</span>} label={item} />
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
          <SidebarItem key="item" icon={<span>🗂️</span>} label={item} />
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
  );
};

export default Sidebar;
