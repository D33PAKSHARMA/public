import React from "react";
import { Link } from "react-router-dom";

const TaskDetails = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/it-department/it-dept-pending-task">
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
            <h2 className="text-primary float-end">IT Department Portal</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table
                        id="basic-datatable_wrapper"
                        className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                      >
                        <thead>
                          <tr className="bg-light">
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Factory No.</th>
                            <th>Note</th>
                            <th width="200px">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Imran</td>
                            <td>123492349234</td>
                            <td>FN-45</td>
                            <td>---------------------</td>
                            <td>
                              <select className="form-select">
                                <option>Close</option>
                                <option>Ongoing</option>
                                <option>Pending</option>
                              </select>
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

export default TaskDetails;
