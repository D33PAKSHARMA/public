import React from 'react'
import Header from '../Header';


const RealTimeCustomers = () => {
  return (
    <div id="wrapper">
        <Header/>
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <h3 className="text-center text-primary">Realtime Online Customers</h3> 
                            <div className="card">
                                <div className="card-body">
                                    <ul className="nav nav-pills navtab-bg nav-justified">
                                        <li className="nav-item">
                                            <a href="#by-country" data-bs-toggle="tab" aria-expanded="true" className="nav-link active">
                                                By Country <br />&nbsp;
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#consumer-only" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                Consumers <br /> Only
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#business-only" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                Business <br /> Only
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#by-industry" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                By Industry <br />&nbsp;
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#by-products" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                By Products <br /> &nbsp;
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#home-page" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                Home Page<br /> &nbsp;
                                            </a>
                                        </li> 
                                        <li className="nav-item">
                                            <a href="#successful-companies" data-bs-toggle="tab" aria-expanded="false" className="nav-link">
                                                Top 1000+<br /> Successful Companies
                                            </a>
                                        </li> 
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane show active" id="by-country">
                                            <h4 className="text-primary">Total Business</h4>
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <div className="card" dir="ltr">
                                                        <div className="card-body">
                                                            <img src="/assets/images/donut.png" className="w-100" />
                                                            <table className="w-100">
                                                                <tr>
                                                                    <td>
                                                                        <p className="text-center"><i className="mdi mdi-checkbox-blank-circle text-success"></i> Product A <br /><strong className="text-dark">42%</strong></p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-center"><i className="mdi mdi-checkbox-blank-circle text-primary"></i> Product B <br /><strong className="text-dark">55%</strong></p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-center"><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Product C <br /><strong className="text-dark">26%</strong></p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div className="col-lg-7"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                            <p className="mb-2"><strong>Percentage of Growth of all</strong></p>
                                                            <h3>50.23%</h3>
                                                        </div>
                                                    </div>
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                            <p className="mb-2"><strong>Growth Rate of Companies Joining us on During</strong></p>
                                                            <h3><p className="text-primary">Weekly : 300</p></h3>
                                                            <h3><p className="text-primary">Monthly : 1,300</p></h3>
                                                            <h3><p className="text-primary">Yearly : 15,000</p></h3>
                                                        </div>
                                                    </div> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                            <p className="mb-2"><strong>Growth Rate of Thier Local market for becoming a more trustworthy international company</strong></p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="text-primary">Total Consumersv : 20,00,000</h4>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="table-responsive">
                                                        <table className="table w-100">
                                                            <thead className="bg-light">
                                                                <tr>
                                                                    <th>Gender</th>
                                                                    <th>Age</th>
                                                                    <th>Location(Country)</th>
                                                                    <th>Total Amount Shopped</th>
                                                                    <th>Sales 1 Week</th>
                                                                    <th>Sales 1 Month</th>
                                                                    <th>Sales 12 Months</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Male</td>
                                                                    <td>15 Age</td>
                                                                    <td>US</td>
                                                                    <td>5,000</td>
                                                                    <td>$1,00,000</td>
                                                                    <td>$2,00,000</td>
                                                                    <td>$9,00,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Female</td>
                                                                    <td>25 Age</td>
                                                                    <td>uk</td>
                                                                    <td>5,000</td>
                                                                    <td>$1,00,000</td>
                                                                    <td>$2,00,000</td>
                                                                    <td>$9,00,000</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Male</td>
                                                                    <td>35 Age</td>
                                                                    <td>UAE</td>
                                                                    <td>5,000</td>
                                                                    <td>$35,00,000</td>
                                                                    <td>$45,00,000</td>
                                                                    <td>$3,50,00,000</td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot className="bg-light">
                                                                <td colspan="2">
                                                                    <button className="btn btn-primary btn-sm">Company's Total Turnover</button>
                                                                </td>
                                                                <td colspan="3">
                                                                    Filter Date <input type="date"/> 
                                                                    to <input type="date"/>
                                                                </td>
                                                                <td colspan="2"><strong>Total Turnover : 56,00,00,000</strong></td>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div> 
                                        <div className="tab-pane" id="consumer-only">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body"> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="tab-pane" id="business-only">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="by-industry">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body"> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="by-products">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="home-page">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="successful-companies">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h4>Scheduled</h4>
                                                    <div className="card border"> 
                                                        <div className="card-body">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8"> 
                                                    <div className="card border"> 
                                                        <div className="card-body">
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
  )
}

export default RealTimeCustomers