import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // console.log("Back");
    navigate(-1);
  };
  return (
    <div className="navbar-custom">
      <div className="container-fluid">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="dropdown notification-list topbar-dropdown">
            <Link
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-bell noti-icon"></i>
              <span className="badge bg-danger rounded-circle noti-icon-badge">
                9
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-lg">
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-end">
                    <Link href="" className="text-dark">
                      <small>Clear All</small>
                    </Link>
                  </span>
                  Notification
                </h5>
              </div>
              <div className="noti-scroll" data-simplebar>
                <Link
                  href="javascript:void(0);"
                  className="dropdown-item notify-item active"
                >
                  <div className="notify-icon">
                    <img
                      src="/assets/images/users/user-1.jpg"
                      className="img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="notify-details">Cristina Pride</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </Link>
              </div>
              <Link
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item notify-all"
              >
                View all
                <i className="fe-arrow-right"></i>
              </Link>
            </div>
          </li>
          <li className="dropdown notification-list topbar-dropdown">
            <Link
              className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="/assets/images/users/user-1.jpg"
                alt="user-image"
                className="rounded-circle"
              />
              <span className="pro-user-name ms-1">
                Geneva <i className="mdi mdi-chevron-down"></i>
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              <Link
                to="/employee/profile"
                className="dropdown-item notify-item"
              >
                <i className="fe-user"></i>
                <span>Profile</span>
              </Link>
              <Link
                to="/employee/settings"
                className="dropdown-item notify-item"
              >
                <i className="fe-settings"></i>
                <span>Settings</span>
              </Link>
              <Link
                to="/employee/change-password"
                className="dropdown-item notify-item"
              >
                <i className="fe-lock"></i>
                <span>Change Password</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/employee" className="dropdown-item notify-item">
                <i className="fe-log-out"></i>
                <span>Logout</span>
              </Link>
            </div>
          </li>
          <li className="dropdown notification-list">
            <Link
              to="/employee/settings"
              className="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i className="fe-settings noti-icon"></i>
            </Link>
          </li>
        </ul>
        <div className="logo-box">
          <Link to="" className="logo logo-dark text-center" onClick={goBack}>
            <span className="logo-sm">
              <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px"></i>
            </span>
            <span className="logo-lg">
              <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px"></i>
              <Link to="/department">
                <img
                  src="/assets/images/new-logo.png"
                  alt=""
                  height="50"
                  className="mb-1"
                />
              </Link>
            </span>
          </Link>
          <Link to="" className="logo logo-light text-center" onClick={goBack}>
            <span className="logo-sm">
              <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px"></i>
            </span>
            <span className="logo-lg">
              <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px"></i>
              <img
                src="/assets/images/new-logo.png"
                alt=""
                height="50"
                className="mb-1"
              />
            </span>
          </Link>
        </div>
        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button className="button-menu-mobile waves-effect waves-light">
              <i className="fe-menu"></i>
            </button>
          </li>
          <li>
            <Link
              className="navbar-toggle nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Header;
