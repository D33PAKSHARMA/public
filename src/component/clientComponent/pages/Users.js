import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import Footer from "../component/Footer";
import axios from "axios";
import "./client.css";
import { toast } from "react-toastify";

const token = localStorage.getItem("data");
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const Users = () => {
  //  ................ Add client user...................

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [permission, setPermission] = useState([]);

  const handlecheckBox = (e) => {
    const { value, checked } = e.target;

    // console.log(value, checked);
    if (checked) {
      setPermission([...permission, value]);
    } else {
      setPermission(permission.filter((item) => item !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authAxios.post("/api/add_client_user", {
        first_name: name,
        email: email,
        phone: phone,
        password: password,
        permissions: JSON.stringify(permission),
      });
      if (res.data.status_code === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(name, email, phone, password, permission);
  };

  // Get all client users
  const [users, setUsers] = useState([]);
  const { data } = users; // destructure data from users
  console.log(data);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await authAxios.get("/api/all_client_user");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  // ..................... Update CLient user .......................

  const [id, setId] = useState("");
  const [updatename, setUpdatename] = useState("");
  const [updateemail, setUpdateemail] = useState("");
  const [updatephone, setUpdatephone] = useState("");
  const [updatepassword, setUpdatepassword] = useState("");
  const [updatepermission, setUpdatepermission] = useState([]);

  const handleupdateCheckBox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setUpdatepermission([...updatepermission, value]);
    } else {
      setUpdatepermission(updatepermission.filter((item) => item !== value));
    }
  };

  // Get user ID
  const getUserId = (e) => {
    const userId = e.target.value;

    setId(userId);
    console.log(userId);
  };

  const updatehandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await authAxios.post("/api/update_client_user", {
        user_id: id,
        first_name: updatename,
        email: updateemail,
        phone: updatephone,
        password: updatepassword,
        permission: JSON.stringify(updatepermission),
      });
      if (res.data.status_code === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(
    //   id,
    //   updatename,
    //   updateemail,
    //   updatephone,
    //   updatepassword,
    //   updatepermission
    // );
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
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="page-title-box">
                            <div className="page-title-right">
                              <button
                                type="button"
                                className="btn btn-primary waves-effect waves-light"
                                data-bs-toggle="modal"
                                data-bs-target="#create-user-model"
                              >
                                <span className="btn-label">
                                  <i className="mdi mdi-account-plus" />
                                </span>
                                Assign New User
                              </button>
                            </div>
                            <h4 className="page-title">Active Users</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                            <table
                              id="basic-datatable_wrapper"
                              className="table dt-responsive nowrap w-100 dataTable dtr-inline"
                            >
                              <thead className="bg-light">
                                <tr>
                                  <th>SL</th>
                                  <th>Name</th>
                                  <th>ID</th>
                                  <th>Permissions</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              {data?.map((user, count = 1) => {
                                return (
                                  <>
                                    <tbody>
                                      <tr>
                                        <td>{++count}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user._id}</td>
                                        <td>{user.permissions}</td>
                                        <td>
                                          <button
                                            className="btn btn-primary btn-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete-alert-modal"
                                          >
                                            <span className="mdi mdi-trash-can-outline" />
                                            Delete
                                          </button>
                                          <button
                                            className="btn btn-primary btn-sm edit_button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit-user-model"
                                            value={user._id}
                                            onClick={(e) => getUserId(e)}
                                          >
                                            <span className="mdi mdi-square-edit-outline" />
                                            Edit
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </>
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
                  Are you sure you want to delete this User?
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
        id="create-user-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary">Assign New User</h4>
                </div>
              </div>
              <form className="px-3 row" action="#" onSubmit={handleSubmit}>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    // id="name"
                    required
                    placeholder="Enter Name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    // id="email1"
                    required
                    placeholder="Enter Email Address.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="mobile_number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    // id="mobile_number"
                    placeholder="Enter Mobile Number.."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    required
                    // id="password1"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-1 col-lg-12">
                  <label>Select Permissions</label>
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="inventory"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Inventory
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="loss profit"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Loss Profit
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="add-Ons"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Add-Ons
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="messages"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Messages
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="order"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Order
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="user"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;User
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="settings"
                    onChange={(e) => handlecheckBox(e)}
                  />
                  &nbsp;&nbsp;Settings
                </div>
                <div className="mt-2 col-lg-12 text-center">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="edit-user-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary">Update User</h4>
                </div>
              </div>
              <form
                className="px-3 row"
                action="#"
                onSubmit={updatehandleSubmit}
              >
                <div className="mb-3 col-lg-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    // id="name"
                    required
                    placeholder="Enter Name.."
                    defaultValue="Alex Newton"
                    value={updatename}
                    onChange={(e) => setUpdatename(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    // id="email"
                    required
                    placeholder="Enter Email Address.."
                    defaultValue="alexnewton@gmail.com"
                    value={updateemail}
                    onChange={(e) => setUpdateemail(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="mobile_number" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    className="form-control"
                    type="mobile_number"
                    required
                    // id="mobile_number"
                    placeholder="Enter Mobile Number.."
                    // defaultValue={1234567890}
                    value={updatephone}
                    onChange={(e) => setUpdatephone(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    required
                    // id="password"
                    placeholder="Enter your Password"
                    defaultValue="Alex Newton"
                    value={updatepassword}
                    onChange={(e) => setUpdatepassword(e.target.value)}
                  />
                </div>
                <div className="mb-1 col-lg-12">
                  <label>Select Permissions</label>
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    // defaultChecked
                    value="Inventory"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Inventory
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    // defaultChecked
                    value="Loss Profit"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Loss Profit
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    // defaultChecked
                    value="Add-Ons"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Add-Ons
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    // defaultChecked
                    value="Messages"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Messages
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="Order"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Order
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="User"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;User
                </div>
                <div className="mb-1 col-lg-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="Settings"
                    onChange={(e) => handleupdateCheckBox(e)}
                  />
                  &nbsp;&nbsp;Settings
                </div>
                <div className="mt-2 col-lg-12 text-center">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        id="create-role-model"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center mt-2 mb-4">
                <div className="auth-logo">
                  <h4 className="mt-4 text-primary">Roles &amp; Permissions</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <form className="px-3 " action="#">
                    <div className="mb-3">
                      <label htmlFor="role_name" className="form-label">
                        Role Name
                      </label>
                      <input
                        className="form-control"
                        type="role_name"
                        id="role_name"
                        required
                        placeholder="Enter Role Name.."
                      />
                    </div>
                    <div className="mb-3 text-center">
                      <button className="btn btn-primary" type="submit">
                        Create Now
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-outline-danger"
                        data-bs-dismiss="modal"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <div className="table-responsive">
                    <table className="table dt-responsive nowrap w-100 dataTable dtr-inline">
                      <thead className="table-light">
                        <tr>
                          <th>SL</th>
                          <th>Role Name</th>
                          <th wisth="170px">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.</td>
                          <td>Accountant</td>
                          <td>
                            <button className="btn btn-outline-info btn-md">
                              <span className="mdi mdi-key-chain" />
                            </button>
                            <button className="btn btn-outline-primary btn-md">
                              <span className="mdi mdi-square-edit-outline" />
                            </button>
                            <button className="btn btn-outline-danger btn-md">
                              <span className="mdi mdi-trash-can-outline" />
                            </button>
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
  );
};

export default Users;
