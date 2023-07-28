import React from "react";
import { Link } from "react-router-dom";

const SocialMediaArtworks = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/social-media">
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
            <h2 className="text-primary float-end">IT Department Portal</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="nav nav-tabs nav-bordered nav-justified">
                      <li className="nav-item">
                        <a
                          href="#request-new"
                          data-bs-toggle="tab"
                          aria-expanded="true"
                          className="nav-link active"
                        >
                          Request New
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#submissions"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link "
                        >
                          Submissions
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="request-new">
                        <div className="row">
                          <div className="col-lg-8 mx-auto">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <h4 className="mb-2">Request Now</h4>
                                  </div>
                                  <div className="col-lg-6 mb-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Client Name"
                                    />
                                  </div>
                                  <div className="col-lg-6 mb-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Topic"
                                    />
                                  </div>
                                  <div className="col-lg-6 mb-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Sub Topic"
                                    />
                                  </div>
                                  <div className="col-lg-6 mb-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Receiver's Name"
                                    />
                                  </div>
                                  <div className="col-lg-6 mb-2">
                                    <input
                                      type="file"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-lg-12 mb-2">
                                    <textarea
                                      className="form-control"
                                      placeholder="Note"
                                      rows={5}
                                      defaultValue={
                                        "                                                                            \n                                                                        "
                                      }
                                    />
                                  </div>
                                  <div className="col-lg-4 mb-2 mx-auto">
                                    <button className="btn btn-primary w-100">
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="submissions">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr>
                                <th>Image</th>
                                <th>Submitted by</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/images/products/product-9.jpg"
                                    width="70px"
                                  />
                                </td>
                                <td>Harish</td>
                                <td width="300px">
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                  <button className="btn btn-primary">
                                    Send to Client
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/images/products/product-10.jpg"
                                    width="70px"
                                  />
                                </td>
                                <td>Faizan</td>
                                <td width="300px">
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                  <button className="btn btn-primary">
                                    Send to Client
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src="../assets/images/products/product-10.jpg"
                                    width="70px"
                                  />
                                </td>
                                <td>Salman</td>
                                <td width="300px">
                                  <button className="btn btn-primary">
                                    Download
                                  </button>
                                  <button className="btn btn-primary">
                                    Send to Client
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
      </div>
    </div>
  );
};

export default SocialMediaArtworks;
