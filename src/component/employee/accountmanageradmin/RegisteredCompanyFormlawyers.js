import React from "react";
import { Link } from "react-router-dom";

const RegisteredCompanyFormlawyers = () => {
  return (
    <div className="account-pages mt-2 mb-1">
      <div className="container">
        <div className="row mb-0">
          <div className="col-md-4 mb-0">
            <Link to="/client-account-manager-admin">
              <i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark" />
            </Link>
          </div>
          <div className="col-md-8"> </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <h4 className="text-center">Create Account</h4>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Business No.."
                        />
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Bank Account No.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input type="file" className="form-control" />
                      </div>
                      <div className="col-lg-12 mb-0">
                        <h5>Director Full Details</h5>
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email.."
                        />
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address.."
                        />
                      </div>
                      <div className="col-lg-12 mb-0">
                        <h5>Company Full Details</h5>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Business Name.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Industry.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <select className="form-select">
                          <option>Type of Establishment</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email ID.."
                        />
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website.."
                        />
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address.."
                        />
                      </div>
                      <div className="col-lg-12 mb-0">
                        <h5>Point of Contact Details</h5>
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No.."
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email.."
                        />
                      </div>
                      <div className="col-lg-12 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address.."
                        />
                      </div>
                      <div className="col-lg-3 mx-auto">
                        <a
                          href="/client-account-manager-admin/registered-company-form-lawyers/create-account-success-page"
                          className="btn btn-primary w-100"
                        >
                          Create
                        </a>
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

export default RegisteredCompanyFormlawyers;
