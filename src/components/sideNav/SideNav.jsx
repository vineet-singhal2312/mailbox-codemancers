import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

const sideNavItems = [
  {
    label: "All Messages",
    link: "/",
  },
  {
    label: "Inbox",
    link: "/inbox",
  },
  {
    label: "Draft",
    link: "/draft",
  },
  {
    label: "Spam",
    link: "/spam",
  },
  {
    label: "Trash",
    link: "/trash",
  },
];

const SideNav = () => {
  return (
    <div className="side-nav rounded-3 p-4">
      <div className="list-group">
        {sideNavItems.map((listItem) => (
          <Link
            className={
              listItem.label === "All Messages"
                ? "list-group-item  list-item-main rounded-3"
                : "list-group-item list-group-item-action rounded-3"
            }
            to={`${listItem.link}`}
          >
            {listItem.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
