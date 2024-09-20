import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './footer';
import Categories from './categories';



function Home() {
    const navigate = useNavigate();

    return (

        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>

            <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="index.css"></link>
            <section >
                <div className="main-navbar shadow-sm sticky-top ">
                    <div className="top-navbar">
                        <div className="container-fluid">
                            <div className=" d-flex justify-content-around ">

                                <div className="col-md-3 my-auto d-none d-sm-none d-md-block d-lg-block col-lg-4 ">

                                    <div class="input-group">
                                        <input type="search" placeholder="Search your product" class="form-control" />
                                        <button class="btn bg-light" type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>

                                </div>
                                <div className="col-md-6 my-auto d-md-block col-lg-2 col-9 ">
                                    <a href='./'><div className='d-flex justify-content-center'><img className='logo' src='./images/pepperfry-logo.png' ></img></div></a>
                                </div>
                                <div className='col-md-3 d-flex justify-content-center  col-3  col-lg-4'>
                                    <nav className="navbar navbar-expand-lg   ">
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class=" collapse navbar-collapse  my-auto col-lg-4 " id="navbarSupportedConten">
                                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                                <li class="nav-item active">
                                                    <button class="nav-link" onClick={() => { navigate('./productcart') }}>
                                                        <i class="fa fa-shopping-cart"></i> Cart
                                                    </button>
                                                </li>
                                                <li class="nav-item">
                                                    <button class="nav-link" onClick={() => { navigate('./wishlist') }}>
                                                        <i class="fa fa-heart"></i> Wishlist
                                                    </button>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="/signin" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-user"></i>  Sign in
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a></li>

                                                        <li><a class="dropdown-item" href="#"><i class="fa fa-list"></i> My Orders</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa fa-heart"></i> My Wishlist</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa fa-shopping-cart"></i> My Cart</a></li>
                                                        <li><a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href='/'>Home</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">All Categories</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Beds</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Sofas</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Dinning Sets</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Study Tables</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Center Tables</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#">Mattresses</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-center  '>
                        <nav className="navbar navbar-expand-lg navbar-expand-md">
                            <div className="container-fluid ">
                                <div class="d-block d-sm-block d-md-none d-lg-none col-12 col-sm-12 ">
                                    <div class="input-group ">
                                        <input type="search" placeholder="Search your product" class="form-control" />
                                        <button class="btn bg-light" type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div class="collapse navbar-collapse " id="navbarSupportedConten ">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href='/'>Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/" >All Categories</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Beds</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Sofas</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Dinning Sets</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Study Tables</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Center Tables</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Mattresses</a>
                                            </li>

                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


            </section>
            <Outlet />
            <Footer />
        </>
    )
}

export default Home;

