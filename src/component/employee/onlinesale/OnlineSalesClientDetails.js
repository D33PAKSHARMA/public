import React from "react";
import { Link } from "react-router-dom";

const OnlineSalesClientDetails = () => {
  return (
    <div>
      <div className="account-pages mt-3 mb-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-4 mb-2">
              <Link to="/online-sale/online-sale-client">
                <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px" />
                <img
                  src="/assets/images/dark-logo.png"
                  alt
                  height={70}
                  className="mb-1"
                />
              </Link>
            </div>
            <div className="col-lg-8">
              <h2 className="text-primary float-end">Online Sales</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-9 mb-2">
                          <h5>Clients</h5>
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
                                  <th>Company Name</th>
                                  <th>Email</th>
                                  <th>Phone No.</th>
                                  <th>Address</th>
                                  <th>Report</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>The Auto DNA</td>
                                  <td>theautodna@gmail.com</td>
                                  <td>785748555255</td>
                                  <td>Delhi</td>
                                  <td>
                                    <a
                                      href="online-sales-client-report.html"
                                      className="btn btn-primary btn-sm"
                                    >
                                      View Report
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>The Auto DNA</td>
                                  <td>theautodna@gmail.com</td>
                                  <td>785748555255</td>
                                  <td>Delhi</td>
                                  <td>
                                    <a
                                      href="online-sales-client-report.html"
                                      className="btn btn-primary btn-sm"
                                    >
                                      View Report
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>The Auto DNA</td>
                                  <td>theautodna@gmail.com</td>
                                  <td>785748555255</td>
                                  <td>Delhi</td>
                                  <td>
                                    <a
                                      href="online-sales-client-report.html"
                                      className="btn btn-primary btn-sm"
                                    >
                                      View Report
                                    </a>
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

export default OnlineSalesClientDetails;
