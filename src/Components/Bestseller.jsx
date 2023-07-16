import React from 'react'
import "../Components/customStyle.css"

const Bestseller = () => {
  return (
    <>
      <section className="ftr__product__area ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">Best Seller</h2>
                            <p>But I must explain to you how all this mistaken idea</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product__wrap clearfix">
                        {/* <!-- Start Single Category --> */}
                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src="images/product/9.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="fr__hover__info">
                                    <ul className="product__action">
                                        <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>

                                        <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>

                                        <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                    </ul>
                                </div>
                                <div className="fr__product__inner">
                                    <h4><a href="product-details.html">Special Wood Basket</a></h4>
                                    <ul className="fr__pro__prize">
                                        <li className="old__prize">$30.3</li>
                                        <li>$25.9</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Category --> */}
                        {/* <!-- Start Single Category --> */}
                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src="images/product/10.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="fr__hover__info">
                                    <ul className="product__action">
                                        <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>

                                        <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>

                                        <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                    </ul>
                                </div>
                                <div className="fr__product__inner">
                                    <h4><a href="product-details.html">voluptatem accusantium</a></h4>
                                    <ul className="fr__pro__prize">
                                        <li className="old__prize">$30.3</li>
                                        <li>$25.9</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Category --> */}
                        {/* <!-- Start Single Category --> */}
                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src="images/product/11.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="fr__hover__info">
                                    <ul className="product__action">
                                        <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>

                                        <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>

                                        <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                    </ul>
                                </div>
                                <div className="fr__product__inner">
                                    <h4><a href="product-details.html">Product Dummy Name</a></h4>
                                    <ul className="fr__pro__prize">
                                        <li className="old__prize">$30.3</li>
                                        <li>$25.9</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Category --> */}
                        {/* <!-- Start Single Category --> */}
                        <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src="images/product/12.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="fr__hover__info">
                                    <ul className="product__action">
                                        <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>

                                        <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>

                                        <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                    </ul>
                                </div>
                                <div className="fr__product__inner">
                                    <h4><a href="product-details.html">Product Title Here </a></h4>
                                    <ul className="fr__pro__prize">
                                        <li className="old__prize">$30.3</li>
                                        <li>$25.9</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Category --> */}
                    </div>
                </div>
            </div>
        </section>
    
    
    </>
  )
}

export default Bestseller