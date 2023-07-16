import React from 'react'
import "../Components/customStyle.css"
import SearchArea from '../CommanComponent/SearchArea'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

<div className="body__overlay"></div>
        {/* <!-- Start Offset Wrapper --> */}
        <div className="offset__wrapper">
            {/* <!-- Start Search Popap --> */}
            <div className="search__area">
               {/* <SearchArea/> */}
            </div>
            {/* <!-- End Search Popap --> */}
            {/* <!-- Start Cart Panel --> */}
            <div className="shopping__cart">
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn">
                        <Link to="/#"><i className="zmdi zmdi-close"></i></Link>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <Link to="/#">
                                    <img src="images/product-2/sm-smg/1.jpg" alt="product images"/>
                                </Link>
                            </div>
                            <div className="shp__pro__details">
                                <h2><Link to="/product-details">BO&Play Wireless Speaker</Link></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <Link to="/#" title="Remove this item"><i className="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <Link to="/#">
                                    <img src="images/product-2/sm-smg/2.jpg" alt="product images"/>
                                </Link>
                            </div>
                            <div className="shp__pro__details">
                                <h2><Link to="/product-details">Brone Candle</Link></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <Link to="/#" title="Remove this item"><i className="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><Link to="/cart">View Cart</Link></li>
                        <li className="shp__checkout"><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </div>
            </div>
            {/* <!-- End Cart Panel --> */}
        </div>

        {/* <!-- Start Slider Area --> */}
        <div className="slider__container slider--one bg__cat--3">
            <div className="slide__container slider__activation__wrap owl-carousel">
                {/* <!-- Start Single Slide --> */}
                <div className="single__slide animation__style01 slider__fixed--height">
                    <div className="container">
                        <div className="row align-items__center">
                            <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                <div className="slide">
                                    <div className="slider__inner">
                                        <h2>collection 2018</h2>
                                        <h1>NICE CHAIR</h1>
                                        <div className="cr__btn">
                                            <Link to="/cart">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                <div className="slide__thumb">
                                    <img src="images/slider/fornt-img/1.png" alt="slider images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Slide --> */}
                {/* <!-- Start Single Slide --> */}
                <div className="single__slide animation__style01 slider__fixed--height">
                    <div className="container">
                        <div className="row align-items__center">
                            <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                <div className="slide">
                                    <div className="slider__inner">
                                        <h2>collection 2018</h2>
                                        <h1>NICE CHAIR</h1>
                                        <div className="cr__btn">
                                            <Link to="/cart">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                <div className="slide__thumb">
                                    <img src="images/slider/fornt-img/2.png" alt="slider images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Single Slide --> */}
            </div>
        </div>
        {/* <!-- Start Slider Area --> */}
    </>
  )
}

export default Header