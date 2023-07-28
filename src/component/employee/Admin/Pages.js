import React from "react";
import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <div id="wrapper">
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
                    src="/assets/images/users/user-1.jpg"
                    alt="user-image"
                    className="rounded-circle"
                  />
                  <span className="pro-user-name ms-1">
                    Geneva <i className="mdi mdi-chevron-down" />
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
                  <a href="settings.html" className="dropdown-item notify-item">
                    <i className="fe-settings" />
                    <span>Settings</span>
                  </a>
                  <a
                    href="change-password.html"
                    className="dropdown-item notify-item"
                  >
                    <i className="fe-lock" />
                    <span>Change Password</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="index.html" className="dropdown-item notify-item">
                    <i className="fe-log-out" />
                    <span>Logout</span>
                  </a>
                </div>
              </li>
              <li className="dropdown notification-list">
                <a
                  href="settings.html"
                  className="nav-link right-bar-toggle waves-effect waves-light"
                >
                  <i className="fe-settings noti-icon" />
                </a>
              </li>
            </ul>
            <div className="logo-box">
              <a href="sales-dfp.html" className="logo logo-dark text-center">
                <span className="logo-sm">
                  <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px" />
                  {/*<img src="/assets/images/new-logo.png" alt="" height="22" class="mb-1">*/}
                </span>
                <span className="logo-lg">
                  <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px" />
                  <img
                    src="/assets/images/new-logo.png"
                    alt
                    height={50}
                    className="mb-1"
                  />
                </span>
              </a>
              <Link to="/department" className="logo logo-light text-center">
                <span className="logo-sm">
                  <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px" />
                  {/*<img src="/assets/images/new-logo.png" alt="" height="22"class="mb-1">*/}
                </span>
                <span className="logo-lg">
                  <i className="mdi mdi-arrow-left-circle-outline text-white mdi-24px" />
                  <img
                    src="/assets/images/new-logo.png"
                    alt
                    height={50}
                    className="mb-1"
                  />
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

        <div className="content-page">
          <div className="d-flex justify-content-between">
            <h1 className="heading-top">Pages</h1>
            <button className="btn-primary  btn-sm  btn-btn">+ADDNOW</button>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-lg-12 mx-auto">
                  <div className="card">
                    <div className="card-body card_body_now">
                      <div className="row">
                        <div className="col-lg-9 mb-2"></div>
                        <div className="col-lg-3 text-end mb-2"></div>
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table
                              id="basic-datatable_wrapper"
                              className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                            >
                              <thead>
                                <tr className="bg-light">
                                  <th>Name</th>
                                  <th>Permissions</th>
                                  <th>No of emoloyees with this role</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>FN-02</td>
                                  <td>GameDay Catering</td>
                                  <td>04/02/2023</td>
                                </tr>
                              </tbody>
                            </table>
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
    </div>
  );
};

export default Pages;
