import React from "react";
import Header from "../Header";
import "./salesdfm.css";

const Meetings = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h3 className="text-center text-primary">Meetings</h3>
                <div className="card">
                  <div className="card-body">
                    <ul className="nav nav-pills navtab-bg nav-justified">
                      <li className="nav-item">
                        <a
                          href="#internal-meetings"
                          data-bs-toggle="tab"
                          aria-expanded="true"
                          className="nav-link active"
                        >
                          Internal <br />
                          Meetings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#client-meetings"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Client Meetings <br /> Existing Sales
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#new-client-meeting"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          New Client <br />
                          Meeting
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#rejected-client-meeting"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Rejected/Cancelled/Refused <br />
                          Client New Meeting
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#personal-meeting-availability"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Personal Meeting <br /> & Availability
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#full-calendar"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          Full Calendar to
                          <br /> Show Availability
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="internal-meetings"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="card border">
                              <div className="card-header b-light">
                                <h4>Scheduled</h4>
                              </div>
                              <div className="card-body">
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Choose Date.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Choose Timing.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address.."
                                  />
                                </div>
                                <hr className="mb-0" />
                                <h4>Person to confirm with :</h4>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone number.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Position.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Note.."
                                  ></textarea>
                                </div>
                                <div className="mb-2 text-center">
                                  <button className="btn btn-primary">
                                    Accept & Participate
                                  </button>
                                  <button className="btn btn-danger marginLeft">
                                    Reject with reason
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card border">
                              <div className="card-header b-light">
                                <h4>Make a Scheduled</h4>
                              </div>
                              <div className="card-body">
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Choose Date.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Choose Timing.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Invite Participants.."
                                  />
                                </div>
                                <div className="mb-2">
                                  <textarea
                                    className="form-control"
                                    rows="6"
                                    placeholder="Note.."
                                  ></textarea>
                                </div>
                                <div className="mb-2 text-center">
                                  <button className="btn btn-primary">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="client-meetings">
                        <div className="row">
                          <div className="col-lg-3 border p-3">
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
                      <div className="tab-pane" id="new-client-meeting">
                        <div className="row">
                          <div className="col-lg-3 border p-3">
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
                      <div
                        className="tab-pane"
                        id="personal-meeting-availability"
                      >
                        <div className="row">
                          <div className="col-lg-3 border p-3">
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
                      <div className="tab-pane" id="full-calendar">
                        <div className="row">
                          <div className="col-lg-3 border p-3">
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
                    </div>
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

export default Meetings;
