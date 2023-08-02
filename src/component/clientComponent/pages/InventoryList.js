import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import { toast } from "react-toastify";
import axios from "axios";
import "./client.css";

const token = localStorage.getItem("data");
// console.log(token);
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

const InventoryList = () => {
  const [stock, setStock] = useState({
    reception_data: "",
    quantity: "",
    total_price: "",
  });

  const handleStock = (e) => {
    e.preventDefault();
    // console.log(id, stock);

    const callAPI = async () => {
      try {
        const res = await authAxios.post("/api/add_stock_history", {
          reception_date: stock.reception_data,
          quantity: stock.quantity,
          total_price: stock.total_price,
          variations: [
            { variation_id: "64b00a79a5396afddafce5c1", quantity: "50" },
            { variation_id: "64b00a79a5396afddafce5c3", quantity: "50" },
          ],
        });
        console.log(res.data);
        if (res.data.status_code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  };

  const [invetories, setinventories] = useState([]);
  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await authAxios.get("/api/get_all_inventory");
        console.log(res.data.data);
        setinventories(res.data.data);

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
              <form className="px-3 " action="#" onSubmit={handleStock}>
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <label htmlFor="product_name" className="form-label">
                      Product
                    </label>
                    <select
                      className="form-select"
                      required
                      name="product_id"
                      // // value={stock.product_id}
                      // onChange={(e) => getinventoryItemId(e)}
                    >
                      {inventory?.map((item) => {
                        return (
                          <option value={item._id} key={item._id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="order_price" className="form-label">
                      Total Order Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      placeholder="Enter Total Order Price..."
                      name="total_price"
                      value={stock.total_price}
                      onChange={(e) =>
                        setStock({ ...stock, total_price: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="order_qty" className="form-label">
                      Order Qty.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      placeholder="Enter Order Quantity..."
                      name="quantity"
                      value={stock.quantity}
                      onChange={(e) =>
                        setStock({ ...stock, quantity: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-lg-12 mb-2">
                    <label htmlFor="reception_date" className="form-label">
                      Reception Date
                    </label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      name="reception_data"
                      value={stock.reception_data}
                      onChange={(e) =>
                        setStock({ ...stock, reception_data: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-2 text-center">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    &nbsp;&nbsp;
                    <label
                      className="btn btn-outline-primary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </label>
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
