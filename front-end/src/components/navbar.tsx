import React, { useState, useEffect } from "react";

interface Props {
  collapseSidebar: Boolean;
  setCollapseSidebar: Function;
}

const Navbar: React.FC<Props> = (props) => {
  console.log(props.collapseSidebar);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            onClick={() => {
              props.setCollapseSidebar(!props.collapseSidebar);
            }}
            type="button"
            id="sidebarCollapse"
            className={`btn btn-sm btn-primary`}
          >
            <i className={`bi fs-6 ${props.collapseSidebar ? "bi-text-indent-left":"bi-text-indent-right " }`}></i> <span></span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="ms-4 d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
