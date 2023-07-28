import React from 'react'
import Header from '../Header';

const ClientInfoPack = () => {
  return (
    <div id="wrapper">
        <Header />
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h3 className="text-primary">Client Infor Pack</h3>
                            <div className="card p-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-6 mb-2">
                                                    <h4 className="text-end">Potential of Business in</h4>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select"> 
                                                        <option>Select Country</option>
                                                        <option>Australia</option>
                                                        <option>China</option>
                                                        <option>Vietnam</option>
                                                        <option>Dubai</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 mb-2">
                                                    <input type="text" className="form-control" placeholder="Company Name.." />
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
                                                <div className="col-lg-12 mb-2"> 
                                                    <select className="form-select">
                                                        <option>Desired country to Establish</option>
                                                        <option>Australia</option>
                                                        <option>China</option>
                                                        <option>Vietnam</option>
                                                        <option>Dubai</option>
                                                        <option>India</option>
                                                    </select> 
                                                </div>
                                                <div className="col-lg-6 mb-2"> 
                                                    <select className="form-select">
                                                        <option>Select Country</option>
                                                        <option>Australia</option>
                                                        <option>China</option>
                                                        <option>Vietnam</option>
                                                        <option>Dubai</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Total Population.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Market Demand.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Major Competitors.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Competitors rough turnover.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Price per item retail.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <input type="text" className="form-control" placeholder="Price per item wholesale.." />
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <select className="form-select">
                                                        <option>Select Country</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 mb-2">
                                                    <input type="text" className="form-control" placeholder="Our advantage over competitors.." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12 mb-2">
                                                    <h4 className="text-center">Cost of Establishment if act individually for the same setup</h4>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <div className="table-responsive">
                                                        <table className="table w-100">
                                                            <thead className="bg-light">
                                                                <tr>
                                                                    <th>Services</th>
                                                                    <th>Regular Cost</th>
                                                                    <th>Your Cost with Us</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Ware House/Office</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ware House/Office fit out</td>
                                                                    <td>$15,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Show room fit out</td>
                                                                    <td>$15,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sales Rep</td>
                                                                    <td>$7,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Receptionis</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ware house workers</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Phone line</td>
                                                                    <td>$65</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Internet</td>
                                                                    <td>$110</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot className="bg-light">
                                                                <tr>
                                                                    <th></th>
                                                                    <th>48,805</th>
                                                                    <th>0</th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb-2">
                                                    <div className="table-responsive">
                                                        <table className="table w-100">
                                                            <thead className="bg-light">
                                                                <tr>
                                                                    <th>Services</th>
                                                                    <th>Regular Cost</th>
                                                                    <th>Your Cost with Us</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Ware House/Office</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ware House/Office fit out</td>
                                                                    <td>$15,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Show room fit out</td>
                                                                    <td>$15,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sales Rep</td>
                                                                    <td>$7,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Receptionis</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ware house workers</td>
                                                                    <td>$5,000</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Phone line</td>
                                                                    <td>$65</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Internet</td>
                                                                    <td>$110</td>
                                                                    <td>$0</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot className="bg-light">
                                                                <tr>
                                                                    <th></th>
                                                                    <th>48,805</th>
                                                                    <th>0</th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-12 mb-2">
                                                    <h4 className="text-center">Initial Investment : $56,000</h4>
                                                    <h4 className="text-center">Monthly Ongoing cost : $52,000</h4>
                                                    <div className="form-check mb-2 form-check-primary d-flex align-items-center justify-content-center">
                                                        <input className="form-check-input" type="checkbox" value="" id="customckeck1" checked="" />
                                                        <label className="form-check-label" for="customckeck1">&nbsp;&nbsp; I have read and agree to the portal <strong className="text-danger">Terms and Conditions</strong></label>
                                                    </div> 
                                                </div>
                                                <div className="col-lg-3 text-center mb-2 mx-auto">
                                                    <button className="btn btn-primary w-100">Submit</button>
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

export default ClientInfoPack