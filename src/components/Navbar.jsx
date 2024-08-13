import React from 'react';
import '../styles/index.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isChecked, setIsChecked, cartTotal }) {
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsChecked(!isChecked);
        navigate(!isChecked ? "/Trending" : "/ecommerce");
    };

    return (
        <>
            {/* Navbar Started Here */}
            <nav className="navbar navbar-expand-lg py-1">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/ecommerce"><b>Shopping Mall.</b></Link>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/ecommerce">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#mobiles" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mobiles
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="e">Apple</a></li>
                                    <li><a className="dropdown-item" href="e">Samsung</a></li>
                                    <li><a className="dropdown-item" href="e">Google</a></li>
                                    <li><a className="dropdown-item" href="e">Nokia</a></li>
                                    <li><a className="dropdown-item" href="e">Motorola</a></li>
                                    <li><a className="dropdown-item" href="e">Lava</a></li>
                                    <li><a className="dropdown-item" href="e">One Plus</a></li>
                                    <li><a className="dropdown-item" href="e">Oppo</a></li>
                                    <li><a className="dropdown-item" href="e">Vivo</a></li>
                                    <li><a className="dropdown-item" href="e">Realme</a></li>
                                    <li><a className="dropdown-item" href="e">Redmi</a></li>
                                    <li><a className="dropdown-item" href="e">Honor</a></li>
                                    <li><a className="dropdown-item" href="e">Infinix</a></li>
                                    <li><a className="dropdown-item" href="e">Poco</a></li>
                                    <li><a className="dropdown-item" href="e">IQOO</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#electronics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Electronics
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="e">Air Conditioners</a></li>
                                    <li><a className="dropdown-item" href="e">Washing Machine</a></li>
                                    <li><a className="dropdown-item" href="e">Refrigerator</a></li>
                                    <li><a className="dropdown-item" href="e">TV</a></li>
                                    <li><a className="dropdown-item" href="e">Laptop</a></li>
                                    <li><a className="dropdown-item" href="e">Mobile</a></li>
                                    <li><a className="dropdown-item" href="e">Tablets</a></li>
                                    <li><a className="dropdown-item" href="e">Mixture Grinder</a></li>
                                    <li><a className="dropdown-item" href="e">Juice Grinder</a></li>
                                    <li><a className="dropdown-item" href="e">Microwave Oven</a></li>
                                    <li><a className="dropdown-item" href="e">Oven Toaster Grills</a></li>
                                    <li><a className="dropdown-item" href="e">Water Purifiers</a></li>
                                    <li><a className="dropdown-item" href="e">Trimmer</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#cloths" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cloths
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle dropMenuHeader ps-2" href="#menWear" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Men Wear
                                        </a>
                                        <ul className="dropdown-menu m-2">
                                            <li><a className="dropdown-item" href="e">Shirt Men</a></li>
                                            <li><a className="dropdown-item" href="e">T-Shirt Men</a></li>
                                            <li><a className="dropdown-item" href="e">Pants Men</a></li>
                                            <li><a className="dropdown-item" href="e">Jeans Men</a></li>
                                            <li><a className="dropdown-item" href="e">Shoes Men</a></li>
                                            <li><a className="dropdown-item" href="e">Flip-Flops Men</a></li>
                                            <li><a className="dropdown-item" href="e">Perfumes Men</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle dropMenuHeader ps-2" href="#womenWear" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Women Wear
                                        </a>
                                        <ul className="dropdown-menu m-2">
                                            <li><a className="dropdown-item" href="e">Shirt Women</a></li>
                                            <li><a className="dropdown-item" href="e">T-Shirt Women</a></li>
                                            <li><a className="dropdown-item" href="e">Pants Women</a></li>
                                            <li><a className="dropdown-item" href="e">Jeans Women</a></li>
                                            <li><a className="dropdown-item" href="e">Shoes Women</a></li>
                                            <li><a className="dropdown-item" href="e">Flip-Flops Women</a></li>
                                            <li><a className="dropdown-item" href="e">Perfumes Women</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle dropMenuHeader ps-2" href="#kidsWear" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Kids Wear
                                        </a>
                                        <ul className="dropdown-menu m-2">
                                            <li><a className="dropdown-item" href="e">Shirt Kids</a></li>
                                            <li><a className="dropdown-item" href="e">T-Shirt Kids</a></li>
                                            <li><a className="dropdown-item" href="e">Pants Kids</a></li>
                                            <li><a className="dropdown-item" href="e">Jeans Kids</a></li>
                                            <li><a className="dropdown-item" href="e">Shoes Kids</a></li>
                                            <li><a className="dropdown-item" href="e">Flip-Flops Kids</a></li>
                                            <li><a className="dropdown-item" href="e">Perfumes Kids</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/profile'>Your Profile</Link>
                            </li>
                        </ul>

                        <div className="form-check form-switch d-flex align-items-center ms-3 me-xl-3">
                            <input className="form-check-input h4 me-2 border border-2 border-dark bg-secondary" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isChecked} onChange={handleToggle} />
                            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Trending Products</label>
                        </div>

                        <form className="d-flex d-xl-flex d-lg-none" role="search">
                            <input className="form-control" type="search" placeholder="Search your product" aria-label="Search" style={{ borderRadius: '5px 0 0 5px', borderRight: 'none' }} />
                            <button className="btn btn-dark" type="submit" style={{ borderRadius: '0 5px 5px 0', borderLeft: 'none' }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>

                        <form className='d-flex mt-lg-0 mt-2'>
                            <div className="btn btn-outline-dark mx-3 border-0 px-2 py-1" style={{ fontSize: '25px' }}>
                                <i className="fa-solid fa-cart-shopping text-white"></i>
                                {cartTotal > 0 && <span className="badge bg-danger translate-middle">{cartTotal}</span>}
                            </div>

                            <Link className="btn btn-secondary text-white" to='/Login'>Login</Link>
                        </form>
                    </div>
                </div>
            </nav>
            {/* Navbar Ended Here */}
        </>
    );
}
