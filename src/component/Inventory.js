import React from 'react';
// import Car_A from "../images/car_A/1.jpg";
import InventoryData from './InventoryData';
import Navbar from './Navbar';

const Inventory = () => {
  return (
    <section>
        <Navbar/>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Categories A</a></li>
                            <li><a className="dropdown-item" >Categories B</a></li>
                            {/* <li><hr className="dropdown-divider"/></li> */}
                            <li><a className="dropdown-item" >Categories C</a></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Model
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Model A</a></li>
                            <li><a className="dropdown-item" >Model B</a></li>
                            <li><a className="dropdown-item" >Model C</a></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Year
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >2000</a></li>
                            <li><a className="dropdown-item" >2001</a></li>
                            <li><a className="dropdown-item" >2002</a></li>
                            <li><a className="dropdown-item" >2003</a></li>
                            <li><a className="dropdown-item" >2004</a></li>
                            <li><a className="dropdown-item" >2005</a></li>
                            <li><a className="dropdown-item" >2006</a></li>
                            <li><a className="dropdown-item" >2007</a></li>
                        </ul>
                        </li>
                    </ul>

                    </div>
                </div>
                </nav>
            </header>
            <main>
                <div className="container mt-5">
                    <div className="row">

                    {
                        InventoryData.map((e, index) => {
                        const{id,image,location,name} = e;

                        return(
                            <div className="col-md-3 mb-3" key={index}>
                                <div className="card">
                                    <img src={image} className="card-img-top" alt="image"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{location}</p>
                                        <a  className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                    </div>
                </div>
            </main>
    </section>
  )
}

export default Inventory;