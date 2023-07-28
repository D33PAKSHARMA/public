import React from 'react';
import { Link } from 'react-router-dom';
const SalesDFMP = () => {
  return (
    <div className="account-pages mt-3 mb-2">
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-4 mb-2">
                    <Link to="/department">
                        <i className="mdi mdi-arrow-left-circle-outline text-primary mdi-24px"></i>
                        <img src="/assets/images/dark-logo.png" alt="" height="70" className="mb-1" />
                    </Link>
                </div> 
                <div className="col-md-8">
                    <h2 className="text-primary float-end">Sales DFM</h2>
                </div> 
            </div>
            <div className="row">
                <div className="col-md-1 mb-3"></div>
                <div className="col-md-2 mb-3">
                    <Link to="client-search">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/group.png" width="75px" className="mb-0" />
                                <h5 className="text-white">Client Search<br />&nbsp;</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/new-client-signup">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/people.png" width="75px" className="mb-0" />
                                <h5 className="text-white">New Client<br />Signup</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/performance-record">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/bars.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Performance <br />Record</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/client-info-pack">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/calendar.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Client Info<br />Pack</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/leads">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                &nbsp;&nbsp;&nbsp;<img src="/assets/images/sub-dept/conversion-rate.png" width="75px" className="mb-0" />
                                <h5 className="text-white">Leads<br />&nbsp;</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1 mb-3"></div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/message-center">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/chat.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Message Center<br />&nbsp;</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/meetings">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/video-call.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Meetings<br />&nbsp;</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/real-time-customers">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/technical-support.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Real Time<br />Online Customers</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-2 mb-3">
                    <Link to="/sales-dfmp/media-library">
                        <div className="card bg-primary border-white">
                            <div className="card-body text-center">
                                <img src="/assets/images/sub-dept/gallery.png" width="70px" className="mb-0" />
                                <h5 className="text-white">Media Library<br />&nbsp;</h5>
                            </div>
                        </div>
                    </Link>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default SalesDFMP