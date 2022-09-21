import React, { useEffect, useState } from "react";

const ChatContent = (props: any) => {
  const [message, setMessage] = useState<any>([]);
  useEffect(() => {
    setMessage([]);
    if (props.activeChat.id !== undefined) {
      let len = props.activeChat.sent.length > props.activeChat.receive.length ? props.activeChat.sent.length : props.activeChat.receive.length
      for (let i = 0; i < len; i++) {
        setMessage((message: any) => [
          ...message,
          props.activeChat.sent[i],
          props.activeChat.receive[i],
        ]);
      }
    }
  }, [props]);

  useEffect(() => {
    console.log(message);
  }, [message]);
  return (
    <div className="chat-content row align-content-start">
      {message.map((i: any, ind: any) => (
        <div
          key={ind}
          className={` d-flex    ${
            props.activeChat.sent.includes(i)
              ? "justify-content-end"
              : "justify-content-start"
          }  ${!i && "d-none"}` }
        >
          <div
            className={` ${
              i !== "" && props.activeChat.sent.includes(i)
                ? "sent-message"
                : "received-message"
            }`}
          >
            <p>{i}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContent;
