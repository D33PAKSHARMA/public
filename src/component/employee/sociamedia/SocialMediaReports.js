import React from "react";
import { Link } from "react-router-dom";

const SocialMediaReports = () => {
  return (
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
            <h2 className="text-primary float-end">Social Media Reports</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-lg-3 mt-3">
                    <h4 className="text-end">Social Media Portal</h4>
                  </div>
                  <div className="col-lg-2 mt-3">
                    <select className="form-select float-start">
                      <option>FN-61</option>
                      <option>FN-62</option>
                      <option>FN-63</option>
                      <option>FN-64</option>
                      <option>FN-65</option>
                    </select>
                  </div>
                  <div className="col-lg-2">
                    <label>From</label>
                    <input
                      type="date"
                      className="form-control"
                      defaultValue="2023-04-03"
                    />
                  </div>
                  <div className="col-lg-2">
                    <label>To</label>
                    <input
                      type="date"
                      className="form-control"
                      defaultValue="2023-09-03"
                    />
                  </div>
                  <div className="col-lg-3 mt-3">
                    <button className="btn btn-primary btn-sm">Export</button>
                    <button className="btn btn-primary btn-sm ml-2">
                      Send Report
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="card border border-primary"
                      style={{ height: 355 }}
                    >
                      <div className="card-body">
                        <h3 className="text-primary">Overall Traffic</h3>
                        <h1 className="text-primary text-center mt-3">176K</h1>
                        <div className="progress mb-0 progress-xl">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "75%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card border border-primary">
                      <div className="card-body">
                        <h4 className="text-primary">Social Media Report</h4>
                        <div className="row">
                          <div className="col-lg-1 pt-2" />
                          <div className="col-lg-2 pt-2">
                            <strong>88k</strong>
                            <br />
                            <br />
                            <strong>40k</strong>
                            <br />
                            <br />
                            <strong>30k</strong>
                            <br />
                            <br />
                            <strong>20k</strong>
                            <br />
                            <br />
                            <strong>10k</strong>
                            <br />
                            <br />
                            <strong>0</strong>
                            <br />
                            <br />
                          </div>
                          <div className="col-lg-8">
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "55%" }}
                                aria-valuenow={55}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "65%" }}
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "85%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "45%" }}
                                aria-valuenow={45}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                            <div className="progress progress-vertical-bottom progress-xl">
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ height: "95%" }}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-facebook mdi-24px" />{" "}
                            YouTube Ads
                          </h4>
                          <h1 className="text-primary text-center">176K</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-instagram mdi-24px" />{" "}
                            Instgram Impressions
                          </h4>
                          <h1 className="text-primary text-center">56K</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-twitter mdi-24px" />{" "}
                            Twitter Impressions
                          </h4>
                          <h1 className="text-primary text-center">88K</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-linkedin mdi-24px" />{" "}
                            Linkedin Ads
                          </h4>
                          <h1 className="text-primary text-center">30K</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-google-ads mdi-24px" />{" "}
                            Google Ads
                          </h4>
                          <h1 className="text-primary text-center">38K</h1>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h4 className="text-primary text-center">
                            <span className="mdi mdi-music-note mdi-24px" />{" "}
                            Tiktok Ads
                          </h4>
                          <h1 className="text-primary text-center">88K</h1>
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

export default SocialMediaReports;
