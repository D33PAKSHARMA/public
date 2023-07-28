import React from "react";
import { Link } from "react-router-dom";

const SeoClient = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-4 mb-2">
            <Link to="/seo">
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
            <h2 className="text-primary float-end">SEO Portal</h2>
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
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th>Assigned Employee</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>The Auto DNA</td>
                            <td>theautodna@gmail.com</td>
                            <td>785748555255</td>
                            <td>Delhi</td>
                            <td>John Martin</td>
                          </tr>
                          <tr>
                            <td>The Auto DNA</td>
                            <td>theautodna@gmail.com</td>
                            <td>785748555255</td>
                            <td>Delhi</td>
                            <td>John Martin</td>
                          </tr>
                          <tr>
                            <td>The Auto DNA</td>
                            <td>theautodna@gmail.com</td>
                            <td>785748555255</td>
                            <td>Delhi</td>
                            <td>John Martin</td>
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

export default SeoClient;
