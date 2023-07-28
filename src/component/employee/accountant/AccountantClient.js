import React from "react";
import { Link } from "react-router-dom";

const AccountantClient = () => {
  return (
    <div>
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
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Contact Person</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Salman</td>
                              <td>salman@gmail.com</td>
                              <td>787544445454</td>
                              <td>Amjad</td>
                              <td width="400px">
                                <button
                                  className="btn btn-primary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#assign-account-modal"
                                >
                                  Assign Account Manager
                                </button>
                                <button
                                  className="btn btn-primary btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#account-clearance-modal"
                                >
                                  Account Clearnace
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
        id="assign-account-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="assign-account-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="assign-account-modalLabel">
                Assign Account Manager
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee Name"
                />
              </div>
              <div className="mb-2">
                <select className="form-select">
                  <option>Select Location</option>
                  <option>India</option>
                </select>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-primary">
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="account-clearance-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="assign-account-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title text-center text-primary"
                id="assign-account-modalLabel"
              >
                Assign Account Manager
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4">
              <div className="mb-2">
                <label>Account No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account No."
                />
              </div>
              <div className="mb-2">
                <label>Upload Payment Gateway Reports</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload Sales Report</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload Payment Gateway Reports</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload Tax Return Report</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload P/L Report</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload Inventory Report</label>
                <input type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <label>Upload Returns/Refunds Report</label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountantClient;
