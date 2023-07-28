import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom/dist";
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

const Inventory = () => {
  const navigate = useNavigate();
  // ....................ADD New Stock.....................
  const [id, setId] = useState("");
  const [stock, setStock] = useState({
    reception_data: "",
    quantity: "",
    total_price: "",
  });

  // Get items id
  const getinventoryItemId = (e) => {
    e.preventDefault();
    const productId = e.target.value;
    setId(productId);
  };

  const handleStock = (e) => {
    e.preventDefault();
    // console.log(id, stock);

    const callAPI = async () => {
      try {
        const res = await authAxios.post("/api/add_stock_history", {
          product_id: id,
          reception_date: stock.reception_data,
          quantity: stock.quantity,
          total_price: stock.total_price,
        });
        if (res.data.status_code === 200) {
          // console.log(res.data.message);
          toast.success(res.data.message);
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  };

  // ......................Get ALl Inventory........................
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
    getAllInventory(id);
  }, []);

  // console.log(inventories);
  const { products, inventory, stock_histories } = inventories;
  // console.log(products);
  // console.log(inventory);
  // console.log(stock_histories);

  return (
    <>
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
                            <h5>Products</h5>
                          </div>
                          <div className="col-lg-4 text-end mb-2">
                            <Link
                              to="/client/inventory/create-product"
                              className="btn btn-primary mr_2"
                            >
                              Add New Producttory
                            </Link>
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
                                    <th>Product Name</th>
                                    <th>Purchase Price</th>
                                    <th>Selling Price</th>
                                    <th>Verify Status</th>
                                    <th>Active Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                {products?.map((item, count) => {
                                  return (
                                    <tbody key={item._id}>
                                      <tr>
                                        <td>{++count}</td>
                                        <td>
                                          <img
                                            src="/assets/images/users/user-2.jpg"
                                            alt="contact-img"
                                            title="contact-img"
                                            className="avatar-sm img-thumbnail"
                                          />
                                          &nbsp;&nbsp;{item.name}
                                        </td>
                                        <td>${item.cost}</td>
                                        <td>${item.sale_price}</td>
                                        <td>
                                          {item.status ? (
                                            <label className="badge badge-soft-success">
                                              Approved
                                            </label>
                                          ) : (
                                            <label className="badge badge-soft-danger">
                                              Pending
                                            </label>
                                          )}
                                        </td>
                                        <td>
                                          <button className="btn btn-success btn-sm">
                                            Active
                                          </button>
                                        </td>
                                        <td width="180px">
                                          <Link
                                            to={`/client/inventory/product-details/${item._id}`}
                                            className="btn btn-primary btn-sm "
                                          >
                                            <span className="mdi mdi-eye" />
                                          </Link>
                                          <Link
                                            to={`/client/inventory/update-product/${item._id}`}
                                            className="btn btn-primary btn-sm _margin"
                                          >
                                            <span className="mdi mdi-square-edit-outline" />
                                          </Link>
                                          <button
                                            className="btn btn-primary btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-alert-modal"
                                          >
                                            <span className="mdi mdi-trash-can-outline" />
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  );
                                })}
                              </table>
                              <Link
                                to="/client/inventory/product-list"
                                className="btn btn-primary btn-sm float-end"
                              >
                                View All...
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-8 mb-2">
                            <h5>Inventory</h5>
                          </div>
                          <div className="col-lg-4 text-end mb-2">
                            <button
                              className="btn btn-primary mr_2"
                              data-bs-toggle="modal"
                              data-bs-target="#order-model"
                              // value={item._id}
                              // onClick={(e) => getID(e)}
                            >
                              Add New Stock
                            </button>
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
                                    <th>Product Name</th>
                                    <th>Total Capacity</th>
                                    <th>Available Stock</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                {inventory?.map((item, count) => {
                                  return (
                                    <tbody key={item._id}>
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
                              <Link
                                to="/client/inventory/inventory-list"
                                className="btn btn-primary btn-sm float-end"
                              >
                                View All...
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                                {stock_histories?.map((item, count) => {
                                  return (
                                    <tbody key={item._id}>
                                      <tr>
                                        <td>{++count}</td>
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
                              <Link
                                to="/client/inventory/stock-order-history"
                                className="btn btn-primary btn-sm float-end"
                              >
                                View All...
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
            <Footer />
          </div>
        </div>
        <div
          id="delete-alert-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content modal-filled bg-danger">
              <div className="modal-body p-4">
                <div className="text-center">
                  <i className="mdi mdi-trash-can-outline h1 text-white" />
                  <h4 className="mt-2 text-white">Delete!</h4>
                  <p className="mt-3 text-white">
                    Are you sure you want to delete this Product?
                  </p>
                  <button
                    type="button"
                    className="btn btn-light my-2"
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-danger border-white my-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
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
                        name="product_id"
                        // value={stock.product_id}
                        onChange={(e) => getinventoryItemId(e)}
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
    </>
  );
};

export default Inventory;
