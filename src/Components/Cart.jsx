import React from 'react'
import SearchArea from '../CommanComponent/SearchArea'

const Cart = () => {
  return (
    <>
           {/* <!-- Start Offset Wrapper --> */}
        <div className="offset__wrapper">

            {/* <!-- Start Search Popap --> */}

           {/* <SearchArea/> */}

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
                                  <span className="breadcrumb-item active">shopping cart</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Bradcaump area --> */}
        {/* <!-- cart-main-area start --> */}
        <div className="cart-main-area ptb--100 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <form action="#">               
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">products</th>
                                            <th className="product-name">name of products</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#"><img src="images/product-2/cart-img/1.jpg" alt="product img" /></a></td>
                                            <td className="product-name"><a href="#">New Dress For Sunday</a>
                                                <ul  className="pro__prize">
                                                    <li className="old__prize">$82.5</li>
                                                    <li>$75.2</li>
                                                </ul>
                                            </td>
                                            <td className="product-price"><span className="amount">£165.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1" /></td>
                                            <td className="product-subtotal">£165.00</td>
                                            <td className="product-remove"><a href="#"><i className="icon-trash icons"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#"><img src="images/product-2/cart-img/2.jpg" alt="product img" /></a></td>
                                            <td className="product-name"><a href="#">New Dress For Sunday</a>
                                                <ul  className="pro__prize">
                                                    <li className="old__prize">$82.5</li>
                                                    <li>$75.2</li>
                                                </ul>
                                            </td>
                                            <td className="product-price"><span className="amount">£50.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1" /></td>
                                            <td className="product-subtotal">£50.00</td>
                                            <td className="product-remove"><a href="#"><i className="icon-trash icons"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#"><img src="images/product-2/cart-img/3.jpg" alt="product img" /></a></td>
                                            <td className="product-name"><a href="#">New Dress For Sunday</a>
                                                <ul  className="pro__prize">
                                                    <li className="old__prize">$82.5</li>
                                                    <li>$75.2</li>
                                                </ul>
                                            </td>
                                            <td className="product-price"><span className="amount">£50.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1" /></td>
                                            <td className="product-subtotal">£50.00</td>
                                            <td className="product-remove"><a href="#"><i className="icon-trash icons"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="#"><img src="images/product-2/cart-img/4.jpg" alt="product img" /></a></td>
                                            <td className="product-name"><a href="#">New Dress For Sunday</a>
                                                <ul  className="pro__prize">
                                                    <li className="old__prize">$82.5</li>
                                                    <li>$75.2</li>
                                                </ul>
                                            </td>
                                            <td className="product-price"><span className="amount">£50.00</span></td>
                                            <td className="product-quantity"><input type="number" value="1" /></td>
                                            <td className="product-subtotal">£50.00</td>
                                            <td className="product-remove"><a href="#"><i className="icon-trash icons"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="buttons-cart--inner">
                                        <div className="buttons-cart">
                                            <a href="#">Continue Shopping</a>
                                        </div>
                                        <div className="buttons-cart checkout--btn">
                                            <a href="#">update</a>
                                            <a href="#">checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- cart-main-area end --> */}
        {/* <!-- End Banner Area --> */}
    
    
    
    </>
  )
}

export default Cart