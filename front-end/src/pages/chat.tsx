import React, { useEffect, useState } from "react";
import "../scss/chat.scss";
import useWindowDimensions from "../Hooks/useWindowDimensions ";
import LeftChatBar from "../components/chat/leftBar";
import ChatHeader from "../components/chat/header";
import ChatContent from "../components/chat/content";
import ChatFooter from "../components/chat/footer";

const ChatPage = () => {
  const { height,width } = useWindowDimensions();
  const [activeChat, setActiveChat] = useState({});
  const [usersArray, setUserArray] = useState<any>([
    {
      name: "Michel John",
      date: "1 min ago",
      message: "Helo this is a long message to be sent",
      quantity: "2",
      receive: ["Hi", "How are you?", "Doing great!"],
      sent: ["Hello", "I am fine Thanks, how are you doing?"],
      id: 0,
    },
    {
      name: "Andy Mark",
      date: "25 mins ago",
      message: "just a message",
      quantity: "1",
      id: 1,
      sent: ["Hey Andy", "I need to tell you something...", "Are you here??!"],
      receive: ["Yup","🤦‍♂️","nope"],
    },
    {
      name: "Sara Marvel",
      date: "5 mins ago",
      message: "short message",
      quantity: "3",
      id: 2,
      sent: ["Are you up for a movie tonight?","Sure at home silly","I'm down bro!","Deal then","whatsapp","👀","for real man"],
      receive: ["Hmmm, at home or?","I thought we would go out","I was born ready","😎","oh shoot","I forgot","sorry dude","u here?","🤔"],
    },
    {
      name: "Henry August",
      date: "25 mins ago",
      message: "just a message",
      quantity: "",
      id: 3,
      sent: [],
      receive: [],
    },
    {
      name: "Maya Jackson",
      date: "30 days ago",
      message: "well here we go again",
      quantity: "",
      id: 4,
      sent: [],
      receive: [],
    },
    {
      name: "Mike Stud",
      date: "5 mins ago",
      message: "another thing to tell",
      quantity: "",
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
      quantity: "",
      id: 7,
      sent: [],
      receive: [],
    },
    {
      name: "Jim Paly",
      date: "5 mins ago",
      message: "short message",
      quantity: "",
      id: 8,
      sent: [],
      receive: [],
    },
    {
      name: "Cramer Fikinston",
      date: "25 mins ago",
      message: "just a message",
      quantity: "",
      id: 9,
      sent: [],
      receive: [],
    },
    {
      name: "Maria Dabster",
      date: "30 days ago",
      message: "well here we go again",
      quantity: "",
      id: 10,
      sent: [],
      receive: [],
    },
    {
      name: "Steve Jobs",
      date: "5 mins ago",
      message: "another thing to tell",
      quantity: "",
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
      quantity: "",
      id: 13,
      sent: [],
      receive: [],
    },
    {
      name: "George Bally",
      date: "5 mins ago",
      message: "short message",
      quantity: "",
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
          width={width}
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
