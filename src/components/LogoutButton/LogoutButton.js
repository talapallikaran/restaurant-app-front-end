import React from "react";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("menuItems");
    localStorage.removeItem("rzp_device_id");
    navigate("/");
  };

  return (
    <CustomButton
      className="Logout"
      name="LogOut"
      type="Submit"
      onClick={handleLogout}
    />
  );
};

export default LogoutButton;
