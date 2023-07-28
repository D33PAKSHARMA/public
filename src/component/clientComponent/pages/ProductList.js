import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import { Link } from "react-router-dom";
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

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await authAxios.get("/api/all_products");
        setProducts(res.data);
        // console.log(res.data);
        // if(res.data.)
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  }, []);

  const { data } = products;
  console.log(data);

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
                          <h5>Products List</h5>
                        </div>
                        <div className="col-lg-4 text-end mb-2">
                          <Link
                            to="/client/inventory/create-product"
                            className="btn btn-primary"
                          >
                            Add New Product
                          </Link>
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
                                  <th>Purchase Price</th>
                                  <th>Selling Price</th>
                                  {/* <th>Discount</th> */}
                                  <th>Verify Status</th>
                                  <th>Active Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              {/* looping the data  */}
                              {data?.map((item, count) => {
                                return (
                                  <tbody>
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
                                      {/* <td>$500.0</td> */}
                                      <td>
                                        {item.status === true ? (
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
                                          to="/client/inventory/product-details"
                                          className="btn btn-primary btn-sm"
                                        >
                                          <span className="mdi mdi-eye" />
                                        </Link>
                                        <Link
                                          to="/client/inventory/product-list"
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
    </div>
  );
};

export default ProductList;
