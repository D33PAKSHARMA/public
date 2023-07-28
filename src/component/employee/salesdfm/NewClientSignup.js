import React from 'react'
import { Link } from 'react-router-dom';

const NewClientSignup = () => {
    const contentPage = {
        padding : "0px 15px 65px 15px", 
        marginTop: "10px"
    };
  return (
    <div id="wrapper">
        <div className="content-page" style={contentPage}>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <Link to="/sales-dfmp"><i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark"></i></Link>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <h3 className="text-center mb-3">New Client Signup</h3>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12 mb-2">
                                                    <input type="text" className="form-control" placeholder="Business Name.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Phone No.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Email.." />
                                                </div>
                                                <div className="col-lg-12 mb-2">
                                                    <input type="text" className="form-control" placeholder="Address.." />
                                                </div>
                                                <div className="col-lg-12 mb-2">
                                                    <input type="text" className="form-control" placeholder="Director Name.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Phone No.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Email.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select">
                                                        <option>Type of Establishment</option>
                                                        <option>Factory</option>
                                                        <option>Trade Office</option>
                                                        <option>Retail Business</option>
                                                        <option>Wholesale Business</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select">
                                                        <option>Type of Products</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-2"> 
                                                    <input type="text" className="form-control" placeholder="No of Employees.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select">
                                                        <option>Existing Market</option>
                                                        <option>Australia</option>
                                                        <option>China</option>
                                                        <option>Vietnam</option>
                                                        <option>Dubai</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="How much did they sell last year?.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select">
                                                        <option>Selling Country</option>
                                                        <option>Australia</option>
                                                        <option>China</option>
                                                        <option>Vietnam</option>
                                                        <option>Dubai</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="file" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                    <h4>Choose Services</h4>
                                                </div>
                                                <div className="col-lg-11 mx-auto mb-2">
                                                    <div className="row">
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">SEO Export <i className="mdi mdi-progress-question text-danger" title="SEO Export : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Graphic Designer <i className="mdi mdi-progress-question text-danger" title="Graphic Designer : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">B2B Sales Rep <i className="mdi mdi-progress-question text-danger" title="B2B Sales Rep : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Radio Ads <i className="mdi mdi-progress-question text-danger" title="Radio Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Local Online Sales Rep  <i className="mdi mdi-progress-question text-danger" title="Local Online Sales Rep : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Petrol Station Ads  <i className="mdi mdi-progress-question text-danger" title="Petrol Station Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Tik Tok Ads  <i className="mdi mdi-progress-question text-danger" title="Tik Tok Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Shopping Mall Bill Board Ads  <i className="mdi mdi-progress-question text-danger" title="Shopping Mall Bill Board Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Facebook Ads  <i className="mdi mdi-progress-question text-danger" title="Facebook Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Website  <i className="mdi mdi-progress-question text-danger" title="Website : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">SMS to all Contacts  <i className="mdi mdi-progress-question text-danger" title="SMS to all Contacts : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Google Pay Ads  <i className="mdi mdi-progress-question text-danger" title="Google Pay Ads : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Our Magazine  <i className="mdi mdi-progress-question text-danger" title="Our Magazine : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Social Media Expert  <i className="mdi mdi-progress-question text-danger" title="Social Media Expert : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Truck Bill Board  <i className="mdi mdi-progress-question text-danger" title="Truck Bill Board : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Yellow Pages  <i className="mdi mdi-progress-question text-danger" title="Yellow Pages : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Our Database Mail Out  <i className="mdi mdi-progress-question text-danger" title="Our Database Mail Out : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Call out To  <i className="mdi mdi-progress-question text-danger" title="Call out To : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Repair Tech  <i className="mdi mdi-progress-question text-danger" title="Repair Tech : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Highway Billboards  <i className="mdi mdi-progress-question text-danger" title="Highway Billboards : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                        <div className="col-lg-4 text-end px-3 mb-0">
                                                            <label className="form-label">Live Chat Tech/Support  <i className="mdi mdi-progress-question text-danger" title="Live Chat Tech/Support : $300"></i></label>
                                                            <input className="form-check-input mx-1" type="checkbox" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 mx-auto">
                                                    <Link to="/sales-dfmp/new-client-signup/sales-contract" className="btn btn-primary w-100" id="myButton">Next</Link>
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
  )
}

export default NewClientSignup