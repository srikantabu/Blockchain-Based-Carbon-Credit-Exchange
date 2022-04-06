import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"side-menu FlexCenter"}>
          <ul className="side-menu-items">
            {SidebarData.map((item, i) => (
              <li key={i} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
