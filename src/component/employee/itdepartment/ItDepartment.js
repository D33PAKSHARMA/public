import React from "react";
import { Link } from "react-router-dom";

const ItDepartment = () => {
  return (
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
            <h2 className="text-primary float-end">IT Department Portal</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 mb-3" />
          <div className="col-md-2 mb-3">
            <Link to="/it-department/message-center">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="../assets/images/sub-dept/chat.png"
                    width="70px"
                    className="mb-0"
                  />
                  <h5 className="text-white">Message Center</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/it-department/it-dept-client">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="../assets/images/sub-dept/user.png"
                    width="70px"
                    className="mb-0"
                  />
                  <h5 className="text-white">Client</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/it-department/it-dept-employees">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="../assets/images/sub-dept/search.png"
                    width="70px"
                    className="mb-0"
                  />
                  <h5 className="text-white">Employees</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/it-department/it-dept-customers">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="../assets/images/sub-dept/group.png"
                    width="70px"
                    className="mb-0"
                  />
                  &lt;<h5 className="text-white">Customers</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/it-department/it-dept-pending-task">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="../assets/images/sub-dept/task.png"
                    width="70px"
                    className="mb-0"
                  />
                  <h5 className="text-white">Pending Tasks</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItDepartment;
