import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';

export default function Nav() {
  let isAuthenticated = true;
  let userName = "Tony";

  if (!isAuthenticated) {
    return (
      <div className="header">
        <div className="header-body">
          <NavLink to="/">
            <img className="main-nav-logo-image" src={logo} alt="Logo" />
          </NavLink>
          <nav className="nav">
            <NavLink to="/profile" className="link" activeclassname="active"><i className="fa fa-user-circle sign-in-icon"></i> User</NavLink>
            <NavLink to="/sign-in" onClick="" className="link" activeclassname="active">
              <i className="fa fa-sign-out sign-in-icon"></i> Sign In</NavLink>
          </nav>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header">
        <div className="header-body">
          <NavLink to="/">
            <img className="main-nav-logo-image" src={logo} alt="Logo" />
          </NavLink>
          <nav className="nav">
            <NavLink to="/profile" className="link" activeclassname="active">{userName}</NavLink>
            <NavLink to="/sign-in" onClick="" className="link" activeclassname="active"><i className="fa fa-user-circle sign-in-icon"></i>Sign Out</NavLink></nav>
        </div>
      </div>
    );
  }
}