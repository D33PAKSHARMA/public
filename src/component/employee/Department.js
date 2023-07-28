import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Department = () => {
  return (
    <div className="account-pages mt-3 mb-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 mb-3">
            <Link
              to="/employee"
              className="btn btn-primary rounded-pill waves-effect waves-light float-end mt-2"
            >
              Logout
            </Link>
          </div>
          <div className="col-md-3 pop_down">
            <select className="form-select">
              <option>
                <strong>Australia</strong>
              </option>
              <option>
                <strong>China</strong>
              </option>
              <option>
                <strong>Vietnam</strong>
              </option>
              <option>
                <strong>Dubai</strong>
              </option>
              <option>
                <strong>India</strong>
              </option>
            </select>
          </div>
          <div className="col-md-9">
            <h2 className="text-primary float-end">Select Your Department</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 mb-3"></div>
          <div className="col-md-2 mb-3">
            <Link to="/sales-dfmp">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Sales%20DFMP.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Sales DFMP
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/client-account-manager-admin">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Client%20Account%20Manager%20Admin.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Client Account <br />
                    Manager Admin
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/client-account-manager">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Client.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Client Account <br /> Manager
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/client-sales-representative">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Client%20Sales.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Client Sales <br /> Representative
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/it-department">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/IT%20Department.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    IT Department
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 mb-3"></div>
          <div className="col-md-2 mb-3">
            <Link to="/social-media">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Social%20Media.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Social Media
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/seo">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/SEO.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    SEO
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/graphic-designer">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Graphic%20Designer.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Graphic Designer
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/online-sale">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Online%20Sales.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Online Sale
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/accountant">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Accountant.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Accountant
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 mb-3"></div>
          <div className="col-md-2 mb-3">
            <Link to="/retrun-registry">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/return%20registry.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Retrun Registry
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/tech-support">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Support.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Tech Support <br />
                    Live Chat
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/warehouse">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Warehouse.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Warehouse
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/lawyer">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Lawyer.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Lawyer
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/admin">
              <div className="card border-primary border">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/department/Admin%20Panel.png"
                    width="85px"
                    className="mb-0"
                  />
                  <h5 className="text-primary">
                    Admin Panel
                    <br />
                    &nbsp;
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
