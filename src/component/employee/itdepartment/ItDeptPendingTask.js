import React from "react";
import { Link } from "react-router-dom";
import "./itdep.css";

const ItDeptPendingTask = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/it-department">
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
                    <ul className="nav nav-tabs nav-bordered nav-justified">
                      <li className="nav-item">
                        <a
                          href="#active-tasks"
                          data-bs-toggle="tab"
                          aria-expanded="true"
                          className="nav-link active"
                        >
                          <strong>Active Tasks</strong>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#completed-leads"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link "
                        >
                          <strong>Completed Leads</strong>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="active-tasks">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Assigned</th>
                                <th>Deadline</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Call Client</td>
                                <td>
                                  <span className="text-danger">Emergency</span>
                                </td>
                                <td>10/05/2023 | 06:00 PM</td>
                                <td>10/05/2023 | 06:00 PM</td>
                                <td>
                                  <button className="btn btn-primary btn-sm">
                                    Mark Completed
                                  </button>
                                  <Link
                                    to="/it-department/it-dept-pending-task/task-details"
                                    className="btn btn-primary btn-sm btn_btn"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>Creative Design</td>
                                <td>Moderate</td>
                                <td>14/05/2023 | 07:00 PM</td>
                                <td>14/05/2023 | 07:00 PM</td>
                                <td>
                                  <button className="btn btn-primary btn-sm">
                                    Mark Completed
                                  </button>
                                  <Link
                                    to="/it-department/it-dept-pending-task/task-details"
                                    className="btn btn-primary btn-sm btn_btn"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>Meeting with Manager</td>
                                <td>Moderate</td>
                                <td>20/05/2023 | 12:00 PM</td>
                                <td>20/05/2023 | 12:00 PM</td>
                                <td>
                                  <button className="btn btn-primary btn-sm">
                                    Mark Completed
                                  </button>
                                  <Link
                                    to="/it-department/it-dept-pending-task/task-details"
                                    className="btn btn-primary btn-sm btn_btn"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane" id="completed-leads">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr>
                                <th>Task</th>
                                <th>Completed</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Call Client</td>
                                <td>11/05/2023</td>
                              </tr>
                              <tr>
                                <td>Creatives Design</td>
                                <td>10/04/2023</td>
                              </tr>
                              <tr>
                                <td>Meeting with Manager</td>
                                <td>05/04/2023</td>
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

export default ItDeptPendingTask;
