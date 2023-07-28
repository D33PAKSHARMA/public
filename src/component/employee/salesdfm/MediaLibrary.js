import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import MediaLibraryCard from "./MediaLibraryCard";

const MediaLibrary = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h3 className="text-center text-primary">Media Library</h3>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-8 mb-3">
                        <h4 className="text-primary">
                          Photos + Videos of our Warehouses + Offices
                        </h4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1 mb-3"></div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/warehouse-setup-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Warehouse%20Setup.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Warehouse <br />
                                Setup
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/office-setup-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/offices%20setup.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Office Setup
                                <br />
                                &nbsp;
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/sales-team-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Sales%20Team.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Sales Team
                                <br />
                                &nbsp;
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/seo-graphic-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/IT%20Online%20Seo.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                IT+Online SEO
                                <br />
                                Graphic Team
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/your-products-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Your%20Products.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Your
                                <br />
                                Products
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1 mb-3"></div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/order-processing-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/order-processed-color.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Order Processing
                                <br />
                                Process
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/security+safty-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Security.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Security &<br /> Safety
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/showroom-display-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Showroom.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Showroom
                                <br /> & Display
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/marketing-team-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Our%20Marketing%20Team.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Our Marketing Team <br /> + Method of Branding
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/legal-team-account-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/The%20Legal%20Team.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                The Legal Team <br /> + Accountants
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1 mb-3"></div>
                      <div className="col-md-2 mb-3">
                        <Link to="/sales-dfmp/media-library/supply-chain-media">
                          <div className="card border-primary border">
                            <div className="card-body text-center">
                              <img
                                src="/assets/images/sub-dept/Our%20Supply%20Chain.png"
                                width="85px"
                                alt=""
                                className="mb-2 border border-primary rounded-circle"
                              />
                              <h5>
                                Our Supply Chain <br /> Solution Door to Door
                              </h5>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <MediaLibraryCard />
                      <MediaLibraryCard />
                      <MediaLibraryCard />
                      <MediaLibraryCard /> */}
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

export default MediaLibrary;
