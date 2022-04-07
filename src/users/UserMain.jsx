import React,{useRef} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Ano1 from './ano1/UserHome'
import Ano2 from './ano2/UserHome'

function UserMain(param) {
  const log = useRef(param.usernameAuth);
  return (
    <div>
        <Routes>
            <Route path="ano1" element={<Ano1 usernameAuth={param.usernameAuth} log={log}/>} />
            <Route path="ano2" element={<Ano2 usernameAuth={param.usernameAuth}/>} />
        </Routes>
    </div>
  )
}

export default UserMain