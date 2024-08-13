import React from 'react'
import '../styles/index.css'

export default function Index({ count, handleCountPlus, handleCountMinus, addToCart }) {

    return (
        <>

        {/* Carousel Started Here */}

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride='carousel'>
            <div className="carousel-indicators d-none d-md-block">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/85c1f6035c9757aa.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5bd9c5c309353306.jpeg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8b4e46e572ce96b2.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c0e1e3aca8b3c9d.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04bb152bb2d3f429.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* Carousel Closed Here */}




        {/* Product Container Started Here */}

        <div className="container py-3 my-3">
            <div className="row">
                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://freepngimg.com/convert-png/17327-t-shirt-png-pic" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>T-Shirt (Yellow)</h5>
                        <h4 className='productPrice'><span>1,149₹</span> 499₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('tshirt')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.tshirt}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('tshirt')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('tshirt')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://5.imimg.com/data5/DS/YK/JS/SELLER-38785735/ladies-blue-faded-denim-jeans-500x500.jpg" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Jeans (Dark Blue)</h5>
                        <h4 className='productPrice'><span>2,609₹</span> 1299₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn myBtnn" onClick={() => handleCountMinus('jeans')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.jeans}</div>
                                <button className="btn myBtnn myBtnn" onClick={() => handleCountPlus('jeans')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('jeans')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Images.png" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Shirt (Blue)</h5>
                        <h4 className='productPrice'><span>1,749₹</span> 849₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('shirt')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.shirt}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('shirt')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('shirt')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://www.loparshop.se/media/catalog/product/cache/ed1b3c59211d8cf1c9523654e2efd698/9/0/904695-005-03.jpg" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Shoes (Gray)</h5>
                        <h4 className='productPrice'><span>4,750₹</span> 2679₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('shoes')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.shoes}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('shoes')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('shoes')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Product Container Closed Here */}



        {/* Carousel Started Here */}

        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride='carousel'>
            <div className="carousel-indicators d-none d-md-block">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/85c1f6035c9757aa.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5bd9c5c309353306.jpeg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8b4e46e572ce96b2.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c0e1e3aca8b3c9d.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04bb152bb2d3f429.jpg?q=20" className="d-block w-100" alt="..."/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> */}

        {/* Carousel Closed Here */}




         {/* Product Container Started Here */}

         <div className="container py-3 my-3">
            <div className="row">
                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://chriscross.in/cdn/shop/files/95_600x.jpg?v=1695712761" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>T-Shirt (Blue)</h5>
                        <h4 className='productPrice'><span>1,150₹</span> 349₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('tshirt2')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.tshirt2}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('tshirt2')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('tshirt2')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://www.sportique-ni.com/wp-content/uploads/2020/05/SCHOOL-TROUSERS-WEB.png" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>


                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Formal Pant</h5>
                        <h4 className='productPrice'><span>2,300₹</span> 1099₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn myBtnn" onClick={() => handleCountMinus('jeans2')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.jeans2}</div>
                                <button className="btn myBtnn myBtnn" onClick={() => handleCountPlus('jeans2')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('jeans2')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://m.media-amazon.com/images/I/61gY5aHwj3L.jpg" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>

                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Formal Shirt</h5>
                        <h4 className='productPrice'><span>2,450₹</span> 999₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('shirt2')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.shirt2}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('shirt2')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('shirt2')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 mainProductBox">
                    <img src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7483.png" alt="images" id="imgBox"/>

                    <button className='btn wishlistBtn' title='Add to Wishlist'>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    
                    <div className="productInfoBox">
                        <h5 className='productName mt-2'>Formal Shoes</h5>
                        <h4 className='productPrice'><span>4,999₹</span> 2379₹</h4>

                        <div className='btnBox'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className="btn myBtnn" onClick={() => handleCountMinus('shoes2')}><i className="fa-solid fa-minus"></i></button>
                                <div id="countBox">{count.shoes2}</div>
                                <button className="btn myBtnn" onClick={() => handleCountPlus('shoes2')}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <div className='cartBuyBtn'>
                                <button className='btn btn-dark' onClick={() => addToCart('shoes2')}>Add to Cart</button>
                                <button className='btn btn-warning mx-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Product Container Closed Here */}

        </>
    )
}