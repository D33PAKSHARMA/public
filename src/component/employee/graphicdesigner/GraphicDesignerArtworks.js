import React from "react";
import { Link } from "react-router-dom";

const GraphicDesignerArtworks = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-4 mb-2">
            <Link to="/graphic-designer">
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
            <h2 className="text-primary float-end">Graphic Designer Portal</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs nav-bordered nav-justified">
                  <li className="nav-item">
                    <a
                      href="#requests"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link active"
                    >
                      <strong>Requests</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#submissions"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link "
                    >
                      <strong>Submissions</strong>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="requests">
                    <div className="row px-4">
                      <div className="col-g-12">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr>
                                <th>Client</th>
                                <th>Topic</th>
                                <th>Sub Topic</th>
                                <th>Remarks</th>
                                <th>Samples</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>John</td>
                                <td>Website</td>
                                <td>Development</td>
                                <td>--------------</td>
                                <td>
                                  <img
                                    src="/assets/images/dark-logo.png"
                                    className="avatar-md"
                                  />
                                </td>
                                <td>
                                  <button className="btn btn-primary btn-sm">
                                    Download
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>John</td>
                                <td>Website</td>
                                <td>Development</td>
                                <td>--------------</td>
                                <td>
                                  <img
                                    src="/assets/images/dark-logo.png"
                                    className="avatar-md"
                                  />
                                </td>
                                <td>
                                  <button className="btn btn-primary btn-sm">
                                    Download
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="submissions">
                    <div className="row px-4">
                      <div className="col-lg-12 mb-2">
                        <button
                          className="btn btn-primary rounded-pill waves-effect waves-light float-end"
                          data-bs-toggle="modal"
                          data-bs-target="#add-new-model"
                        >
                          <span className="btn-label">
                            <i className="mdi mdi-plus-circle-outline" />
                          </span>
                          Add New
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr>
                                <th>Client</th>
                                <th>Submission Date</th>
                                <th>Topic</th>
                                <th>Remarks</th>
                                <th>Submissions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>John</td>
                                <td>12/10/2023</td>
                                <td>Website</td>
                                <td>--------------</td>
                                <td>
                                  <img
                                    src="/assets/images/dark-logo.png"
                                    className="avatar-md"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>OLIVIA</td>
                                <td>15/05/2023</td>
                                <td>Graphic Designing</td>
                                <td>--------------</td>
                                <td>
                                  <img
                                    src="/assets/images/dark-logo.png"
                                    className="avatar-md"
                                  />
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
  );
};

export default GraphicDesignerArtworks;
