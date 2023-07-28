import React from "react";
import { Link } from "react-router-dom";
import "./clientaccountadmin.css";

const ClientNewServiceRequest = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/client-account-manager">
              <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px" />
              <img
                src="/assets/images/dark-logo.png"
                alt
                height={70}
                className="mb-1"
              />
            </Link>
          </div>
          <div className="col-md-8">
            <h2 className="text-primary float-end">Client Account Manager</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-9 mb-2">
                    <h4>Client New Service Request</h4>
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
                            <th>Factory No.</th>
                            <th>Service Request</th>
                            <th>Request Date</th>
                            <th>Due Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>FN-34</td>
                            <td>SEO / Website/ Google Ads</td>
                            <td>04/02/2022</td>
                            <td>04/02/2023</td>
                            <td width="180px">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-primary btn-sm "
                              >
                                Approve
                              </a>
                              <button className="btn btn-primary btn-sm view-view">
                                Cancel
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>FN-35</td>
                            <td>Facebook Ads/ Googlee Ads</td>
                            <td>04/02/2022</td>
                            <td>04/02/2023</td>
                            <td width="180px">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-primary btn-sm"
                              >
                                Approve
                              </a>
                              <button className="btn btn-primary btn-sm view-view">
                                Cancel
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>FN-39</td>
                            <td>TikTok Ads/ Yellow Pages</td>
                            <td>04/02/2022</td>
                            <td>04/02/2023</td>
                            <td width="180px">
                              <a
                                href="javascript:void(0);"
                                className="btn btn-primary btn-sm"
                              >
                                Approve
                              </a>
                              <button className="btn btn-primary btn-sm view-view">
                                Cancel
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
  );
};

export default ClientNewServiceRequest;
