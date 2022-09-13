import React, { useEffect, useState } from "react";
import "../scss/chat.scss";
import useWindowDimensions from "../Hooks/useWindowDimensions ";
import LeftChatBar from "../components/chat/leftBar";
import ChatHeader from "../components/chat/header";
import ChatContent from "../components/chat/content";
import ChatFooter from "../components/chat/footer";

const ChatPage = () => {
  const { height } = useWindowDimensions();
  const [activeChat, setActiveChat] = useState({});
  const [usersArray, setUserArray] = useState<any>([
    {
      name: "Michel John",
      date: "1 min ago",
      message: "Helo this is a long message to be sent",
      quantity: "3",
      sent: ["Hi", "How are you?", "Doing great!"],
      receive: ["Hello", "I am fine Thanks, how are you doing?"],
      id: 0,
    },
    {
      name: "Andy Mark",
      date: "25 mins ago",
      message: "just a message",
      quantity: "0",
      id: 1,
      sent: ["Hi", "How are you?", "Doing great!"],
      receive: ["Hello", "I am fine Thanks, how are you doing?"],
    },
    {
      name: "Sara Marvel",
      date: "5 mins ago",
      message: "short message",
      quantity: "1",
      id: 2,
      sent: [],
      receive: [],
    },
    {
      name: "Henry August",
      date: "25 mins ago",
      message: "just a message",
      quantity: "0",
      id: 3,
      sent: [],
      receive: [],
    },
    {
      name: "Maya Jackson",
      date: "30 days ago",
      message: "well here we go again",
      quantity: "3",
      id: 4,
      sent: [],
      receive: [],
    },
    {
      name: "Mike Stud",
      date: "5 mins ago",
      message: "another thing to tell",
      quantity: "4",
      id: 5,
      sent: [],
      receive: [],
    },
    {
      name: "Dwight Penterson",
      date: "3 hrs ago",
      message: "one word",
      quantity: "",
      id: 6,
      sent: [],
      receive: [],
    },
    {
      name: "Michel Scot",
      date: "1 min ago",
      message: "Helo this is a long message to be sent",
      quantity: "3",
      id: 7,
      sent: [],
      receive: [],
    },
    {
      name: "Jim Paly",
      date: "5 mins ago",
      message: "short message",
      quantity: "1",
      id: 8,
      sent: [],
      receive: [],
    },
    {
      name: "Cramer Fikinston",
      date: "25 mins ago",
      message: "just a message",
      quantity: "0",
      id: 9,
      sent: [],
      receive: [],
    },
    {
      name: "Maria Dabster",
      date: "30 days ago",
      message: "well here we go again",
      quantity: "3",
      id: 10,
      sent: [],
      receive: [],
    },
    {
      name: "Steve Jobs",
      date: "5 mins ago",
      message: "another thing to tell",
      quantity: "4",
      id: 11,
      sent: [],
      receive: [],
    },
    {
      name: "Albert Math",
      date: "3 hrs ago",
      message: "one word",
      quantity: "",
      id: 12,
      sent: [],
      receive: [],
    },
    {
      name: "Ghandy Manstonn",
      date: "1 min ago",
      message: "Helo this is a long message to be sent",
      quantity: "3",
      id: 13,
      sent: [],
      receive: [],
    },
    {
      name: "George Bally",
      date: "5 mins ago",
      message: "short message",
      quantity: "1",
      id: 14,
      sent: [],
      receive: [],
    },
  ]);

  return (
    <div className="main-chat-container" style={{ height: height - 120 }}>
      <div className="row h-100  ">
        <LeftChatBar
          usersArray={usersArray}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
        <div className="main-content h-100 g-0">
          {activeChat ? (
            <>
              <ChatHeader activeChat={activeChat} />
              <ChatContent activeChat={activeChat} />
              <ChatFooter
                activeChat={activeChat}
                setActiveChat={setActiveChat}
                usersArray={usersArray}
                setUserArray={setUserArray}
              />
            </>
          ) : (
            <div className="defaultView">Select a chat to start 🙌</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
