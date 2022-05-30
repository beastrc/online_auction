import React from 'react';
import Navbar from './Navbar';
import image from "../images/Signup.png"

const SellVehicle = () => {
  return (
    <section>
        <div className="container">
            <Navbar/>
            <div className="row mt-5 pt-5">
                <div className="col-md-6 mt-5">
                    <h1>Sell your Used Car Fast, Safe & Easy</h1>
                    <h3 className='mt-3'>Call <span className='text-primary'>(888) 540-7110</span></h3>
                    <button className='btn btn-primary rounded mt-3'>Get Online Offer</button>
                </div>
                <div className="col-md-6">
                    <img src={image} alt="auction_image" className='img-fluid'/>
                </div>
            </div>
            <div className="sell_car mt-5 pt-5">
                <div className="sell_car_head text-center">
                    <h2 className='fw-bold'>Sell Your Car in Three Easy Steps</h2>
                    <p>Selling your used, unwanted or total loss vehicle has never been faster, easier, and safer. With competitive pricing for vehicles based on the latest market trends, we’ll buy your car with fair pricing and free towing. Getting cash for cars in Canada has never been easier.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 text-center">
                        <div className="stp1">
                            <h2 className='fw-bold'>1</h2>
                            <h3 className='fw-bold'>Get an Offer</h3>
                            <p>Call (888) 540-7110 or fill out the Get An Offer form</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="stp2">
                            <h2 className='fw-bold'>2</h2>
                            <h3 className='fw-bold'>Schedule Pickup</h3>
                            <p>Accept our offer, and we’ll schedule a convenient pickup time.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="stp3">
                            <h2 className='fw-bold'>3</h2>
                            <h3 className='fw-bold'>Get Paid</h3>
                            <p>We pick up your vehicle and give you payment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="get_an_offer mt-5 pt-5">
                <h2 className='fw-bold text-center '>Get an Offer</h2>
                <form action="" className='mt-5 rounded shadow p-lg-5'>
                    <h3 className='mb-3'>Tell Us About your Vehicle</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Year</option>
                                <option value="1">2000</option>
                                <option value="2">2001</option>
                                <option value="3">2002</option>
                                <option value="4">2003</option>
                                <option value="5">2004</option>
                                <option value="6">2005</option>
                                <option value="7">2006</option>
                                <option value="8">2007</option>
                                <option value="9">2008</option>
                                <option value="10">2009</option>
                                <option value="11">2010</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Make</option>
                                <option value="1">ABC</option>
                                <option value="2">ABCD</option>
                                <option value="3">ABC</option>
                                <option value="4">ABC</option>
                                <option value="5">ABC</option>
                                <option value="6">ABC</option>
                                <option value="7">ABC</option>
                                <option value="8">ABC</option>
                                <option value="9">ABC</option>
                                <option value="10">ABC</option>
                                <option value="11">ABC</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>All Models</option>
                                <option value="1">2000</option>
                                <option value="2">2001</option>
                                <option value="3">2002</option>
                                <option value="3">2003</option>
                                <option value="3">2004</option>
                                <option value="3">2005</option>
                                <option value="3">2006</option>
                                <option value="3">2007</option>
                                <option value="3">2008</option>
                                <option value="3">2009</option>
                                <option value="3">2010</option>
                            </select>
                        </div>
                    </div>
                    <h3 className='mt-4 mb-3'>Tell Us About Yourself</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder='Name' className='w-100 mb-3 p-2' />
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder='Phone' className='w-100 mb-3 p-2'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="email" placeholder='Email' className='w-100 mb-3 p-2' />
                        </div>
                        <div className="col-md-6">
                            <input type="number" placeholder='Postal Code' className='w-100 mb-3 p-2'/>
                        </div>
                    </div>
                    <button className='btn btn-primary mx-auto'>Get Your Free Quote</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SellVehicle