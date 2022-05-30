import React from "react";
import { NavLink } from 'react-router-dom';
// import signup from "../../../images/car_B/1.jpg";
import slider1 from "../../../images/slider_1.png";
import slider2 from "../../../images/slider_2.png";
import InventoryData from '../../../component/InventoryData';
import Navbar from "../../../component/Navbar";
import {MdFacebook} from "react-icons/md";
import {FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";


    const BrokesScreen = () => {

        return(
            <div className="container">
            <Navbar/>
            {/* carusal start here  */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={slider2} className="d-block w-100 img-fluid h-75" alt="slider_image"/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider1} className="d-block w-100 img-fluid h-100" alt="slider_image"/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider2} className="d-block w-100 img-fluid h-100" alt="slider_image"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            {/* carusal end here  */}
            <div className="populer">
                <h2>Popular Vehicles</h2>
                <div className="container mt-5">
                    <div className="row">

                    {
                        InventoryData.map((e) => {
                        const{id,image,location,name} = e;

                        return(
                            <div className="col-md-3" key={id}>
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="image"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{location}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                    </div>
                </div>
            </div>

            {/* <div className="jumbotron text-center">
                    <h1>Welcome My Homepage</h1>
                </div> */}
                {/* <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <br/>
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className="col-sm-2">
                    </div>
                </div>
             </div> */}
             <footer className="mx-auto mt-5">
                 <h3 className="text-center">Follow Us</h3>
                 <ul className="mx-auto d-flex flex-row justify-content-center align-items-center">
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <MdFacebook/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaTwitter/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaInstagram/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaLinkedin/>
                         <a href=""></a>
                     </li>
                 </ul>
             </footer>
           </div>
        )
    }


export default BrokesScreen;
