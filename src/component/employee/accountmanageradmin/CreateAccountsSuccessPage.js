import React from "react";
import { Link } from "react-router-dom";

const CreateAccountsSuccessPage = () => {
  return (
    <div className="account-pages mt-2 mb-1">
      <div className="container">
        <div className="row mb-0">
          <div className="col-md-4 mb-0">
            <Link to="/client-account-manager-admin/registered-company-form-lawyers">
              <i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark" />
            </Link>
          </div>
          <div className="col-md-8"> </div>
        </div>
        <div className="col-lg-7 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <h2 className="text-center">Congratulations</h2>
                  <h4 className="text-center">
                    Your have successfully Created new client account
                  </h4>
                  <h5 className="text-center">Your Factory No. : FN-1</h5>
                  <h5 className="text-center">Username : client@123</h5>
                  <h5 className="text-center">Password : client###@123</h5>
                </div>
                <div className="col-lg-12">
                  <a
                    href="/client-account-manager-admin/registered-company-form-lawyers/create-account-success-page/job-assign"
                    className="btn btn-primary float-start"
                  >
                    Go to Job Assignment
                  </a>
                  <button className="btn btn-primary float-end">
                    Send Details to Client
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountsSuccessPage;
