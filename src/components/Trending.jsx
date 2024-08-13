import React from 'react'
import '../styles/login.css'

export default function Trending( { count, handleCountPlus, handleCountMinus, addToCart }) {

    return (
        <>
            <div className="container py-3">

                <h1 className='mt-2 mb-4 text-white'>Here is the most TRENDING products for you</h1>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 mainProductBox">
                        <img src="https://innergo.store/pol_pl_iPhone-15-Plus-512GB-Black-35572_1.webp" alt="images" id="imgBox" />

                        <button className='btn wishlistBtn' title='Add to Wishlist'>
                            <i className="fa-solid fa-heart"></i>
                        </button>

                        <div className="productInfoBox">
                            <h5 className='productName mt-2'>iPhone 15 (Black, 256GB)</h5>
                            <h4 className='productPrice'><span>89,600₹</span> 79,999₹</h4>

                            <div className='btnBox'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn myBtnn" onClick={() => handleCountMinus('iPhone')}><i className="fa-solid fa-minus"></i></button>
                                    <div id="countBox">{count.iPhone}</div>
                                    <button className="btn myBtnn" onClick={() => handleCountPlus('iPhone')}><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <div className='cartBuyBtn'>
                                    <button className='btn btn-dark' onClick={() => addToCart('iPhone')}>Add to Cart</button>
                                    <button className='btn btn-warning mx-2'>Buy Now</button>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 mainProductBox">
                        <img src="https://images-cdn.ubuy.co.in/6526ca61df04d2785c4ecfda-lenovo-ideapad-3i-14-laptop-intel-core.jpg" alt="images" id="imgBox" />

                        <button className='btn wishlistBtn' title='Add to Wishlist'>
                            <i className="fa-solid fa-heart"></i>
                        </button>

                        <div className="productInfoBox">
                            <h5 className='productName mt-2'>Lenovo IdeaPad 3i 14 Laptop</h5>
                            <h4 className='productPrice'><span>75,390₹</span> 39,884₹</h4>

                            <div className='btnBox'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn myBtnn myBtnn" onClick={() => handleCountMinus('laptop')}><i className="fa-solid fa-minus"></i></button>
                                    <div id="countBox">{count.laptop}</div>
                                    <button className="btn myBtnn myBtnn" onClick={() => handleCountPlus('laptop')}><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <div className='cartBuyBtn'>
                                    <button className='btn btn-dark' onClick={() => addToCart('laptop')}>Add to Cart</button>
                                    <button className='btn btn-warning mx-2'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 mainProductBox">
                        <img src="https://www.arcadiolifestyle.com/cdn/shop/products/ROVER-Premium-Sunglass-AR-PL344-ARCADIO-842.jpg?v=1696035502" alt="images" id="imgBox" />

                        <button className='btn wishlistBtn' title='Add to Wishlist'>
                            <i className="fa-solid fa-heart"></i>
                        </button>

                        <div className="productInfoBox">
                            <h5 className='productName mt-2'>ROVER Premium Sunglass</h5>
                            <h4 className='productPrice'><span>1,399₹</span> 329₹</h4>

                            <div className='btnBox'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn myBtnn" onClick={() => handleCountMinus('sunglass')}><i className="fa-solid fa-minus"></i></button>
                                    <div id="countBox">{count.sunglass}</div>
                                    <button className="btn myBtnn" onClick={() => handleCountPlus('sunglass')}><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <div className='cartBuyBtn'>
                                    <button className='btn btn-dark' onClick={() => addToCart('sunglass')}>Add to Cart</button>
                                    <button className='btn btn-warning mx-2'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 mainProductBox">
                        <img src="https://static-01.daraz.com.bd/p/29e5405036e625cc6611c1bb802fe916.jpg_750x400.jpg_.webp" alt="images" id="imgBox" />

                        <button className='btn wishlistBtn' title='Add to Wishlist'>
                            <i className="fa-solid fa-heart"></i>
                        </button>

                        <div className="productInfoBox">
                            <h5 className='productName mt-2'>Ladies Leather Handbag</h5>
                            <h4 className='productPrice'><span>3,999₹</span> 1049₹</h4>

                            <div className='btnBox'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn myBtnn" onClick={() => handleCountMinus('handBag')}><i className="fa-solid fa-minus"></i></button>
                                    <div id="countBox">{count.handBag}</div>
                                    <button className="btn myBtnn" onClick={() => handleCountPlus('handBag')}><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <div className='cartBuyBtn'>
                                    <button className='btn btn-dark' onClick={() => addToCart('handBag')}>Add to Cart</button>
                                    <button className='btn btn-warning mx-2'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
