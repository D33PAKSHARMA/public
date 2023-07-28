import React from "react";
import { Link } from "react-router-dom";

const Leftbar = () => {
  return (
    <div className="left-side-menu">
      <div className="h-100" data-simplebar>
        <div className="user-box text-center">
          <img
            src="/assets/images/users/user-1.jpg"
            alt="user-img"
            title="Mat Helme"
            className="rounded-circle avatar-md"
          />
          <div className="dropdown">
            <a
              href="javascript: void(0);"
              className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
              data-bs-toggle="dropdown"
            >
              Geneva Kennedy
            </a>
            <div className="dropdown-menu user-pro-dropdown">
              <a href="profile.html" className="dropdown-item notify-item">
                <i className="fe-user me-1" />
                <span>Profile</span>
              </a>
              <a
                href="change-password.html"
                className="dropdown-item notify-item"
              >
                <i className="fe-lock me-1" />
                <span>Change Password</span>
              </a>
              <a href="index.html" className="dropdown-item notify-item">
                <i className="fe-log-out me-1" />
                <span>Logout</span>
              </a>
            </div>
          </div>
          <p className="text-muted">Admin Head</p>
        </div>
        <div id="sidebar-menu">
          <ul id="side-menu">
            <li>
              <Link to="/client/overview">
                <i className="mdi mdi-chart-box-plus-outline" />
                <span> Overview </span>
              </Link>
            </li>
            <li>
              <Link to="/client/inventory">
                <i className="mdi mdi-diamond-stone" />
                <span> Inventory </span>
              </Link>
            </li>
            <li>
              <Link to="/client/loss-profit">
                <i className="mdi mdi-currency-usd-circle-outline" />
                <span> Loss Profit </span>
              </Link>
            </li>
            <li>
              <Link to="/client/add-ons">
                <i className="mdi mdi-view-grid-plus-outline" />
                <span> Add-Ons </span>
              </Link>
            </li>
            <li>
              <Link to="/client/messages">
                <i className="mdi mdi-message-text-outline" />
                <span> Messages </span>
              </Link>
            </li>
            <li>
              <Link to="/client/orders">
                <i className="mdi mdi-cart-variant" />
                <span> Order </span>
              </Link>
            </li>
            <li>
              <Link to="/client/users">
                <i className="mdi mdi-account-outline" />
                <span> User </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default Leftbar;
