import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import axios from "axios";

const token = localStorage.getItem("data");
// console.log(token);
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

const StockOrderHistory = () => {
  const [inventories, setInventories] = useState({});

  useEffect(() => {
    const getAllInventory = async () => {
      try {
        const response = await authAxios?.get("/api/get_all_inventory");
        // console.log(response.data);
        setInventories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllInventory();
  }, []);

  // console.log(inventories);
  const { stock_histories } = inventories;

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
                                {/* <th>Order Date</th> */}
                                <th>Reception Date</th>
                                <th>Order Qty.</th>
                                <th>Price</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            {stock_histories?.map((item, c) => {
                              return (
                                <tbody>
                                  <tr>
                                    <td>{++c}</td>
                                    <td>{item.product_name}</td>
                                    {/* <td>16 June 2023</td> */}
                                    <td>{item.reception_date}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.total_price}</td>
                                    <td>
                                      <label className="badge badge-soft-warning">
                                        Pending
                                      </label>
                                    </td>
                                  </tr>
                                </tbody>
                              );
                            })}
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
