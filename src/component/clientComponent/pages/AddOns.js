import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const AddOns = () => {
  return (
    <div>
      <div id="wrapper">
        <Navbar />
        <Leftbar />

        <div className="content-page" id="content-page-Overview">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-title-box">&nbsp;</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="page-title-box">
                            <div className="page-title-right">
                              <button
                                type="button"
                                className="btn btn-primary waves-effect waves-light"
                                data-bs-toggle="modal"
                                data-bs-target="#add-new-model"
                              >
                                <span className="btn-label">
                                  <i className="mdi mdi-account-plus" />
                                </span>
                                Buy New Service
                              </button>
                            </div>
                            <h4 className="page-title">Service List</h4>
                          </div>
                        </div>
                      </div>
                      <hr className="mb-0" />
                      <div className="row">
                        <div className="table-responsive">
                          <table
                            id="basic-datatable_wrapper"
                            className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                          >
                            <thead className="table-light">
                              <tr>
                                <th>SL</th>
                                <th>Service</th>
                                <th>Start Date</th>
                                <th>Renewal Date</th>
                                <th>Status</th>
                                <th width="210px">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1.</td>
                                <td>Website Maintenance</td>
                                <td>12 June 2023</td>
                                <td>12 June 2024</td>
                                <td>
                                  <label className="badge badge-soft-success">
                                    Active
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className="btn btn-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#renew-service-modal"
                                  >
                                    Renew
                                  </button>
                                  <button
                                    className="btn btn-primary btn-sm ml_2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cancel-service-modal"
                                  >
                                    Cancel Service
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>2.</td>
                                <td>SEO Serivce</td>
                                <td>12 June 2022</td>
                                <td>12 June 2023</td>
                                <td>
                                  <label className="badge badge-soft-warning">
                                    Inactive
                                  </label>
                                </td>
                                <td>
                                  <button
                                    className="btn btn-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#renew-service-modal"
                                  >
                                    Renew
                                  </button>
                                  <button
                                    className="btn btn-primary btn-sm ml_2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cancel-service-modal"
                                  >
                                    Cancel Service
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <Link
                            to="/client/add-ons/add-ons-history"
                            className="btn btn-primary float-end btn-sm"
                          >
                            Add-Ons History
                          </Link>
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
      <div
        id="cancel-service-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content modal-filled bg-danger">
            <div className="modal-body p-4">
              <div className="text-center">
                <i className="mdi mdi-briefcase-remove-outline h1 text-white" />
                <h4 className="mt-2 text-white">Cancel!</h4>
                <p className="mt-3 text-white">
                  Are you sure you want to Cancel this Service
                </p>
                <button
                  type="button"
                  className="btn btn-light my-2"
                  data-bs-dismiss="modal"
                >
                  Confirm
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-danger my-2 border-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="renew-service-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content modal-filled bg-success">
            <div className="modal-body p-4">
              <div className="text-center">
                <i className="mdi mdi-briefcase-check h1 text-white" />
                <h4 className="mt-2 text-white">Renew!</h4>
                <p className="mt-3 text-white">
                  Are you sure you want to Renew this Serivce
                </p>
                <button
                  type="button"
                  className="btn btn-light my-2"
                  data-bs-dismiss="modal"
                >
                  Confirm
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-success my-2 border-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="add-new-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary text-start mb-0">
                    Add New Service
                  </h4>
                  <hr />
                </div>
              </div>
              <form className="px-3 row" action="#">
                <div className="mb-3 col-lg-11">
                  <div className="table-responsive">
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              SEO Export{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Graphic Designer{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              B2B Sales Rep{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Radio Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Local Online Sales Rep{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Petrol Station Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Tik Tok Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Shopping Mall Bill Board Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Facebook Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Website{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              SMS to all Contacts{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Google Pay Ads{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Our Magazine{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Social Media Expert{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Truck Bill Board{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Yellow Pages{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Our Database Mail Out{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Call out To{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="text-end">
                            <label className="form-label">
                              Repair Tech{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Highway Billboards{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                          <td className="text-end">
                            <label className="form-label">
                              Live Chat Tech/Support{" "}
                              <i className="mdi mdi-progress-question text-danger" />
                            </label>
                            <input
                              className="form-check-input mx-1"
                              type="checkbox"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mb-3 col-lg-12 text-center">
                  <button className="btn btn-primary" type="button">
                    Submit for Approval
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
