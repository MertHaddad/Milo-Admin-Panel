import React from "react";
import profileImage from "./../../assets/images/chat/profile.jpg";

const ChatHeader = (props:any) => {
  return (
    <div className="row ">
      <div className=" chat-title ">
        <div>
          <img src={profileImage} className="chat-avatar d-inline" alt="" />
          <p className="d-inline mx-2 text-white">{props.activeChat.name}</p>
        </div>
        <div>
          <button className="btn">
            <i className="bi bi bi-search "></i>
          </button>
          <button className="btn">
            <i
              className="bi bi-three-dots-vertical "
              data-bs-toggle="dropdown"
            ></i>
            <ul className="dropdown-menu dropdown-menu-end">
              <div className="col">
                <li>
                  <a className="dropdown-item" href="#">
                    Menu item
                  </a>
                </li>
              </div>
              <div className="col">
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
              </div>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
