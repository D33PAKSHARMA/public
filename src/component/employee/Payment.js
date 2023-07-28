import React from 'react'
import { Link } from 'react-router-dom';
const Payment = () => {
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
                        <div className="col-lg-5 mx-auto">
                            <Link to="/department"><i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark"></i></Link>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row px-2">
                                        <h3 className="text-center text-primary">Payment Methods</h3>
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12 mb-1">
                                                    <h4 className="text-primary">Contact Info.</h4>
                                                    <input type="text" className="form-control" placeholder="Enter Email.." />
                                                </div>
                                                <div className="col-lg-12 mb-1">
                                                    <h4 className="text-primary">Billing Info.</h4>
                                                    <input type="text" className="form-control mb-1" placeholder="Enter Name.." />
                                                    <select className="form-select mb-1">
                                                        <option>Select Country</option>
                                                    </select>
                                                    <input type="text" className="form-control mb-1" placeholder="Address.." />
                                                </div> 
                                                <div className="col-lg-12 mb-1">
                                                    <h4 className="text-primary">Card Details</h4>
                                                    <div className="row">
                                                        <div className="col-lg-12 mb-2">
                                                            <input type="text" className="form-control" placeholder="Name on Card.." />
                                                        </div>
                                                        <div className="col-lg-12 mb-2">
                                                            <input type="text" className="form-control" placeholder="Card Number.." />
                                                        </div>
                                                        <div className="col-lg-6 mb-2">
                                                            <input type="text" className="form-control" placeholder="Expiry Date.." />
                                                        </div>
                                                        <div className="col-lg-6 mb-2">
                                                            <input type="text" className="form-control" placeholder="CVV.." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-11 mx-auto">
                                                    <div className="form-check mb-2 form-check-primary">
                                                        <input className="form-check-input" type="checkbox" value="" id="customckeck1" checked="" />
                                                        <label className="form-check-label" for="customckeck1">I have read and agree to the portal <strong className="text-danger">Terms and Conditions</strong></label>
                                                    </div> 
                                                    <p>By providing your card information you allow name shop to change your card for future payments in accordance with their terms</p>
                                                </div> 
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 mx-auto">
                                                    <Link className="btn btn-primary w-100" to="/sales-dfmp/new-client-signup">Payments</Link>
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

export default Payment