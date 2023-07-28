import React from "react";
import { Link } from "react-router-dom";
import "./accountadmin.css";

const ClientaccountManagerAdmin = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/department">
              <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px"></i>
              <img
                src="/assets/images/dark-logo.png"
                alt=""
                height="70"
                className="mb-1"
              />
            </Link>
          </div>
          <div className="col-md-8">
            <h2 className="text-primary float-end">
              Client Account Manager Admin
            </h2>
          </div>
        </div>
        <div className="row row-row">
          <div className="col-md-1 mb-3"></div>
          <div className="col-md-2 mb-3">
            <a href="client-account-manager-admin/incoming-new-clients">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/bars.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Incoming New
                    <br />
                    Clients
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/client-account-manager-admin/message-center">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/chat.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Message Center <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/client-account-manager-admin/registered-company-form-lawyers">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/lawyer.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Registered Company <br />
                    Form Lawyers
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientaccountManagerAdmin;
