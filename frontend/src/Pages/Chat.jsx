import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chat, setChat] = useState([]);

  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat");
    setChat(data);
  };
  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <>
      {chat.map((e) => {
        return <div key={e._id}>{e.chatName}</div>;
      })}
    </>
  );
};

export default Chat;
