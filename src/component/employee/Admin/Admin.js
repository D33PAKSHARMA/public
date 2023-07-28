import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div id="wrapper">
      <div className="navbar-custom nav_nav">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-end mb-0">
            <li className="dropdown notification-list topbar-dropdown">
              <a
                className="nav-link dropdown-toggle waves-effect waves-light"
                data-bs-toggle="dropdown"
                to="#"
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
                      <a to className="text-dark">
                        <small>Clear All</small>
                      </a>
                    </span>
                    Notification
                  </h5>
                </div>
                <div className="noti-scroll" data-simplebar>
                  <a
                    to="javascript:void(0);"
                    className="dropdown-item notify-item active"
                  >
                    <div className="notify-icon">
                      <img
                        src="../assets/images/users/user-1.jpg"
                        className="img-fluid rounded-circle"
                        alt
                      />{" "}
                    </div>
                    <p className="notify-details">Cristina Pride</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Hi, How are you? What about our next meeting
                      </small>
                    </p>
                  </a>
                  <a
                    to="javascript:void(0);"
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
                    to="javascript:void(0);"
                    className="dropdown-item notify-item"
                  >
                    <div className="notify-icon">
                      <img
                        src="../assets/images/users/user-4.jpg"
                        className="img-fluid rounded-circle"
                        alt
                      />{" "}
                    </div>
                    <p className="notify-details">Karen Robinson</p>
                    <p className="text-muted mb-0 user-msg">
                      <small>
                        Wow ! this admin looks good and awesome design
                      </small>
                    </p>
                  </a>
                  <a
                    to="javascript:void(0);"
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
                    to="javascript:void(0);"
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
                    to="javascript:void(0);"
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
                  to="javascript:void(0);"
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
                to="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="assets/images/users/user-5.jpg"
                  alt="user-image"
                  className="rounded-circle"
                />
                <span className="pro-user-name ms-1">
                  Alex <i className="mdi mdi-chevron-down" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>
                <a to="profile.html" className="dropdown-item notify-item">
                  <i className="fe-user" />
                  <span>Profile</span>
                </a>
                <a
                  to="change-password.html"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-lock" />
                  <span>Change Password</span>
                </a>
                <div className="dropdown-divider" />
                <a to="index.html" className="dropdown-item notify-item">
                  <i className="fe-log-out" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
            <li className="dropdown notification-list">
              <a
                to="business-setting.html"
                className="nav-link right-bar-toggle waves-effect waves-light"
              >
                <i className="fe-settings noti-icon" />
              </a>
            </li>
          </ul>
          <div className="logo-box">
            <a to="overview.html" className="logo logo-dark text-center">
              <span className="logo-sm">
                <img src="assets/images/new-logo.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/new-logo.png" alt height={50} />
              </span>
            </a>
            <Link to="/department" className="logo logo-light text-center">
              <span className="logo-sm">
                <img src="assets/images/new-logo.png" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/new-logo.png" alt height={50} />
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
      <div className="left-side-menu color_change">
        <div className="h-100" data-simplebar>
          <div className="user-box text-center">
            <img
              src="assets/images/users/user-1.jpg"
              alt="user-img"
              title="Mat Helme"
              className="rounded-circle avatar-md"
            />
            <div className="dropdown">
              <a
                to="javascript: void(0);"
                className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                data-bs-toggle="dropdown"
              >
                Geneva Kennedy
              </a>
              <div className="dropdown-menu user-pro-dropdown">
                <a to="profile.html" className="dropdown-item notify-item">
                  <i className="fe-user me-1" />
                  <span>Profile</span>
                </a>
                <a
                  to="change-password.html"
                  className="dropdown-item notify-item"
                >
                  <i className="fe-lock me-1" />
                  <span>Change Password</span>
                </a>
                <a to="index.html" className="dropdown-item notify-item">
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
                <Link to="/admin">
                  <i className="mdi mdi-chart-box-plus-outline" />
                  <span> Overview </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/employee">
                  <i className="mdi mdi-diamond-stone" />
                  <span> Employees </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/roles">
                  <i className="mdi mdi-currency-usd-circle-outline" />
                  <span> Roles </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/pages">
                  <i className="mdi mdi-view-grid-plus-outline" />
                  <span> Pages </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/countries">
                  <i className="mdi mdi-message-text-outline" />
                  <span> Countries </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/panels">
                  <i className="mdi mdi-cart-variant" />
                  <span> Panels </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/clients">
                  <i className="mdi mdi-account-outline" />
                  <span> Clients </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/warehouse">
                  <i className="mdi mdi-account-outline" />
                  <span> Warehouse </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/services">
                  <i className="mdi mdi-account-outline" />
                  <span> Services </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/client-info-pack">
                  <i className="mdi mdi-account-outline" />
                  <span> Client Info Pack </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/request">
                  <i className="mdi mdi-account-outline" />
                  <span> Request </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/announcements">
                  <i className="mdi mdi-account-outline" />
                  <span> Announcement </span>
                </Link>
              </li>
              <li>
                <Link to="/admin/products">
                  <i className="mdi mdi-account-outline" />
                  <span> Products </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="content-page" id="content-page-Overview">
        <h2 className="heading-top">Overview</h2>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-box">&nbsp;</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="card" id="tooltip-container ">
                  <div className="card-body">
                    {/* <i className="mdi mdi-chart-areaspline text-muted float-end text-primary mdi-48px" /> */}
                    <div className="flex_flex">
                      <h4 className="mt-0 font-20">Clients</h4>
                      <h2 className="text-primary my-3">
                        <span data-plugin="counterup mt-0">56</span>
                      </h2>
                    </div>
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card" id="tooltip-container ">
                  <div className="card-body">
                    {/* <i className="mdi mdi-chart-areaspline text-muted float-end text-primary mdi-48px" /> */}
                    <div className="flex_flex">
                      <h4 className="mt-0 font-20">Clients</h4>
                      <h2 className="text-primary my-3">
                        <span data-plugin="counterup mt-0">53</span>
                      </h2>
                    </div>
                    <p className="text-muted mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row_row">
              <div className="col-lg-8">
                <div className="card row_row">
                  <div className="card-body pb-2">
                    <div className="float-end d-none d-md-inline-block">
                      <div className="btn-group mb-2">
                        <button type="button" className="btn btn-xs btn-light">
                          Today
                        </button>
                        <button type="button" className="btn btn-xs btn-light">
                          Weekly
                        </button>
                        <button
                          type="button"
                          className="btn btn-xs btn-secondary"
                        >
                          Monthly
                        </button>
                      </div>
                    </div>
                    <h4 className="header-title mb-3 fs-2">Employee</h4>
                    <div dir="ltr">
                      <div
                        id="sales-analytics"
                        className="mt-4 mb-1"
                        data-colors="#1abc9c,#4a81d4"
                      />
                      <div className="row">
                        <div className="col-lg-4 text-center">
                          <strong>$12,253</strong>
                          <br />
                          This Month
                        </div>
                        <div className="col-lg-4 text-center">
                          <strong>$34,254</strong>
                          <br />
                          This Year
                        </div>
                        <div className="col-lg-4 text-center">
                          <strong>$32,695</strong>
                          <br />
                          Previous Year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
