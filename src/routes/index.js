import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../view/Authentication/Login";
import OtpStep from "../view/Authentication/OtpStep";
import QrCodeGenerator from "../view/QrCode/QrCodeGenerator";
import QrCodeScanner from "../view/QrCode/QrCodeScanner";
import CheckOut from "../view/CheckOut";
import ThankYou from "../components/ThankYou";
import SearchRestarunt from "../view/SearchRestarunt";
import MenuLandingPage from "../view/Menu/MenuLandingPage";

function Routers(props) {
  const { history } = props;

  const [user, setUser] = useState(localStorage.getItem("user"));

  const logout = () => {
    history.push("/restaurant");
  };

  if (!user) {
    {
      logout();
    }
  }
  return (
    <BrowserRouter
      basename="/restaurant"
      location={history}
      navigator={history}
    >
      <Routes>
        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/OtpStep"} element={<OtpStep />} />
        <Route exact path={"/QrCodeGenerator"} element={<QrCodeGenerator />} />
        <Route exact path={"/QrCodeScanner"} element={<QrCodeScanner />} />
        <Route exact path={"/CheckOut"} element={<CheckOut />} />
        <Route exact path={"/ThankYou"} element={<ThankYou />} />
        <Route exact path={"/SearchRestarunt"} element={<SearchRestarunt />} />
        <Route
          exact
          path={"/MenuLandingPage/:id"}
          element={<MenuLandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
