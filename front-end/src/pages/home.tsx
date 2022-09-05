import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";
const Home: FC = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  const [collapseSidebar, setCollapseSidebar] = useState<Boolean>(false);
  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" className={`${collapseSidebar && "active"}`}>
          <div className="sidebar-header">
            <h3>Merth AP</h3>
            <strong>MAP</strong>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-home"></i>
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
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
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-copy"></i>
                Pages
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
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

          <ul className="list-unstyled CTAs">
            <li>
              <a
                href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                className="download"
              >
                Download source
              </a>
            </li>
            <li>
              <a
                href="https://bootstrapious.com/p/bootstrap-sidebar"
                className="article"
              >
                Back to article
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content">
            <Navbar  collapseSidebar={collapseSidebar} setCollapseSidebar={setCollapseSidebar}  />
          

          <h2>Collapsible Sidebar Using Bootstrap 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="line"></div>

          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="line"></div>

          <h2>Lorem Ipsum Dolor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="line"></div>

          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
