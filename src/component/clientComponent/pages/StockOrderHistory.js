import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";

const StockOrderHistory = () => {
  // const [stock, setStock] = useState([]);

  // useEffect(() => {
  //   const callAPI = async () => {
  //     try {
  //       const res = await axios.get("");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // });

  return (
    <div id="wrapper">
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
                      <div className="col-lg-8 mb-2">
                        <h5>Stock Order History</h5>
                      </div>
                      <div className="col-lg-4 text-end mb-2">
                        <button className="btn btn-primary">
                          Print Report
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <div className="table-responsive">
                          <table
                            id="basic-datatable_wrapper"
                            className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                          >
                            <thead className="bg-light">
                              <tr>
                                <th>SL</th>
                                <th>Product</th>
                                <th>Order Date</th>
                                <th>Reception Date</th>
                                <th>Order Qty.</th>
                                <th>Price</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1.</td>
                                <td>Running Shoes</td>
                                <td>16 June 2023</td>
                                <td>18 June 2023</td>
                                <td>20</td>
                                <td>$12,000</td>
                                <td>
                                  <label className="badge badge-soft-warning">
                                    Pending
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6"> </div>
              <div className="col-md-6">
                © <a href>Direct Factory Marketplace</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StockOrderHistory;
