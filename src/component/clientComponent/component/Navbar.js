import jwtDecode from "jwt-decode";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("data");
    toast.warning("User Logout Success");
    navigate("/client");
  };

  const token = localStorage.getItem("data");
  const user = jwtDecode(token);
  // console.log(user);

  return (
    <div className="navbar-custom">
      <div className="container-fluid">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fe-bell noti-icon" />
              <span className="badge bg-danger rounded-circle noti-icon-badge">
                9
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-lg">
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-end">
                    <a href className="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>
              <div className="noti-scroll" data-simplebar>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item active"
                >
                  <div className="notify-icon">
                    <img
                      src="/assets/images/users/user-1.jpg"
                      className="img-fluid rounded-circle"
                      alt="image"
                    />
                  </div>
                  <p className="notify-details">Cristina Pride</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">
                    Caleb Flakelar commented on Admin
                    <small className="text-muted">1 min ago</small>
                  </p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <img
                      src="/assets/images/users/user-4.jpg"
                      className="img-fluid rounded-circle"
                      alt="image"
                    />
                  </div>
                  <p className="notify-details">Karen Robinson</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>
                      Wow ! this admin looks good and awesome design
                    </small>
                  </p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-warning">
                    <i className="mdi mdi-account-plus" />
                  </div>
                  <p className="notify-details">
                    New user registered.
                    <small className="text-muted">5 hours ago</small>
                  </p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-info">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">
                    Caleb Flakelar commented on Admin
                    <small className="text-muted">4 days ago</small>
                  </p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-secondary">
                    <i className="mdi mdi-heart" />
                  </div>
                  <p className="notify-details">
                    Carlos Crouch liked
                    <b>Admin</b>
                    <small className="text-muted">13 days ago</small>
                  </p>
                </a>
              </div>
              <a
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item notify-all"
              >
                View all
                <i className="fe-arrow-right" />
              </a>
            </div>
          </li>
          <li className="dropdown notification-list topbar-dropdown">
            <a
              className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="/assets/images/users/user-5.jpg"
                alt="user-image"
                className="rounded-circle"
              />
              <span className="pro-user-name ms-1">
                {user.first_name} <i className="mdi mdi-chevron-down" />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              <a href="profile.html" className="dropdown-item notify-item">
                <i className="fe-user" />
                <span>Profile</span>
              </a>
              <a
                href="change-password.html"
                className="dropdown-item notify-item"
              >
                <i className="fe-lock" />
                <span>Change Password</span>
              </a>
              <div className="dropdown-divider" />
              <Link to="/client" className="dropdown-item notify-item">
                <i className="fe-log-out" />
                <span onClick={() => handleLogout()}>Logout</span>
              </Link>
            </div>
          </li>
          <li className="dropdown notification-list">
            <a
              href="business-setting.html"
              className="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i className="fe-settings noti-icon" />
            </a>
          </li>
        </ul>
        <div className="logo-box">
          <Link to="/client/overview" className="logo logo-dark text-center">
            <span className="logo-sm">
              <img src="/assets/images/new-logo.png" alt="image" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/new-logo.png" alt="image" height={50} />
            </span>
          </Link>
          <Link to="/client/overview" className="logo logo-light text-center">
            <span className="logo-sm">
              <img src="/assets/images/new-logo.png" alt="image" height={22} />
            </span>
            <span className="logo-lg">
              <img src="/assets/images/new-logo.png" alt="image" height={50} />
            </span>
          </Link>
        </div>
        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
          <li>
            <button className="button-menu-mobile waves-effect waves-light">
              <i className="fe-menu" />
            </button>
          </li>
          <li>
            <a
              className="navbar-toggle nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default Navbar;
