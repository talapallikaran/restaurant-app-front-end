import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../view/Home/Home";
import Login from "../view/Authentication/Login";
import OtpStep from "../view/Authentication/OtpStep";

/*Component file imports*/

function Routers(props) {
  const { history } = props;
  return (
    <Router location={history} navigator={history}>
      <Routes>
        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/otpstep"} element={<OtpStep />} />
      </Routes>
    </Router>
  );
}

export default Routers;
