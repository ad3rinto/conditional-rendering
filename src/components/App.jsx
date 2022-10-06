import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function renderConditionally(){
  if (isLoggedIn === true){
    return<h1>Hello There</h1>
  } else {
    return <Login />
  }
};

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
