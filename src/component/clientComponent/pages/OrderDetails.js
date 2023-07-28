import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import "./client.css";

const OrderDetails = () => {
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
                <div className="col-lg-9">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-2">
                        <div className="col-lg-7">
                          <h5>Order ID #100185</h5>
                        </div>
                        <div className="col-lg-5 text-end">
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            <span className="btn-label">
                              <i className="mdi mdi-printer" />
                            </span>
                            Print Invoice
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            data-bs-toggle="modal"
                            data-bs-target="#cancel-order-model"
                          >
                            <span className="btn-label">
                              <i className="mdi mdi-cart-remove" />
                            </span>
                            Cancel Order
                          </button>
                        </div>
                        <div className="col-lg-9">
                          <p>
                            <span className="mdi mdi-calendar-month-outline" />{" "}
                            5 Jun 2023 08:20:39
                          </p>
                        </div>
                        <div className="col-lg-3 text-end">
                          <p className="mb-0 mt-2">
                            <strong>Status: </strong>
                            <span className="badge badge-soft-success">
                              {" "}
                              Delivered{" "}
                            </span>
                          </p>
                          <p className="mb-0">
                            <strong>Payment Status : </strong>{" "}
                            <span className="text-success">Paid</span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <table
                          id="basic-datatable_wrapper"
                          className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                        >
                          <thead className="bg-light">
                            <tr>
                              <th> SL</th>
                              <th>Item Details</th>
                              <th>Qty.</th>
                              <th>Tax</th>
                              <th>Price</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1. </td>
                              <td>HP Pavilion 15-DK1056WM</td>
                              <td>2</td>
                              <td>$90.00</td>
                              <td>$500.00</td>
                              <td>$1,000.00</td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="table w-100 table-borderless">
                          <tbody>
                            <tr>
                              <th width="40%" className="text-end">
                                <p className="mb-1">
                                  <strong>Total : </strong>
                                </p>
                                <p className="mb-1">
                                  <strong>Discount : </strong>
                                </p>
                              </th>
                              <td>
                                <p className="mb-1">$500.00</p>
                                <p className="mb-1">$40.00</p>
                              </td>
                              <th className="text-end">
                                <p className="mb-1">
                                  <strong>GST/TAX : </strong>
                                </p>
                                <p className="mb-1">
                                  <strong>Shipping Charge : </strong>
                                </p>
                                <p className="mb-1">
                                  <strong>Grand Total : </strong>
                                </p>
                              </th>
                              <td>
                                <p className="mb-1">$90.00</p>
                                <p className="mb-1">$30.00</p>
                                <p className="mb-1">$580.00</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="mb-0 text-primary">
                        {" "}
                        Customer Information
                      </h5>
                      <hr className="mb-2" />
                      <p className="mb-1">
                        <strong>Name: </strong> Alex Newton
                      </p>
                      <p className="mb-1">
                        <strong>Mobile Number: </strong> 213912391293
                      </p>
                      <p className="mb-1">
                        <strong>Address: </strong> 15 Peterho Boulevard,
                        Evanston, South Australia, Australia, 5116
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="mb-0 text-primary">
                        Cancel Order Request
                      </h5>
                      <hr className="mb-2" />
                      <p className="mb-1">
                        <strong>Cancel Reason: </strong> Delay in shipping as
                        expected
                      </p>
                      <p className="mb-1">
                        <strong>Cacellation Date: </strong> 22 June 2023 12:22
                        PM
                      </p>
                      <p className="mb-1">
                        <strong>Status: </strong>{" "}
                        <label className="badge badge-soft-warning">
                          Pending
                        </label>
                      </p>
                      <p className="mb-1">
                        <strong>Payment Status: </strong>{" "}
                        <label className="badge badge-soft-warning">
                          Pending
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6"> </div>
                <div className="col-md-6">
                  © <a href>Direct Factory Marketplace</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div
        id="cancel-order-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mb-1">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary text-start mb-0">
                    Cancel Order
                  </h4>
                  <hr />
                </div>
              </div>
              <form className="px-3 row" action="#">
                <div className="mb-3 col-lg-12">
                  <div className="mb-2">
                    <label>Cancel Reason</label>
                    <select className="form-select">
                      <option>Bad quality products feedback</option>
                      <option>Delay in shipping as expected</option>
                      <option>Delay in shipping as expected</option>
                      <option>
                        Bad customer care service or representative
                      </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label>Write Reason</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Write something about cancel order..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="mb-2">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Bank Name..."
                    />
                  </div>
                  <div className="mb-2">
                    <label>Account Holder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Account Holder Name..."
                    />
                  </div>
                  <div className="mb-2">
                    <label>IFSC Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter IFSC Code..."
                    />
                  </div>
                  <div className="mb-2">
                    <label>Swift Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Swift Code..."
                    />
                  </div>
                </div>
                <div className="mb-3 col-lg-12 text-center">
                  <button className="btn btn-primary" type="button">
                    Submit
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

export default OrderDetails;
