import React from "react";
import { Link } from "react-router-dom";
import "./ClientSale.css";

const ClientSalesRepresentative = () => {
  return (
    <div>
      <div className="account-pages mt-3 mb-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <Link to="/department">
                <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px" />
                <img
                  src="../assets/images/dark-logo.png"
                  alt
                  height={70}
                  className="mb-1"
                />
              </Link>
            </div>
            <div className="col-md-8">
              <h2 className="text-primary float-end">
                Client Sales Representative
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12 mb-2">
                      <h4>Factories</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="table-responsive">
                        <table
                          id="basic-datatable_wrapper"
                          className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                        >
                          <thead>
                            <tr className="bg-light">
                              <th>Factory No.</th>
                              <th>Client</th>
                              <th> </th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>FN34</td>
                              <td>Salman</td>
                              <td>
                                <span className="badge bg-soft-danger text-danger">
                                  New Order
                                </span>
                              </td>
                              <td width="180px">
                                <button className="btn btn-primary btn-sm btnbtn">
                                  Proceed
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>FN35</td>
                              <td>John</td>
                              <td />
                              <td width="180px">
                                <button
                                  data-bs-toggle="modal"
                                  data-bs-target="#create-order-model"
                                  className="btn btn-primary btn-sm "
                                >
                                  Create Order
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
        id="create-order-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-2">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary text-start mb-0">
                    Create New Order
                  </h4>
                  <hr className="mb-0" />
                </div>
              </div>
              <form className="px-3 row" action="#">
                <div className="mb-2 col-lg-12 input-group">
                  <label htmlFor="role" className="form-label">
                    Customer
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Customer Name..."
                    />
                    <button
                      className="btn input-group-text btn-primary waves-effect waves-light"
                      type="button"
                    >
                      Add New
                    </button>
                  </div>
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number..."
                  />
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer Address..."
                  />
                </div>
                <div className="col-lg-11 mx-auto border">
                  <div className="mb-2 mt-3">
                    <select className="form-select">
                      <option value>Select Product</option>
                      <option value="iPhone 9">iPhone 9</option>
                      <option value="iPhone X">iPhone X</option>
                      <option value="Huawei P30">Huawei P30</option>
                      <option value="HP Pavilion 15-DK1056WM">
                        HP Pavilion 15-DK1056WM
                      </option>
                      <option value="Fog Scent Xpressio Perfume">
                        Fog Scent Xpressio Perfume
                      </option>
                    </select>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered mt-1">
                      <thead className="bg-light">
                        <tr>
                          <th width={60}>SL</th>
                          <th>Item</th>
                          <th width={105}>Qty</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th width="60px">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1. </td>
                          <td>iPhone 9</td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={2}
                            />
                          </td>
                          <td>$500.44 </td>
                          <td>$1,000.88 </td>
                          <td className="text-center">
                            <a href className="text-danger">
                              <span className="mdi mdi-trash-can-outline mdi-24px" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2. </td>
                          <td>Huawei P30</td>
                          <td>
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={2}
                            />
                          </td>
                          <td>$500.44 </td>
                          <td>$1,000.88 </td>
                          <td className="text-center">
                            <a href className="text-danger">
                              <span className="mdi mdi-trash-can-outline mdi-24px" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <th className="text-end">Total :</th>
                          <td width="130px">$1571.19</td>
                        </tr>
                        <tr>
                          <th className="text-end">GST/TAX : </th>
                          <td>$19.22</td>
                        </tr>
                        <tr>
                          <th className="text-end">Discount : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={40}
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Shipping Charge : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={25}
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Grand Total :</th>
                          <th>$1458.3</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row mb-3 mt-3">
                    <div className="col-lg-2" />
                    <div className="col-lg-4">
                      <button
                        className="btn btn-danger w-100"
                        data-bs-dismiss="modal"
                      >
                        Cancel Order
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button className="btn btn-primary w-100">
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSalesRepresentative;
