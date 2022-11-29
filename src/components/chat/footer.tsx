import React, { useState } from "react";
import Picker from "emoji-picker-react";

const ChatFooter = (props: any) => {
  const [messageInput, setMessageInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
    setMessageInput(messageInput + "" + emojiObject.emoji);
  };

  const handleSend = () => {
    props.setActiveChat({
      ...props.activeChat,
      sent: [...props.activeChat.sent, messageInput],
    });
    props.setUserArray((uar: any) => {
      return uar.map((item: any) => {
        return item.id === props.activeChat.id
          ? { ...item, sent: [...item.sent, messageInput] }
          : item;
      });
    });
  };

  return (
    <div className="row chat-footer">
      <div className="emoji-container">
        {showEmoji && <Picker onEmojiClick={onEmojiClick} />}
      </div>
      <div className="col-2">
        <div>
          <button className="btn" onClick={() => setShowEmoji(!showEmoji)}>
            <i className="bi bi-emoji-laughing"></i>
          </button>

          <button className="btn">
            <i className="bi bi bi-paperclip "></i>
          </button>
        </div>
      </div>
      <div className="col">
        <form className="form-inline w-100 my-2 my-lg-0 ">
          <input
            className="form-control mr-sm-2 search-input"
            type="text"
            placeholder="Type a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </form>
      </div>
      <div className="col-2">
        <button onClick={handleSend} className="btn ">
          <i className={messageInput === "" ? "bi bi-mic " : "bi bi-send "}></i>
        </button>
      </div>
    </div>
  );
};
export default ChatFooter;
