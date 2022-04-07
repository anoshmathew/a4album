import { Routes, Route, Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import UserMain from "../users/UserMain";
import Login from "./home/Login";
function App() {
  const [usernameAuth, setUsernameAuth] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login usernameAuth={usernameAuth} setUsernameAuth={setUsernameAuth}  />} />
        <Route path="user/*" element={<UserMain usernameAuth={usernameAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
