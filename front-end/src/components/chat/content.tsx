import React, { useEffect, useState } from "react";

const ChatContent = (props: any) => {
  const [message, setMessage] = useState<any>([]);
  useEffect(() => {
    setMessage([]);
    if (props.activeChat.id !== undefined) {
      for (let i = 0; i < props.activeChat.sent.length; i++) {
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
    <div className="row chat-content">
      {message.map((i: any, ind: any) => (
        <div key={ind} className="d-block">
          <div className="card w-25 d-block">
            <p
              className={`${
                props.activeChat.sent.includes(i)
                  ? "text-primary"
                  : "text-success"
              }`}
            >
              {i}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContent;
