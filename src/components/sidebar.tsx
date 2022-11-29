import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  collapseSidebar: Boolean;
}

const Sidebar = (props: Props) => {
  const links = {
    home: "/analytics",
    chat: "/chat",
    calendar: "/calendar",
    email: "/email",
    user: "/user",
  };

  const {pathname} = useLocation();

  return (
    <nav
      id="sidebar"
      className={`bg-dark ${props.collapseSidebar && "active"}`}
    >
      <div className="sidebar-header  bg-dark">
        <h3>Merth AP</h3>
        <strong>MAP</strong>
      </div>

      <ul className="list-unstyled components">
        <Link to={links.home}>
          <li className={`${pathname === links.home && "active"}`}>
            <a>
              <i className="fw-bold bi bi-house-door"></i>
              Home
            </a>
          </li>
        </Link>
        <Link to={links.chat}>
          <li className={`${pathname === links.chat && "active"}`}>
            <a>
              <i className="bi bi-chat-left-dots"></i>
              Chat
            </a>
          </li>
        </Link>
        {/* <li>
          <a
            href="#collapsePages"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="fas fa-copy"></i>
            Pages
          </a>
          <ul  className="collapse list-unstyled" id="collapsePages">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li> */}
        <Link  to={links.calendar}>
          <li className={`${pathname === links.calendar && "active"}`}>
            <a>
              <i className="bi bi-calendar3"></i>
              Calender
            </a>
          </li>
        </Link>
        <Link to={links.email}>
          <li className={`${pathname === links.email && "active"}`}>
            <a>
              <i className="bi bi-envelope"></i>
              Email
            </a>
          </li>
        </Link>
        <Link to={links.user}>
          <li className={`${pathname === links.user && "active"}`}>
            <a>
              <i className="bi bi-person"></i>
              User
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
