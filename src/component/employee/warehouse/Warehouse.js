import React from "react";
import { Link } from "react-router-dom";

const Warehouse = () => {
  return (
    <div className="account-pages mt-3 mb-2">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <Link to="/department">
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
            <h2 className="text-primary float-end">Warehouse</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3 text-center">
            <h3>Select One</h3>
          </div>
          <div className="col-md-1 mb-3" />
          <div className="col-md-3 mb-3">
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#inventory-manager-login"
            >
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/inventory.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Inventory Managers
                    <br />
                    Stock Controller
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 mb-3">
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#order-processing-login"
            >
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/order-processed.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Order <br />
                    Processing
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div
            className="col-md-3 mb-3"
            data-bs-toggle="modal"
            data-bs-target="#warehouse-maintainer-login"
          >
            <a href="javascript:void(0)">
              <div className="card bg-primary border-white">
                <div className="card-body text-center">
                  <img
                    src="/assets/images/sub-dept/track.png"
                    width="75px"
                    className="mb-0"
                  />
                  <h5 className="text-white">
                    Mainatainer Cleaner <br />
                    General Care
                  </h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
