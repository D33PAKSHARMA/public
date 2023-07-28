import React from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';

const ClientSearch = () => {
  return (
    <div id="wrapper">
      <Header />
      <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-lg-12 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-9 mb-2">
                                            <h4>Clients</h4>
                                        </div>
                                        <div className="col-lg-3 text-end mb-2">
                                            <form>
                                                <input type="search" className="form-control rounded-pill" placeholder="Search..." id="top-search" />
                                            </form>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="table-responsive">
                                                <table id="basic-datatable_wrapper" className="table dt-responsive nowrap w-100 dataTable dtr-inline">
                                                    <thead>
                                                        <tr className="bg-light">
                                                            <th>Client ID</th>
                                                            <th>Client Business Name</th>
                                                            <th>Date of Engagement</th>
                                                            <th>Industry</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>FN-02</td>
                                                            <td>GameDay Catering</td>
                                                            <td>04/02/2023</td>
                                                            <td>Gameday Catering</td>
                                                            <td width="180px"> 
                                                                <Link to="/sales-dfmp/client-search/client-business-details" className="btn btn-primary btn-sm">
                                                                    View
                                                                </Link> 
                                                                &nbsp;
                                                                <Link to="" className="btn btn-primary btn-sm btn-sm">
                                                                    Print
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <button className="btn btn-primary btn-sm">Total No of Clients: 1</button>
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

export default ClientSearch