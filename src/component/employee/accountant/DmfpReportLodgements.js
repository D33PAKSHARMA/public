import React from "react";
import { Link } from "react-router-dom";

const DmfpReportLodgements = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-4 mb-2">
            <Link to="/accountant">
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
            <h2 className="text-primary float-end">Accountant</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-9">
                    <h4>Sales Report</h4>
                    <img
                      src="/assets/images/others/sales-report.png"
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
                <button className="btn btn-primary float-start w-30">
                  Print Report
                </button>
                <button className="btn btn-primary float-end w-30">
                  Expand Report
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Quaterly Base Lodgements GST Super</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="bg-light">
                          <tr>
                            <th>Legal Name of Business</th>
                            <th>Trade Name</th>
                            <th>GST No.</th>
                            <th>GSTIN/UN Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Radom Number Pvt. Ltd.</td>
                            <td>Radom Number Pvt. Ltd.</td>
                            <td>32AAEETYVDHS822DFD</td>
                            <td>
                              <span className="badge bg-soft-success text-success">
                                Active
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Annual Tax Return</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="bg-light">
                          <tr>
                            <th>Company Name</th>
                            <th>Total Sales</th>
                            <th>Total GST Amount</th>
                            <th>Net Profit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Radom Number Pvt. Ltd.</td>
                            <td>$72,000</td>
                            <td>8,000</td>
                            <td>80,000</td>
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
  );
};

export default DmfpReportLodgements;
