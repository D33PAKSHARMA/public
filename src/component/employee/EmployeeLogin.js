import React from "react";
import { Link } from "react-router-dom";
// import "./employee.css";

const EmployeeLogin = () => {
  return (
    <div className="account-pages mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <div className="auth-logo">
                    <Link to="/employee" className="logo logo-dark text-center">
                      <span className="logo-lg">
                        <img
                          src="/assets/images/dark-logo.png"
                          alt=""
                          height="80"
                        />
                      </span>
                    </Link>
                    <Link
                      to="/employee"
                      className="logo logo-light text-center"
                    >
                      <span className="logo-lg">
                        <img
                          src="/assets/images/dark-logo.png"
                          alt=""
                          height="80"
                        />
                      </span>
                    </Link>
                  </div>
                  <p className="text-muted mb-4 mt-3">
                    Enter your Username and Password to access Employee Panel.
                  </p>
                </div>
                <form action="#">
                  <div className="mb-2">
                    <label for="Username" className="form-label">
                      Username
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Username"
                      required=""
                      placeholder="Enter your Username"
                    />
                  </div>
                  <div className="mb-2">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <div className="input-group-text" data-password="false">
                        <span className="password-eye"></span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select">
                      <option>Australia</option>
                      <option>China</option>
                      <option>Vietnam</option>
                      <option>Dubai</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox-signin"
                        checked
                      />
                      <label className="form-check-label" for="checkbox-signin">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="text-center d-grid">
                    <Link
                      to="/department"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      {" "}
                      Log In{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12 text-center">
                <p>
                  {" "}
                  <Link to="/forget-password" className="text-white-50 ms-1">
                    Forgot your password?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
