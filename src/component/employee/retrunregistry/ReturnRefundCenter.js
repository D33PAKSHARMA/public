import React from "react";
import { Link } from "react-router-dom";

const ReturnRefundCenter = () => {
  return (
    <div className="account-pages mt-3 mb-1">
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-4 mb-2">
            <Link to="/retrun-registry">
              <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px" />
              <img
                src="/assets/images/dark-logo.png"
                alt
                height={70}
                className="mb-1"
              />
            </Link>
          </div>
          <div className="col-md-8">
            <h2 className="text-primary float-end">Return/Refund Center</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs nav-bordered nav-justified">
                  <li className="nav-item">
                    <a
                      href="#all-equests"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link active"
                    >
                      <strong>All Requests</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#approvals"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link "
                    >
                      <strong>Approvals</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#customer-replies"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link "
                    >
                      <strong>Customer Replies</strong>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="all-equests">
                    <div className="mb-2 px-4">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="bg-light">
                            <tr>
                              <th>Product </th>
                              <th>FN</th>
                              <th>PN</th>
                              <th>Reason</th>
                              <th>Purchase Date</th>
                              <th>Return Date</th>
                              <th>Note</th>
                              <th>Desired Action</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Adjustable Laptop</td>
                              <td>FN-23</td>
                              <td>678</td>
                              <td>Damage</td>
                              <td>11/03/2023</td>
                              <td>10/04/2023</td>
                              <td>----------</td>
                              <td>Refund</td>
                              <td>Pending</td>
                              <td>
                                <button className="btn btn-primary btn-sm">
                                  Send to Client
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Smart LED Google TV</td>
                              <td>FN-67</td>
                              <td>980</td>
                              <td>Wrong Product</td>
                              <td>11/03/2023</td>
                              <td>05/04/2023</td>
                              <td>-----------</td>
                              <td>Replace</td>
                              <td>Pending</td>
                              <td>
                                <button className="btn btn-primary btn-sm">
                                  Send to Client
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="approvals">
                    <div className="mb-2 px-4">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="bg-light">
                            <tr>
                              <th>Factory No.</th>
                              <th>Request No.</th>
                              <th>Approvals</th>
                              <th>Approval Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>FN-78</td>
                              <td>2352</td>
                              <td>
                                <span className="badge badge-soft-warning">
                                  Pending
                                </span>
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td>FN-99</td>
                              <td>2635</td>
                              <td>
                                <span className="badge badge-soft-success">
                                  Done
                                </span>
                              </td>
                              <td>30/03/2023</td>
                            </tr>
                            <tr>
                              <td>FN-44</td>
                              <td>3562</td>
                              <td>
                                <span className="badge badge-soft-warning">
                                  Pending
                                </span>
                              </td>
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="customer-replies">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="card border border-primary">
                          <div className="card-body">
                            <div className="d-flex align-items-start mb-3">
                              <img
                                src="/assets/images/users/user-1.jpg"
                                className="me-2 rounded-circle"
                                height={42}
                                alt="Brandon Smith"
                              />
                              <div className="w-100">
                                <h5 className="mt-0 mb-0 font-15">
                                  <a
                                    href="contacts-profile.html"
                                    className="text-reset"
                                  >
                                    Geneva McKnight
                                  </a>
                                </h5>
                                <p className="mt-1 mb-0 text-muted font-14">
                                  <small className="mdi mdi-circle text-success" />{" "}
                                  Online
                                </p>
                              </div>
                            </div>
                            <h6 className="font-13 text-muted text-uppercase mb-2">
                              Chat History
                            </h6>
                            <div className="row">
                              <div className="col">
                                <div data-simplebar style={{ maxHeight: 555 }}>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-2.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Brandon Smith"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            4:30am
                                          </span>
                                          Brandon Smith
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-25 float-end text-end">
                                            <span className="badge badge-soft-danger">
                                              3
                                            </span>
                                          </span>
                                          <span className="w-75">
                                            How are you today?
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-5.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="James Z"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            5:30am
                                          </span>
                                          James Z
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">
                                            Hey! a reminder for tomorrow's
                                            meeting...
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-7.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Maria C"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Thu
                                          </span>
                                          Maria C
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-25 float-end text-end">
                                            <span className="badge badge-soft-danger">
                                              2
                                            </span>
                                          </span>
                                          <span className="w-75">
                                            Are we going to have this week's
                                            planning meeting today?
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start bg-light p-2">
                                      <img
                                        src="/assets/images/users/user-10.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Rhonda D"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Wed
                                          </span>
                                          Rhonda D
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">
                                            Please check these design assets...
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-3.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Michael H"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Tue
                                          </span>
                                          Michael H
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">
                                            Are you free for 15 min? I would
                                            like to discuss something...
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-6.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Thomas R"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Tue
                                          </span>
                                          Thomas R
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">
                                            Let's have meeting today between me,
                                            you and Tony...
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-8.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Thomas J"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Tue
                                          </span>
                                          Thomas J
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">Howdy?</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="text-body"
                                  >
                                    <div className="d-flex align-items-start p-2">
                                      <img
                                        src="/assets/images/users/user-4.jpg"
                                        className="me-2 rounded-circle"
                                        height={42}
                                        alt="Ricky J"
                                      />
                                      <div className="w-100">
                                        <h5 className="mt-0 mb-0 font-14">
                                          <span className="float-end text-muted fw-normal font-12">
                                            Mon
                                          </span>
                                          Ricky J
                                        </h5>
                                        <p className="mt-1 mb-0 text-muted font-14">
                                          <span className="w-75">
                                            Are you interested in learning?
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="card border border-primary">
                          <div className="card-body py-2 px-3 border-bottom border-light">
                            <div className="row justify-content-between py-1">
                              <div className="col-sm-7">
                                <div className="d-flex align-items-start">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    className="me-2 rounded-circle"
                                    height={36}
                                    alt="Brandon Smith"
                                  />
                                  <div>
                                    <h5 className="mt-0 mb-0 font-15">
                                      <a
                                        href="contacts-profile.html"
                                        className="text-reset"
                                      >
                                        James Zavel
                                      </a>
                                    </h5>
                                    <p className="mt-1 mb-0 text-muted font-12">
                                      <small className="mdi mdi-circle text-success" />{" "}
                                      Online
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div id="tooltips-container">
                                  <a
                                    href="javascript: void(0);"
                                    className="text-reset font-19 py-1 px-2 d-inline-block"
                                  >
                                    <i
                                      className="fe-trash-2"
                                      data-bs-container="#tooltips-container"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Delete Chat"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul
                              className="conversation-list"
                              data-simplebar
                              style={{ maxHeight: 460 }}
                            >
                              <li className="clearfix">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    className="rounded"
                                    alt="James Z"
                                  />
                                  <i>10:00</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>James Z</i>
                                    <p>Hello!</p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix odd">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-1.jpg"
                                    className="rounded"
                                    alt="Geneva M"
                                  />
                                  <i>10:01</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>Geneva M</i>
                                    <p>
                                      Hi, How are you? What about our next
                                      meeting?
                                    </p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    className="rounded"
                                    alt="James Z"
                                  />
                                  <i>10:01</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>James Z</i>
                                    <p>Yeah everything is fine</p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix odd">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-1.jpg"
                                    className="rounded"
                                    alt="Geneva M"
                                  />
                                  <i>10:02</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>Geneva M</i>
                                    <p>Wow that's great</p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    alt="James Z"
                                    className="rounded"
                                  />
                                  <i>10:02</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>James Z</i>
                                    <p>Let's have it today if you are free</p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix odd">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-1.jpg"
                                    alt="Geneva M"
                                    className="rounded"
                                  />
                                  <i>10:03</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>Geneva M</i>
                                    <p>
                                      Sure thing! let me know if 2pm works for
                                      you
                                    </p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    alt="James Z"
                                    className="rounded"
                                  />
                                  <i>10:04</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>James Z</i>
                                    <p>
                                      Sorry, I have another meeting scheduled at
                                      2pm. Can we have it at 3pm instead?
                                    </p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-5.jpg"
                                    alt="James Z"
                                    className="rounded"
                                  />
                                  <i>10:04</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>James Z</i>
                                    <p>
                                      We can also discuss about the presentation
                                      talk format if you have some extra mins
                                    </p>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="clearfix odd">
                                <div className="chat-avatar">
                                  <img
                                    src="/assets/images/users/user-1.jpg"
                                    alt="Geneva M"
                                    className="rounded"
                                  />
                                  <i>10:05</i>
                                </div>
                                <div className="conversation-text">
                                  <div className="ctext-wrap">
                                    <i>Geneva M</i>
                                    <p>
                                      3pm it is. Sure, let's discuss about
                                      presentation format, it would be great to
                                      finalize today. I am attaching the last
                                      year format and assets here...
                                    </p>
                                  </div>
                                  <div className="card mt-2 mb-1 shadow-none border text-start">
                                    <div className="p-2">
                                      <div className="row align-items-center">
                                        <div className="col-auto">
                                          <div className="avatar-sm">
                                            <span className="avatar-title bg-primary rounded">
                                              .ZIP
                                            </span>
                                          </div>
                                        </div>
                                        <div className="col ps-0">
                                          <a
                                            href="javascript:void(0);"
                                            className="text-muted fw-bold"
                                          >
                                            UBold-sketch.zip
                                          </a>
                                          <p className="mb-0">2.3 MB</p>
                                        </div>
                                        <div className="col-auto">
                                          {/* Button */}
                                          <a
                                            href="javascript:void(0);"
                                            className="btn btn-link btn-lg text-muted"
                                          >
                                            <i className="dripicons-download" />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="conversation-actions dropdown">
                                  <button
                                    className="btn btn-sm btn-link"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="mdi mdi-dots-vertical font-16" />
                                  </button>
                                  <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                      Copy Message
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col">
                                <div className="mt-2 bg-light p-3 rounded">
                                  <form
                                    className="needs-validation"
                                    noValidate
                                    name="chat-form"
                                    id="chat-form"
                                  >
                                    <div className="row">
                                      <div className="col mb-2 mb-sm-0">
                                        <input
                                          type="text"
                                          className="form-control border-0"
                                          placeholder="Enter your text"
                                          required
                                        />
                                        <div className="invalid-feedback">
                                          Please enter your messsage
                                        </div>
                                      </div>
                                      <div className="col-sm-auto">
                                        <div className="btn-group">
                                          <a href="#" className="btn btn-light">
                                            <i className="fe-paperclip" />
                                          </a>
                                          <button
                                            type="submit"
                                            className="btn btn-success chat-send w-100"
                                          >
                                            <i className="fe-send" />
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

export default ReturnRefundCenter;
