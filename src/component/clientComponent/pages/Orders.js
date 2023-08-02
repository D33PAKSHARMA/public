import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Orders = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <Navbar />
      <Leftbar />

      <div className="content-page" id="content-page-Overview">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-box">&nbsp;</div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3" />
                  <div className="col-lg-3">
                    <div className="card border-primary border mb-3">
                      <a href="website-order.html" className="text-primary">
                        <h4 className="p-4 text-center text-primary">
                          Order from Website
                        </h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="card border-primary border mb-3">
                      <Link
                        to="/client/orders/manual-order-input"
                        className="text-primary"
                      >
                        <h4 className="p-4 text-center text-primary">
                          Manual Order Input
                        </h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Orders;
