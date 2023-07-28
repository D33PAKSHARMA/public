import React from 'react'
import Header from '../Header'

const OfficeSetupMedia = () => {
  return (
    <div id="wrapper"> 
        <Header/>
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="card">
                                <div className="card-body"> 
                                    <div className="row mb-2">
                                        <div className="col-lg-6">
                                            <h3 className="text-start text-primary">Office Setup</h3>
                                        </div>
                                        <div className="col-lg-3">
                                            <form>
                                                <input type="search" className="form-control rounded-pill" placeholder="Search..." id="top-search" />
                                            </form>
                                        </div>
                                        <div className="col-lg-3 float-end">
                                            <button className="btn btn-outline-primary btn-sm"><i className="mdi mdi-trash-can-outline"></i></button>&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-primary btn-sm"><i className="mdi mdi-view-list-outline"></i></button>
                                            <button className="btn btn-outline-primary btn-sm"><i className="mdi mdi-view-grid-outline"></i></button>&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary btn-sm">Upload Image</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-1</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-2</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-3</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-4</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-5</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-6</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-7</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <img src="/assets/images/media.png" className="w-100" />
                                            <p>Video Setup-8</p>
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

export default OfficeSetupMedia