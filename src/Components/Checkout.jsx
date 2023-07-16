import React from 'react'
import "../Components/customStyle.css"
import SearchArea from '../CommanComponent/SearchArea'

const Checkout = () => {
  return (
    <>
      <div className="offset__wrapper">
            {/* <!-- Start Search Popap --> */}
            <div className="search__area">
               <SearchArea/>
            </div>
            {/* <!-- End Search Popap --> */}
            {/* <!-- Start Cart Panel --> */}
            <div className="shopping__cart">
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src="images/product-2/sm-smg/1.jpg" alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src="images/product-2/sm-smg/2.jpg" alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><a href="cart.html">View Cart</a></li>
                        <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- End Cart Panel --> */}
        </div>
        {/* <!-- End Offset Wrapper --> */}
        {/* <!-- Start Bradcaump area --> */}
        <div className="ht__bradcaump__area" style={{background: "rgba(0, 0, 0, 0) url(images/bg/4.jpg) no-repeat scroll center center / cover "}}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner">
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                  <span className="breadcrumb-item active">checkout</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Bradcaump area --> */}

      {/* <!-- cart-main-area start --> */}
        <div className="checkout-wrap ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="checkout__inner">
                            <div className="accordion-list">
                                <div className="accordion">
                                    <div className="accordion__title">
                                        Checkout Method
                                    </div>
                                    <div className="accordion__body">
                                        <div className="accordion__body__form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="checkout-method__login">
                                                        <form action="#">
                                                            <h5 className="checkout-method__title">Login</h5>
                                                            <div className="single-input">
                                                                <label for="user-email">Email Address</label>
                                                                <input type="email" id="user-email"/>
                                                            </div>
                                                            <div className="single-input">
                                                                <label for="user-pass">Password</label>
                                                                <input type="password" id="user-pass"/>
                                                            </div>
                                                            <p className="require">* Required fields</p>
                                                            <div className="dark-btn">
                                                                <a href="#">LogIn</a>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-method__login">
                                                        <form action="#">
                                                            <h5 className="checkout-method__title">Register</h5>
                                                            <div className="single-input">
                                                                <label for="user-email">Name</label>
                                                                <input type="email" id="user-email"/>
                                                            </div>
															<div className="single-input">
                                                                <label for="user-email">Email Address</label>
                                                                <input type="email" id="user-email"/>
                                                            </div>
															
                                                            <div className="single-input">
                                                                <label for="user-pass">Password</label>
                                                                <input type="password" id="user-pass"/>
                                                            </div>
                                                            <div className="dark-btn">
                                                                <a href="#">Register</a>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion__title">
                                        Address Information
                                    </div>
                                    <div className="accordion__body">
                                        <div className="bilinfo">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="First name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="Street Address"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="Apartment/Block/House (optional)"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="City/State"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="Post code/ zip"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <input type="email" placeholder="Email address"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="single-input">
                                                            <input type="text" placeholder="Phone number"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="accordion__title">
                                        payment information
                                    </div>
                                    <div className="accordion__body">
                                        <div className="paymentinfo">
                                            <div className="single-method">
                                                <a href="#"><i className="zmdi zmdi-long-arrow-right"></i>Check/ Money Order</a>
                                            </div>
                                            <div className="single-method">
                                                <a href="#" className="paymentinfo-credit-trigger"><i className="zmdi zmdi-long-arrow-right"></i>Credit Card</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-details">
                            <h5 className="order-details__title">Your Order</h5>
                            <div className="order-details__item">
                                <div className="single-item">
                                    <div className="single-item__thumb">
                                        <img src="images/cart/1.png" alt="ordered item"/>
                                    </div>
                                    <div className="single-item__content">
                                        <a href="#">Santa fe jacket for men</a>
                                        <span className="price">$128</span>
                                    </div>
                                    <div className="single-item__remove">
                                        <a href="#"><i className="zmdi zmdi-delete"></i></a>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="single-item__thumb">
                                        <img src="images/cart/2.png" alt="ordered item"/>
                                    </div>
                                    <div className="single-item__content">
                                        <a href="#">Santa fe jacket for men</a>
                                        <span className="price">$128</span>
                                    </div>
                                    <div className="single-item__remove">
                                        <a href="#"><i className="zmdi zmdi-delete"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="order-details__count">
                                <div className="order-details__count__single">
                                    <h5>sub total</h5>
                                    <span className="price">$909.00</span>
                                </div>
                                <div className="order-details__count__single">
                                    <h5>Tax</h5>
                                    <span className="price">$9.00</span>
                                </div>
                            </div>
                            <div className="ordre-details__total">
                                <h5>Order total</h5>
                                <span className="price">$918.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- cart-main-area end --> */}
    
    </>
  )
}

export default Checkout