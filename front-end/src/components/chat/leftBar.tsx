import React from "react";
import profileImage from "./../../assets/images/chat/profile.jpg";

const LeftChatBar = (props: any) => {
  return (
    <>
      <div className="col-3  h-100 left-sidebar">
        <div className="row  g-0">
          <div className="left-bar-title">
            <img src={profileImage} className="avatar" alt="" />
            <div>
              <button className="btn">
                <i className="bi bi-chat-left-text mx-2"></i>
              </button>
              <button className="btn">
                <i
                  className="bi bi-three-dots-vertical"
                  data-bs-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu dropdown-menu-start">
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="row w-100 g-0 left-bar-search ">
          <form className="form-inline w-100 my-2 my-lg-0 ">
            <input
              className="form-control mr-sm-2 search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        <div className="row w-100  g-0 left-bar-list overflow-auto ">
          <div className="list-group w-100 rounded-0 ">
            {props.usersArray.map((item: any, i: any) => (
              <span
                onClick={() => {
                  // item.userId = i
                  props.setActiveChat(item);
                }}
                key={i}
                // href="/"
                className={`list-group-item list-group-item-action
                      ${
                        props.activeChat.name === item.name &&
                        props.activeChat.id === i &&
                        "active"
                      }
                    `}
                aria-current="true"
              >
                <div className="row">
                  <div className="col-2">
                    <img src={profileImage} className="avatar-min" alt="" />
                  </div>
                  <div className="col-10">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1">{item.name}</h6>
                      <small>{item.date}</small>
                    </div>
                    <div className="d-flex w-100 justify-content-between ">
                      <small className="text-truncate">{item.message}</small>
                      <span className="badge bg-danger rounded-pill">
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftChatBar;
