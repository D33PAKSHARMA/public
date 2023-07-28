import React from "react";
import Header from "../Header";
const Lead = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="text-center text-primary leads">Leads</h3>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav nav-tabs nav-bordered nav-justified">
                          <li className="nav-item">
                            <a
                              href="#new-leads"
                              data-bs-toggle="tab"
                              aria-expanded="true"
                              className="nav-link active"
                            >
                              <strong>New Leads</strong>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#active-leads"
                              data-bs-toggle="tab"
                              aria-expanded="false"
                              className="nav-link "
                            >
                              <strong>Active Leads</strong>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#manual-entry"
                              data-bs-toggle="tab"
                              aria-expanded="false"
                              className="nav-link"
                            >
                              <strong>Manual Entry</strong>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#close-leads"
                              data-bs-toggle="tab"
                              aria-expanded="false"
                              className="nav-link"
                            >
                              <strong>Close Leads</strong>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="new-leads">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="bg-light">
                                  <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Field</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>Company Name</th>
                                    <th>Desired Country</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Salman</td>
                                    <td>salman@gmail.com</td>
                                    <td>--------------</td>
                                    <td>--------------</td>
                                    <td>India</td>
                                    <td>The Auto DNA</td>
                                    <td>USA</td>
                                  </tr>
                                  <tr>
                                    <td>Harry</td>
                                    <td>harry@gmail.com</td>
                                    <td>--------------</td>
                                    <td>--------------</td>
                                    <td>India</td>
                                    <td>Art Fade</td>
                                    <td>Singapore</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="tab-pane" id="active-leads">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="bg-light">
                                  <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Field</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>Company Name</th>
                                    <th>Desired Country</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Salman</td>
                                    <td>salman@gmail.com</td>
                                    <td>--------------</td>
                                    <td>--------------</td>
                                    <td>India</td>
                                    <td>The Auto DNA</td>
                                    <td>USA</td>
                                  </tr>
                                  <tr>
                                    <td>Harry</td>
                                    <td>harry@gmail.com</td>
                                    <td>--------------</td>
                                    <td>--------------</td>
                                    <td>India</td>
                                    <td>Art Fade</td>
                                    <td>Singapore</td>
                                  </tr>
                                  <tr>
                                    <td>Asad</td>
                                    <td>asad@gmail.com</td>
                                    <td>--------------</td>
                                    <td>--------------</td>
                                    <td>India</td>
                                    <td>RTS</td>
                                    <td>UK</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="tab-pane" id="manual-entry">
                            <div className="row">
                              <div className="col-lg-6 mb-2">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Name..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Contract Details</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Contract Details..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Company Name..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Desired Country</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Desired Country..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Address</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Address..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Field</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Field..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Company Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Name..."
                                />
                              </div>
                              <div className="col-lg-6 mb-2">
                                <label>Assign To</label>
                                <select className="form-select">
                                  <option>John Martin</option>
                                </select>
                              </div>
                              <div className="col-lg-3 mx-auto text-center mb-2 mt-2">
                                <button className="btn btn-primary w-100">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="close-leads">
                            <div className="table-responsive">
                              <table className="table">
                                <thead className="bg-light">
                                  <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>ID No.</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-soft-success">
                                    <td>Salman</td>
                                    <td>salman@gmail.com</td>
                                    <td>2234</td>
                                    <td>--------------</td>
                                    <td>
                                      <i className="text-success mdi mdi-check-circle mdi-24px"></i>
                                    </td>
                                  </tr>
                                  <tr className="bg-soft-danger">
                                    <td>Harry</td>
                                    <td>harry@gmail.com</td>
                                    <td>2235</td>
                                    <td>--------------</td>
                                    <td>
                                      <i className="text-danger mdi mdi-close-circle mdi-24px"></i>
                                    </td>
                                  </tr>
                                  <tr className="bg-soft-success">
                                    <td>Asad</td>
                                    <td>asad@gmail.com</td>
                                    <td>2236</td>
                                    <td>--------------</td>
                                    <td>
                                      <i className="text-success mdi mdi-check-circle mdi-24px"></i>
                                    </td>
                                  </tr>
                                  <tr className="bg-soft-danger">
                                    <td>John</td>
                                    <td>john@gmail.com</td>
                                    <td>2237</td>
                                    <td>--------------</td>
                                    <td>
                                      <i className="text-danger mdi mdi-close-circle mdi-24px"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;
