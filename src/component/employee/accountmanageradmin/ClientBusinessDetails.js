import React from "react";
import { Link } from "react-router-dom";

const ClientBusinessDetails = () => {
  return (
    <div id="wrapper">
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <Link to="/client-account-manager-admin/incoming-new-clients">
                  <i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark" />
                </Link>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-9 mb-2">
                        <h4>No. of Active Client Industry</h4>
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
                                <th>Age of Account</th>
                                <th>Country</th>
                                <th>Industry</th>
                                <th>Daily/Weekly/Monthly (New Signup)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>05/02/1990</td>
                                <td>Australia</td>
                                <td>Pharmaceutical</td>
                                <td>10 &nbsp;&nbsp; 70 &nbsp;&nbsp; 2100</td>
                              </tr>
                              <tr>
                                <td>02/08/1999</td>
                                <td>Vietnam</td>
                                <td>Fertilizers</td>
                                <td>5 &nbsp;&nbsp; 35 &nbsp;&nbsp; 1050</td>
                              </tr>
                              <tr>
                                <td>09/07/1988</td>
                                <td>India</td>
                                <td>Textile</td>
                                <td>8 &nbsp;&nbsp; 56 &nbsp;&nbsp; 1680</td>
                              </tr>
                              <tr>
                                <td>10/12/2000</td>
                                <td>Dubai</td>
                                <td>Iron &amp; Steel</td>
                                <td>9 &nbsp;&nbsp; 63 &nbsp;&nbsp; 2520</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="border mt-3">
                          <h4 className="m-3">New Customer Growth Rate</h4>
                          <img
                            src="../assets/images/others/new-customer-growth-rate.png"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-9">
                        <h4>Sales Report</h4>
                        <img
                          src="../assets/images/others/sales-report.png"
                          className="w-100"
                        />
                      </div>
                      <div className="col-lg-3">
                        <button className="btn btn-primary mb-2">
                          Account Age: 5 Years Old
                        </button>
                        <h5 className="text-danger">
                          <span className="mdi mdi-record text-danger" /> Total
                          Sales: $5,850
                        </h5>
                        <h5 className="text-primary">
                          <span className="mdi mdi-record text-primary" /> Total
                          Cost: $4,850
                        </h5>
                        <h5 className="mx-3 mb-3">Net Position: $4,850</h5>
                        <input
                          type="date"
                          className="form-control"
                          defaultValue="2023-12-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <button className="btn btn-primary float-start w-25">
                      Print Report
                    </button>
                    <button className="btn btn-primary float-end w-25">
                      Expand Report
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

export default ClientBusinessDetails;
