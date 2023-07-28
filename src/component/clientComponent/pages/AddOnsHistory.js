import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";

const AddOnsHistory = () => {
  return (
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
                    <h4 className="page-title">Add-Ons Purchase History</h4>
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
                              <th>End Date</th>
                              <th>Status</th>
                              <th>Payment Status</th>
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
                                <label className="badge badge-soft-success">
                                  Success
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <td>2.</td>
                              <td>Website Maintenance</td>
                              <td>12 June 2023</td>
                              <td>12 June 2024</td>
                              <td>
                                <label className="badge badge-soft-warning">
                                  Inactive
                                </label>
                              </td>
                              <td>
                                <label className="badge badge-soft-danger">
                                  Failed
                                </label>
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
  );
};

export default AddOnsHistory;
