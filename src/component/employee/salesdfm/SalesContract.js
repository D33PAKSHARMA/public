import React from 'react';
import { Link } from 'react-router-dom';

const SalesContract = () => {
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
                            <Link to="/sales-dfmp/new-client-signup"><i className="mdi mdi-arrow-left-circle-outline mdi-36px text-dark"></i></Link>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <h3 className="text-center mb-3">Sales Contract</h3>
                                        <div className="col-lg-10 mx-auto">
                                            <div className="row">
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Business Name</span>
                                                    <p className="border-bottom"><strong>Network India Pvt. Ltd.</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Phone No.</span>
                                                    <p className="border-bottom"><strong>+91 999 999 9999</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Email</span>
                                                    <p className="border-bottom"><strong>info@networkindia.com</strong></p>
                                                </div>
                                                <div className="col-lg-12 mb-2">
                                                    <span>Address</span>
                                                    <p className="border-bottom"><strong>Tower B, First Floor 51/2 Corenthum, Sector 62, Noida Uttar Pradesh 201301</strong></p>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Director Name</span>
                                                    <p className="border-bottom"><strong>Harish</strong></p>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Director Phone No.</span>
                                                    <p className="border-bottom"><strong>+61 555-455-555</strong></p>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <span>Director Email</span>
                                                    <p className="border-bottom"><strong>haarish@gmail.com</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Type of Establishment</span>
                                                    <p className="border-bottom"><strong>Wholesale Business</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Type of Products</span>
                                                    <p className="border-bottom"><strong>Newwork Router</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">No. of Employees</span>
                                                    <p className="border-bottom"><strong>600+</strong></p>
                                                </div>
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Existing Market</span>
                                                    <p className="border-bottom"><strong>Dubai</strong></p>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">How much did they sell last day</span>
                                                    <p className="border-bottom"><strong>$100000 - $500000</strong></p>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <span className="text-primary">Selected Country</span>
                                                    <p className="border-bottom"><strong>India</strong></p>
                                                </div>
                                                <div className="col-lg-12 mb-2 mt-2">
                                                    <h4>Additional Service Purchased</h4>
                                                </div> 
                                                <div className="col-lg-4 mb-2">
                                                    <p className="border-bottom"><strong>Radio Ads : </strong> $2950</p>
                                                </div>  
                                                <div className="col-lg-4 mb-2">
                                                    <p className="border-bottom"><strong>Grahpic Designer : </strong> $2950</p>
                                                </div>  
                                                <div className="col-lg-4 mb-2">
                                                    <p className="border-bottom"><strong>Yellow Pages : </strong> Free</p>
                                                </div> 
                                                <div className="col-lg-12 mb-3 border-bottom">
                                                    <h4>Total $3,700</h4>
                                                </div> 
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-11">
                                                    <h4>Terms and Conditions</h4>
                                                </div>
                                                <div className="col-lg-12 mx-auto mb-2">
                                                    <div className="accordion custom-accordion" id="custom-accordion-one">
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingOne">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        <span className="text-primary">Payment Terms</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseOne" className="collapse" aria-labelledby="headingFour" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Payment Terms Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTwo">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        <span className="text-primary">Shipping Australia</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Shipping Australia Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingThree">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        <span className="text-primary">Adding or Deducting a Service</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Adding or Deducting a Service Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingFour">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                        <span className="text-primary">Terms of our result guarantees</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Terms of our result guarantees Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingFive">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                        <span className="text-primary">Conflict of Members</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Conflict of Members Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingSix">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        <span className="text-primary">Vendors Risks</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseSix" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Vendors Risks Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingSeven">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        <span className="text-primary">Our Responsbilities towards your goods at our warehouse</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Our Responsbilities towards your goods at our warehouse Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingEight">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        <span className="text-primary">Legal, Accounting, Auto Liabilities</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseEight" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Legal, Accounting, Auto Liabilities Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingNine">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                                        <span className="text-primary">Ownership of this registered company</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseNine" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Ownership of this registered company Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTen">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                                        <span className="text-primary">Owner legal fights and responsibilities</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTen" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Owner legal fights and responsibilities Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingEleven">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                                        <span className="text-primary">Confidentiality</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseEleven" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Confidentiality Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTwoOne">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTwoOne" aria-expanded="false" aria-controls="collapseTwoOne">
                                                                        <span className="text-primary">General Terms & Conditions</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwoOne" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;General Terms & Conditions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTwoTwo">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
                                                                        <span className="text-primary">Force Majeure</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwoTwo" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Force Majeure Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTwoThree">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwoThree">
                                                                        <span className="text-primary">Brach of Contract</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwoThree" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Brach of Contract Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-2">
                                                            <div className="card-header" id="headingTwoFour">
                                                                <h5 className="m-0 position-relative">
                                                                    <a className="custom-accordion-title text-reset collapsed d-block" data-bs-toggle="collapse" href="#collapseTwoFour" aria-expanded="false" aria-controls="collapseTwoFour">
                                                                        <span className="text-primary">Ownership Corporation Commitments</span> <i className="mdi mdi-chevron-down accordion-arrow"></i>
                                                                    </a>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwoFour" className="collapse" aria-labelledby="headingFive" data-bs-parent="#custom-accordion-one">
                                                                <div className="card-body">
                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Ownership Corporation Commitments Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="card border">
                                                        <div className="card-body">
                                                            <br />
                                                            <br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <button className="btn btn-outline-primary w-100 mb-2 mt-2">Signature</button>
                                                    <button className="btn btn-primary mb-2 float-start">Sent</button>
                                                    <button className="btn btn-primary mb-2 float-end">Print</button>
                                                </div>
                                                <div className="col-lg-7 mx-auto">
                                                    <div className="form-check mb-2 form-check-primary">
                                                        <input className="form-check-input" type="checkbox" value="" id="customckeck1" checked="" />
                                                        <label className="form-check-label" for="customckeck1">&nbsp;&nbsp; I have read and agree to the portal <strong className="text-danger">Terms and Conditions</strong></label>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 mx-auto">
                                                    <Link to="/payment" className="btn btn-primary w-100">Proceed</Link>
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

export default SalesContract