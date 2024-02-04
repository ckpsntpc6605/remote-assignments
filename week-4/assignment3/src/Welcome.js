import React, { useState } from "react";

const Welcome = () => {
  const [title, setTitle] = useState("Welcome Message");
  const changTitle = () => {
    setTitle("Have a Good Time!");
  };

  return (
    <div className="welcome">
      <h1 onClick={changTitle}>{title}</h1>
    </div>
  );
};

export default Welcome;
