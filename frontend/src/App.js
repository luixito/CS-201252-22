import React from "react";
import Login from "./login/login";
import Recoverypass from "./recovery/Recovery.jsx"
import Home from "./homepage/homepage.jsx";
import Updateitem from "./updateitem/update.jsx"
import Create from "./create/create.jsx"
import RecoveryPass from "./recovery/RecoveryPass";
import Authen from "./authentify/authentify.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/recovery" element={<Recoverypass/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/updateitem" element={<Updateitem/>} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/recoverypass" element={<RecoveryPass/>}/>
        <Route path="/autenpass" element={<Authen/>}/>

      </Routes>
    </Router>
  );
}

export default App;
