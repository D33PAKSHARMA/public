import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./client.css";

const token = localStorage.getItem("data");
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const ManualOrderInput = () => {
  // ....................................Create-client-customers........................................
  const [create, setCreate] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const createClientCustomers = async (e) => {
    e.preventDefault();

    // console.log(create);

    try {
      const res = await authAxios.post("/api/create_client_customer", {
        name: create.name,
        phone: create.phone,
        address: create.address,
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

  //....................................Client-customer-details....................................

  const [details, setDetails] = useState([]);
  const [id, setId] = useState("");
  const getID = (e) => {
    e.preventDefault();
    const _id = e.target.value;
    console.log(id); // console
    setId(_id);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const res = await authAxios.get(`/api/client_customer_detail/${id}`);
          setDetails(res.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [id]);
  // console.log(details);

  // const { user_details } = details;
  // // console.log(user_details);

  // const address = user_details?.filter((item) => item.address === "address");

  // console.log(address);

  //.....................................all_client_customers.........................................
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await authAxios.get("api/all_client_customers");
        setCustomer(res.data.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  // console.log(customer);

  // .................................create_client_manual_order......................................

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  console.log(name);
  const [order, setOrder] = useState({
    customer_address: "",
    total_order_price: "",
    gst: "",
    discount: "",
    shipping_charges: "",
    grand_total: "",
    orderItems: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(order);
    console.log(details._id);
    console.log(details.first_name);
    console.log(details.phone);

    try {
      const res = await authAxios.post("/api/create_client_manual_order", {
        customer_id: details._id,
        customer_name: details.first_name,
        customer_mobile: details.phone,
        customer_address: order.customer_address,
        total_order_price: order.total_order_price,
        gst: order.gst,
        discount: order.discount,
        shipping_charges: order.shipping_charges,
        grand_total: order.grand_total,
        orderItems: order.orderItems,
      });
      if (res.data.status_code === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // .......................................CLient All Manual Orders.......................................

  const [all, setAll] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await authAxios.get("/api/client_all_manual_orders");
        setAll(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  // console.log(all);

  // .........................................Get ALl Products.........................................

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getAll = async () => {
      try {
        const { data } = await authAxios.get("/api/all_products");
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  // console.log(product);

  // ...................................Get Single Product Details...................................
  const [singleproduct, setSingleProduct] = useState([]);
  const [singleId, setSingleId] = useState("");

  const [showTbody, setShowTbody] = useState(false);

  const getSigleProductId = (e) => {
    e.preventDefault();
    const singleid = e.target.value;
    // console.log(singleid); // console
    setSingleId(singleid);
  };

  useEffect(() => {
    if (singleId) {
      const getAllInventory = async () => {
        try {
          const response = await authAxios?.get(
            `api/product_detail/${singleId}`
          );
          // console.log(response.data);
          setSingleProduct(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getAllInventory();
      setShowTbody(true);
    }
  }, [singleId]);
  console.log(singleproduct);

  const handleDelete = (e) => {
    e.preventDefault();
    setShowTbody(false);
  };

  // .............................Open new form for creating new Customer.............................
  const openTab = () => {
    const form = document.querySelector(".form-2");
    form.style.display = "block";
  };

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
                <div className="col-lg-8 mb-2">
                  <h5>Order List</h5>
                </div>
                <div className="col-lg-4 text-end mb-2">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#create-order-model"
                  >
                    Create New Order
                  </button>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive mt-3">
                        <table
                          id="basic-datatable_wrapper"
                          className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                        >
                          <thead className="bg-light">
                            <tr>
                              <th>SL</th>
                              <th>Order ID</th>
                              <th>Order Date</th>
                              <th>Customer Info</th>
                              <th>Total Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          {all?.map((item, count) => {
                            return (
                              <tbody>
                                <tr>
                                  <td>{++count}</td>
                                  <td>
                                    <h5 className="text-primary bold">
                                      {item._id}
                                    </h5>
                                  </td>
                                  <td>{item.created_at} AM</td>
                                  <td>
                                    {item.customer_name} <br />
                                    {item.customer_mobile}
                                  </td>
                                  <td>
                                    ${item.grand_total}
                                    <br />
                                    <span className="text-success">Paid</span>
                                  </td>
                                  <td width="120px">
                                    <Link
                                      to={`/client/orders/manual-order-input/order-details/${item._id}`}
                                      className="btn btn-primary btn-sm"
                                    >
                                      <span className="mdi mdi-eye" />
                                    </Link>
                                    <button className="btn btn-primary btn-sm ml_2">
                                      <span className="mdi mdi-download" />
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
        id="create-order-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-2">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary text-start mb-0">
                    Create New Order
                  </h4>
                  <hr className="mb-0" />
                </div>
              </div>
              <form
                className="px-3 row form-2"
                action=""
                style={{ display: "none" }}
                onSubmit={createClientCustomers}
              >
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mobile Number..."
                    // name="name"
                    value={order.name}
                    onChange={(e) =>
                      setCreate({ ...create, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number..."
                    // name="phone"
                    value={order.phone}
                    onChange={(e) =>
                      setCreate({ ...create, phone: e.target.value })
                    }
                  />
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer Address..."
                    // name="address"
                    value={order.address}
                    onChange={(e) =>
                      setCreate({ ...create, address: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-primary w-100" type="submit">
                    Create
                  </button>
                </div>
                <br />
                <hr />
                <br />
              </form>
              {/* ..............................................2nd form Started.............................................. */}
              <form className="px-3 row" action="#" onSubmit={handleSubmit}>
                <div className="mb-2 col-lg-12 input-group">
                  <label htmlFor="role" className="form-label">
                    Customer
                  </label>
                  <div className="input-group">
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Enter Customer Name..."
                      name="name"
                      // value={name}
                      onChange={(e) => getID(e)}
                    >
                      {customer?.map((cust) => {
                        return (
                          <option key={cust._id} value={cust._id}>
                            {cust.first_name}
                          </option>
                        );
                      })}
                    </select>

                    <button
                      className="btn input-group-text btn-primary waves-effect waves-light"
                      type="button"
                      onClick={openTab}
                    >
                      Add New
                    </button>
                  </div>
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile Number..."
                    name="number"
                    value={details.phone}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="mb-2 col-lg-6">
                  <label htmlFor="role" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Customer Address..."
                    name="customer_address"
                    value={order.customer_address}
                    onChange={(e) =>
                      setOrder({ ...order, customer_address: e.target.value })
                    }
                  />
                </div>
                <div className="col-lg-11 mx-auto border">
                  <div className="mb-2 mt-3">
                    <select
                      className="form-select"
                      onChange={(e) => getSigleProductId(e)}
                    >
                      <option value>Select Product</option>
                      {product?.map((item) => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered mt-1">
                      <thead className="bg-light">
                        <tr>
                          <th width={60}>SL</th>
                          <th>Item</th>
                          <th width={105}>Qty</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th width="60px">Remove</th>
                        </tr>
                      </thead>
                      {/* ............... tbody,.............................. */}
                      {showTbody && (
                        <tbody>
                          <tr>
                            <td>1. </td>
                            <td>{singleproduct.name}</td>
                            <td>
                              <input
                                type="number"
                                className="form-control"
                                defaultValue={singleproduct.capacity}
                              />
                            </td>
                            <td>${singleproduct.cost}</td>
                            <td>
                              ${singleproduct.capacity * singleproduct.cost}
                            </td>
                            <td className="text-center">
                              <a href className="text-danger">
                                <span
                                  className="mdi mdi-trash-can-outline mdi-24px pe-auto delete_button"
                                  onClick={handleDelete}
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <th className="text-end">Total : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={40}
                              className="form-control"
                              name="total_order_price"
                              value={order.total_order_price}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  total_order_price: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">GST : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={40}
                              className="form-control"
                              name="gst"
                              value={order.gst}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  gst: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Discount : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={40}
                              className="form-control"
                              name="discount"
                              value={order.discount}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  discount: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Shipping Charge : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={25}
                              className="form-control"
                              name="shipping_charges"
                              value={order.shipping_charges}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  shipping_charges: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Order Items : </th>
                          <td>
                            <input
                              type="text"
                              defaultValue={25}
                              className="form-control"
                              name="orderItems"
                              value={order.orderItems}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  orderItems: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                        <tr>
                          <th className="text-end">Grand Total : </th>
                          <td>
                            <input
                              type="number"
                              defaultValue={25}
                              className="form-control"
                              name="grand_total"
                              value={order.grand_total}
                              onChange={(e) =>
                                setOrder({
                                  ...order,
                                  grand_total: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row mb-3 mt-3">
                    <div className="col-lg-2" />
                    <div className="col-lg-4">
                      <button
                        className="btn btn-danger w-100"
                        data-bs-dismiss="modal"
                      >
                        Cancel Order
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button className="btn btn-primary w-100" type="submit">
                        Confirm Order
                      </button>
                    </div>
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

export default ManualOrderInput;
