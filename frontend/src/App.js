import React from "react";
import { Route } from "react-router-dom";
import Chat from "./Pages/Chat";
import Homepage from "./Pages/Homepage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chat} />
    </div>
  );
};

export default App;
