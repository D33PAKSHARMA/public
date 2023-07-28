import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import "./salesdfm.css";

const PerformanceRecord = () => {
  const contentPage = {
    padding: "0px 15px 65px 15px",
    marginTop: "10px",
  };
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <h4>Performance Record</h4>
              </div>
              <div className="col-lg-4">
                <p className="mb-0">
                  <strong>Target : </strong>
                </p>
                <div className="progress mb-0 progress-xl">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow="7.5"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  >
                    7.5
                  </div>
                </div>
              </div>
              <div className="date col-lg-3 text-end">
                <p>
                  <strong>Initial Engagement Date: </strong>{" "}
                  <span className="bg-primary text-white p-1">01</span>{" "}
                  <span className="bg-primary text-white p-1">01</span>{" "}
                  <span className="bg-primary text-white p-1">2023</span>
                </p>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-6 mx-auto">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="text-primary mb-3">
                          Contracts{" "}
                          <span className="float-end mdi mdi-clipboard-list mdi-48px"></span>
                        </h3>
                        <p className="mb-1">
                          <strong>Current Month : </strong>
                          <span className="text-end">9</span>
                        </p>
                        <p className="mb-1">
                          <strong>Lifetime : </strong>
                          <span className="text-end">23</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="text-primary">
                          Sales{" "}
                          <span className="float-end mdi mdi-chart-areaspline mdi-48px"></span>
                        </h3>
                        <p className="mb-1">
                          <strong>Current Month : </strong>
                          <span className="text-end">$90,000</span>
                        </p>
                        <p className="mb-1">
                          <strong>Lifetime : </strong>
                          <span className="text-end">2,30,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="text-primary">
                          Earnings{" "}
                          <span className="float-end mdi mdi-chart-areaspline mdi-48px"></span>
                        </h3>
                        <p className="mb-1">
                          <strong>Current Month : </strong>
                          <span className="text-end">$5,000</span>
                        </p>
                        <p className="mb-1">
                          <strong>Lifetime : </strong>
                          <span className="text-end">6,000</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="text-primary">
                          Commission{" "}
                          <span className="float-end mdi mdi-wallet-outline mdi-48px"></span>
                        </h3>
                        <p className="mb-1">
                          <strong>Current Month : </strong>
                          <span className="text-end">$1,800</span>
                        </p>
                        <p className="mb-1">
                          <strong>Lifetime : </strong>
                          <span className="text-end">$4,600</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mx-auto text-center">
                    <button className="btn btn-primary">
                      Download Pay Slips
                    </button>
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

export default PerformanceRecord;
