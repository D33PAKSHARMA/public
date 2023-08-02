import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import jwtDecode from "jwt-decode";
import "./client.css";
import { Helmet } from "react-helmet";

const Overview = () => {
  const token = localStorage.getItem("data");
  const user = jwtDecode(token);
  // console.log(user);

  return (
    <div id="wrapper">
      <Helmet>
        <title>Overview</title>
      </Helmet>
      <Navbar />
      <Leftbar />

      <div className="content-page" id="content-page-Overview">
        <div className="content ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-box">&nbsp;</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="card" id="tooltip-container">
                  <div className="card-body">
                    <i className="mdi mdi-chart-areaspline text-muted float-end text-primary mdi-48px" />
                    <h4 className="mt-0 font-20">Total Sales</h4>
                    <h2 className="text-primary my-3">
                      $<span data-plugin="counterup">0.00</span>
                    </h2>
                    <p className="text-muted mb-0">
                      <span className="badge bg-soft-primary text-primary">
                        7.4%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card" id="tooltip-container1">
                  <div className="card-body">
                    <i className="mdi mdi-wallet text-muted float-end text-primary mdi-48px" />
                    <h4 className="mt-0 font-20">Total Expenses</h4>
                    <h2 className="text-primary my-3">
                      $<span data-plugin="counterup">0.00</span>
                    </h2>
                    <p className="text-muted mb-0">
                      <span className="badge bg-soft-primary text-primary">
                        3.4%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="widget-rounded-circle card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="text-start">
                          <h4 className="mb-2 font-20">Last Payout</h4>
                          <p className="mb-2">10 July 2023</p>
                          <button className="btn btn-primary waves-effect waves-light btn-sm float-end">
                            See details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="widget-rounded-circle card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="text-start">
                          <h4 className="mb-2 mt-2 font-20">Next Payout</h4>
                          <p className="mb-4">10 Days to go</p>
                          {/* <br /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="card">
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
                    <h4 className="header-title mb-3">Revenue Analytics</h4>
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
                      <img
                        className="w-100"
                        src="/assets/images/others/Overview-client.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-6 col-xl-6">
                    <div className="widget-rounded-circle card">
                      <div className="card-body">
                        <h4 className="mb-0">Net Position</h4>
                        <p className="mb-0">0001</p>
                        <button className="btn btn-primary waves-effect waves-light btn-sm float-end">
                          See details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-6">
                    <div className="widget-rounded-circle card">
                      <div className="card-body">
                        <h5 className="mb-0">Reputation Gain</h5>
                        <p className="mb-0">0001</p>
                        <button className="btn btn-primary waves-effect waves-light btn-sm float-end">
                          See details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-xl-12">
                    <div className="widget-rounded-circle card">
                      <div className="card-body">
                        <textarea
                          placeholder="Have a Suggetions ? Type here..."
                          className="form-control"
                          rows={6}
                          defaultValue={""}
                        />
                        <button className="btn btn-primary waves-effect waves-light float-end mt-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Overview;
