import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import axios from "axios";
import "./client.css";

const token = localStorage.getItem("data");
// console.log(token);
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

const InventoryList = () => {
  const [invetories, setInventories] = useState([]);
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await authAxios.get("/api/get_all_inventory");
        console.log(res.data.data);
        setInventories(res.data.data);

        if (res.data.status_code === 200) {
          console.log(res.data.message);
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  }, []);

  const { inventory } = invetories;

  return (
    <div>
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
                          <h5>Inventory</h5>
                        </div>
                        <div className="col-lg-4 text-end mb-2">
                          <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#order-model"
                          >
                            Add New Stock
                          </button>
                          <button className="btn btn-primary ml_2">
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
                                  <th>Product Name</th>
                                  <th>Total Capacity</th>
                                  <th>Available Stock</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              {inventory?.map((item, count) => {
                                return (
                                  <tbody>
                                    <tr>
                                      <td>{++count}</td>
                                      <td> {item.name} </td>
                                      <td>{item.capacity}</td>
                                      <td>{item.stock}</td>
                                      <td width="180px">
                                        <button
                                          className="btn btn-primary btn-sm"
                                          data-bs-toggle="modal"
                                          data-bs-target="#order-model"
                                        >
                                          Order More
                                        </button>
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
      <div
        id="order-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-1 mb-2">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary text-start mb-0">
                    Add New Stock
                  </h4>
                  <hr />
                </div>
              </div>
              <form className="px-3 " action="#">
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <label htmlFor="product_name" className="form-label">
                      Product
                    </label>
                    <select className="form-select">
                      <option value>Running Shoes</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="order_price" className="form-label">
                      Total Order Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Total Order Price..."
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="order_qty" className="form-label">
                      Order Qty.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Order Quantity..."
                    />
                  </div>
                  <div className="col-lg-12 mb-2">
                    <label htmlFor="reception_date" className="form-label">
                      Reception Date
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="mb-2 text-center">
                    <button className="btn btn-primary">Submit</button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-outline-primary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
