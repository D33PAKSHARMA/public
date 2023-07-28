import React from "react";
import { Link } from "react-router-dom";

const OnlineSalesClientReport = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-4 mb-2">
            <Link to="/online-sale">
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
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="card border border-primary">
                      <div className="card-body">
                        <h4>Leads</h4>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="mb-0">
                                  <span className="text-primary float-start">
                                    Total Leads
                                  </span>{" "}
                                  <span className="text-primary mdi mdi-chart-areaspline float-end  mdi-24px" />
                                </h5>
                                <br />
                                <h4 className="text-primary text-start mb-0">
                                  210
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="mb-0">
                                  <span className="text-primary float-start">
                                    Social Media
                                  </span>{" "}
                                  <span className="text-primary mdi mdi-chat float-end  mdi-24px" />
                                </h5>
                                <br />
                                <h4 className="text-primary text-start mb-0">
                                  40
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="mb-0">
                                  <span className="text-primary float-start">
                                    Website
                                  </span>{" "}
                                  <span className="text-primary mdi mdi-earth float-end  mdi-24px" />
                                </h5>
                                <br />
                                <h4 className="text-primary text-start mb-0">
                                  50
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="mb-0">
                                  <span className="text-primary float-start">
                                    Google Ads
                                  </span>{" "}
                                  <span className="text-primary mdi mdi-google-ads float-end  mdi-24px" />
                                </h5>
                                <br />
                                <h4 className="text-primary text-start mb-0">
                                  70
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h4>Sales</h4>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="text-primary text-start mb-0">
                                  Total Sales
                                </h5>
                                <h4 className="text-primary text-start mb-0">
                                  $10,210
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="text-primary text-start mb-0">
                                  Social Media
                                </h5>
                                <h4 className="text-primary text-start mb-0">
                                  $50,000
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="text-primary text-start mb-0">
                                  Website
                                </h5>
                                <h4 className="text-primary text-start mb-0">
                                  $20,000
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="text-primary text-start mb-0">
                                  eCommerce Platform
                                </h5>
                                <h4 className="text-primary text-start mb-0">
                                  $20,000
                                </h4>
                                <span className="badge bg-soft-primary text-primary float-end">
                                  <span className="mdi mdi-arrow-up-thick" />
                                  2.5%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="card border border-primary">
                      <div className="card-body">
                        <div className="float-end d-none d-md-inline-block">
                          <div className="btn-group mb-2">
                            <button
                              type="button"
                              className="btn btn-xs btn-light"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              className="btn btn-xs btn-light"
                            >
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
                            className="mt-4"
                            data-colors="#1abc9c,#4a81d4"
                          />
                        </div>
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
                    <button className="btn btn-primary float-end">
                      Send to Client
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

export default OnlineSalesClientReport;
