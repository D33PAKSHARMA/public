import React from "react";
import { Link } from "react-router-dom";

const ItDepartmentClient = () => {
  return (
    <div>
      <div className="account-pages mt-3 mb-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <Link to="/it-department">
                <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px" />
                <img
                  src="/assets/images/dark-logo.png"
                  alt
                  height={70}
                  className="mb-1"
                />
              </Link>
            </div>
            <div className="col-md-8">
              <h2 className="text-primary float-end">IT Department Portal</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-9 mb-2">
                      <h4>Client</h4>
                    </div>
                    <div className="col-lg-3 text-end mb-2">
                      <form>
                        <input
                          type="search"
                          className="form-control rounded-pill"
                          placeholder="Search..."
                          id="top-search"
                        />
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table
                          id="basic-datatable_wrapper"
                          className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                        >
                          <thead>
                            <tr className="bg-light">
                              <th>Factory No.</th>
                              <th>Email</th>
                              <th>Phone No.</th>
                              <th>Address</th>
                              <th>Customer Rating</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>FN-65</td>
                              <td>salman@gmail.com</td>
                              <td>+91 900-555-1521</td>
                              <td>Delhi</td>
                              <td>
                                <p className="text-muted float-start me-3">
                                  <span className="mdi mdi-star text-warning" />
                                  <span className="mdi mdi-star text-warning" />
                                  <span className="mdi mdi-star text-warning" />
                                  <span className="mdi mdi-star text-warning" />
                                  <span className="mdi mdi-star" />{" "}
                                  &nbsp;&nbsp;4.0
                                </p>
                              </td>
                              <td width="180px">
                                <button
                                  className="btn btn-primary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#signup-modal"
                                >
                                  Proceed
                                </button>
                              </td>
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
      <div
        id="signup-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <div className="auth-logo">
                  <a href className="logo logo-dark">
                    <span className="logo-lg">
                      <img
                        src="/assets/images/dark-logo.png"
                        alt
                        style={{ height: "auto", width: 200 }}
                      />
                    </span>
                  </a>
                  <a href className="logo logo-light">
                    <span className="logo-lg">
                      <img
                        src="/assets/images/dark-logo.png"
                        alt
                        style={{ height: "auto", width: 200 }}
                      />
                    </span>
                  </a>
                </div>
              </div>
              <form className="px-3" action="#">
                <div className="mb-2">
                  <label htmlFor="emailaddress" className="form-label">
                    Username
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailaddress"
                    required
                    placeholder="john@deo"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    required
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3 text-center">
                  <a href="/overview.html" className="btn btn-primary">
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItDepartmentClient;
