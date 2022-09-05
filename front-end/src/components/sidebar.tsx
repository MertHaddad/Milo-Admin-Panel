import React from "react";

interface Props {
  collapseSidebar: Boolean;
}

const Sidebar = (props: Props) => {
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
        <li className="active">
          <a
            href="#collapseHome"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="bi bi-house-door"></i>
            Home
          </a>
          <ul className="collapse list-unstyled" id="collapseHome">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-briefcase"></i>
            About
          </a>
          <a
            href="#collapsePages"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            <i className="fas fa-copy"></i>
            Pages
          </a>
          <ul className="collapse list-unstyled" id="collapsePages">
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
        </li>
        <li>
          <a href="#">
            <i className="fas fa-image"></i>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-question"></i>
            FAQ
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-paper-plane"></i>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
