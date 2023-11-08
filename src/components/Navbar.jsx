import React from "react";
import "../styles/components/Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = ({users}) => {
  const logoutFunction = async () => {
    toast.success("Çıkış işlemi gerçekleştiriliyor..");
    await signOut(auth);
    setTimeout(() => {
      window.location = "/";
    }, 1000);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logoutFunction} className="navbar-right">
        {users ? "Logout" : null}
      </div>
    </div>
  );
};

export default Navbar;
