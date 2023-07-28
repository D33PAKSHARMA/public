import React from "react";
import Header from "./Header";
import "./style.css";

const MessageCenter = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="text-center">Message Center</h3>
                <div className="card">
                  <div className="card-body">
                    <div className="scroll-x">
                      <ul className="nav nav-pills navtab-bg nav-justified ">
                        <li className="nav-item">
                          <a
                            href="#client-manager"
                            data-bs-toggle="tab"
                            aria-expanded="true"
                            className="nav-link active"
                          >
                            Client <br />
                            Manager
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#client-manager-admin"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            Client Manager <br /> Admin
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#director-message"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            Director <br />
                            Message
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#general-announcement"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            General <br />
                            Announcement
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#accountants"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            Accountants <br />
                            &nbsp;
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#legal-team"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            Legal Team
                            <br />
                            &nbsp;
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#legal-generators"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            Legal <br /> Generators
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="client-manager">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-3 text-center">
                              <button className="btn btn-outline-primary btn-sm w-50 mx-3">
                                <i className="mdi mdi-attachment"></i> Upload
                                Attachment
                              </button>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="client-manager-admin">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Manager Admin</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="director-message">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Director Message</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="general-announcement">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>General Announcement</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="accountants">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="legal-team">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Team</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="legal-generators">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Legal Generators</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="it-department">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>IT department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="warehouse-order-process">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Warehouse Order Process</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="client-sales-report">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Client Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="social-media-department">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Social Media Department</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="accountants">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Accountants</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="seo">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>SEO</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="graphic-designers">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Graphic Designers</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="online-sales-report">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Online Sales Report</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="returns">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Returns</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="live-team-chat">
                        <div className="row">
                          <div className="col-lg-3 border p-3 mb-2">
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="mb-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message:"
                              />
                            </div>
                            <div className="mb-2">
                              <textarea
                                className="form-control"
                                rows="7"
                              ></textarea>
                            </div>
                            <div className="mb-2 text-center">
                              <button className="btn btn-primary btn-sm">
                                Send
                              </button>{" "}
                              <button className="btn btn-outline-primary btn-sm float-end mx-3">
                                <i className="mdi mdi-attachment"></i>
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <table className="table">
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                              <tr>
                                <td>
                                  <i className="mdi mdi-message-text mdi-24px"></i>
                                </td>
                                <th>Live Team Chat</th>
                                <td>
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum{" "}
                                </td>
                                <td>12:30 PM</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="nav nav-pills navtab-bg nav-justified ">
                      <li className="nav-item">
                        <a
                          href="#it-department"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          IT <br />
                          Department
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#warehouse-order-process"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Warehouse
                          <br /> Order Process
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#client-sales-report"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Client <br />
                          Sales Report
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#social-media-department"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Social Media <br />
                          Department
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#seo"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          SEO <br />
                          &nbsp;
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#graphic-designers"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Graphic Designers
                          <br />
                          &nbsp;
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#online-sales-report"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Online <br /> Sales Report
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#returns"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Returns <br /> &nbsp;
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#live-team-chat"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Live Team
                          <br /> Chat
                        </a>
                      </li>
                    </ul>
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

export default MessageCenter;
