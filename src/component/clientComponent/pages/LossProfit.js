import React from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";

const LossProfit = () => {
  return (
    <div id="wrapper">
      <Helmet>
        <title>Loss Profit</title>
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
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-10">
                        <h4 className="page-title">Weeekly Sales Report</h4>
                      </div>
                      <div className="col-lg-2">
                        <select className="form-select">
                          <option>JAN</option>
                          <option>FAB</option>
                          <option>MAR</option>
                          <option>APR</option>
                        </select>
                      </div>
                      <div className="col-lg-12">
                        <div
                          id="cardCollpase5"
                          className="collapse pt-3 show"
                          dir="ltr"
                        >
                          <div
                            id="apex-column-1"
                            className="apex-charts"
                            data-colors="#145150,#1abc9c,#CED4DC"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mx-auto text-center">
                <button className="btn btn-primary">Print Report </button>
                <button className="btn btn-primary">Expand Report </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <div className="card mt-3">
                  <div className="card-body">
                    <h5>
                      Donate to world Hunger program (1% of net profit will be
                      donated)
                    </h5>
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

export default LossProfit;
