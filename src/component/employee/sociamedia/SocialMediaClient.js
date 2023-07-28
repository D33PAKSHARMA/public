import React from "react";
import { Link } from "react-router-dom";

const SocialMediaClient = () => {
  return (
    <div>
      <div className="account-pages mt-3 mb-2">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <Link to="/social-media">
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
                    <div className="col-lg-9 mb-2" />
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
                    <div className="col-md-1 mb-3" />
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-danger">
                          <div className="card-body">
                            <h5 className="text-center">FN-1</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-2</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-3</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-danger">
                          <div className="card-body">
                            <h5 className="text-center">FN-4</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-5</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1 mb-3" />
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-6</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-danger">
                          <div className="card-body">
                            <h5 className="text-center">FN-7</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-8</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-primary">
                          <div className="card-body">
                            <h5 className="text-center">FN-9</h5>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 mb-3">
                      <Link to="/social-media/social-media-client/social-media-client-details">
                        <div className="card bg-soft-danger">
                          <div className="card-body">
                            <h5 className="text-center">FN-10</h5>
                          </div>
                        </div>
                      </Link>
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

export default SocialMediaClient;
