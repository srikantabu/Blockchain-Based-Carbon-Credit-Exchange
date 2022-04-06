import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "side-text",
  },
  {
    title: "Buyer",
    path: "/buyer",
    icon: <FaIcons.FaSellsy />,
    cName: "side-text",
  },
  {
    title: "Seller",
    path: "/seller",
    icon: <SiIcons.SiSellfy />,
    cName: "side-text",
  },
  {
    title: "Bank Account",
    path: "/bankaccount",
    icon: <AiIcons.AiOutlineBank />,
    cName: "side-text",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <CgIcons.CgTranscript />,
    cName: "side-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
    cName: "side-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <BiIcons.BiLogOut />,
    cName: "side-text",
  },
];
