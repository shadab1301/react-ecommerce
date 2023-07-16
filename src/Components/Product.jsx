import React from 'react'
import Brand from './Brand'
import SearchArea from '../CommanComponent/SearchArea'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <>
            {/* <!-- Start Offset Wrapper --> */}
        <div class="offset__wrapper">
            {/* <!-- Start Search Popap --> */}
            {/* <SearchArea/> */}
            {/* <!-- End Search Popap --> */}
            {/* <!-- Start Cart Panel --> */}
            <div class="shopping__cart">
                <div class="shopping__cart__inner">
                    <div class="offsetmenu__close__btn">
                        <Link to="/#"><i class="zmdi zmdi-close"></i></Link>
                    </div>
                    <div class="shp__cart__wrap">
                        <div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <Link to="/#">
                                    <img src="images/product-2/sm-smg/1.jpg" alt="product images"/>
                                </Link>
                            </div>
                            <div class="shp__pro__details">
                                <h2><Link to="/product-detailS">BO&Play Wireless Speaker</Link></h2>
                                <span class="quantity">QTY: 1</span>
                                <span class="shp__price">$105.00</span>
                            </div>
                            <div class="remove__btn">
                                <Link to="/#" title="Remove this item"><i class="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                        <div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <Link to="/#">
                                    <img src="images/product-2/sm-smg/2.jpg" alt="product images"/>
                                </Link>
                            </div>
                            <div class="shp__pro__details">
                                <h2><Link to="/product-detailS">Brone Candle</Link></h2>
                                <span class="quantity">QTY: 1</span>
                                <span class="shp__price">$25.00</span>
                            </div>
                            <div class="remove__btn">
                                <Link to="/#" title="Remove this item"><i class="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                    </div>
                    <ul class="shoping__total">
                        <li class="subtotal">Subtotal:</li>
                        <li class="total__price">$130.00</li>
                    </ul>
                    <ul class="shopping__btn">
                        <li><Link to="/cart">View Cart</Link></li>
                        <li class="shp__checkout"><Link to="/checkout">Checkout</Link></li>
                    </ul>
                </div>
            </div>
            {/* <!-- End Cart Panel --> */}
        </div>
        {/* <!-- End Offset Wrapper --> */}
        {/* <!-- Start Bradcaump area --> */}
        <div class="ht__bradcaump__area" style={{background: "rgba(0, 0, 0, 0) url(images/bg/4.jpg) no-repeat scroll center center / cover"}}>
            <div class="ht__bradcaump__wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="bradcaump__inner">
                                <nav class="bradcaump-inner">
                                  <Link class="breadcrumb-item" to="/">Home</Link>
                                  <span class="brd-separetor"><i class="zmdi zmdi-chevron-right"></i></span>
                                  <span class="breadcrumb-item active">Products</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End Bradcaump area --> */}
        {/* <!-- Start Product Grid --> */}
        <section class="htc__product__grid bg__white ptb--100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
                        <div class="htc__product__rightidebar">
                            <div class="htc__grid__top">
                                <div class="htc__select__option">
                                    <select class="ht__select">
                                        <option>Default softing</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by newness</option>
                                    </select>
                                </div>
                                
                                {/* <!-- Start List And Grid View --> */}
                                <ul class="view__mode" role="tablist">
                                    <li role="presentation" class="grid-view active"><Link to="/#grid-view" role="tab" data-toggle="tab"><i class="zmdi zmdi-grid"></i></Link></li>
                                    <li role="presentation" class="list-view"><Link to="/#list-view" role="tab" data-toggle="tab"><i class="zmdi zmdi-view-list"></i></Link></li>
                                </ul>
                                {/* <!-- End List And Grid View --> */}
                            </div>
                            {/* <!-- Start Product View --> */}
                            <div class="row">
                                <div class="shop__grid__view__wrap">
                                    <div role="tabpanel" id="grid-view" class="single-grid-view tab-pane fade in active clearfix">
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/1.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Largest Water Pot</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/2.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Chair collection</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/3.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">dummy Product name</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/4.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Largest Water Pot</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/5.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Largest Water Pot</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/6.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Special Wood Basket</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/7.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Largest Water Pot</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/8.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">donec ac tempus nrb</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/9.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">nemo enim ipsam</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/10.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">dummy Product name</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/11.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Chair collection</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                        {/* <!-- Start Single Product --> */}
                                        <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="category">
                                                <div class="ht__cat__thumb">
                                                    <Link to="/product-detailS">
                                                        <img src="images/product/1.jpg" alt="product images"/>
                                                    </Link>
                                                </div>
                                                <div class="fr__hover__info">
                                                    <ul class="product__action">
                                                        <li><Link to="/wishlist"><i class="icon-heart icons"></i></Link></li>

                                                        <li><Link to="/cart"><i class="icon-handbag icons"></i></Link></li>

                                                        <li><Link to="/#"><i class="icon-shuffle icons"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="fr__product__inner">
                                                    <h4><Link to="/product-detailS">Largest Water Pot</Link></h4>
                                                    <ul class="fr__pro__prize">
                                                        <li class="old__prize">$30.3</li>
                                                        <li>$25.9</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Single Product --> */}
                                    </div>
                                    <div role="tabpanel" id="list-view" class="single-grid-view tab-pane fade clearfix">
                                        <div class="col-xs-12">
                                            <div class="ht__list__wrap">
                                                {/* <!-- Start List Product --> */}
                                                <div class="ht__list__product">
                                                    <div class="ht__list__thumb">
                                                        <Link to="/product-detailS"><img src="images/product-2/pro-1/1.jpg" alt="product images"/></Link>
                                                    </div>
                                                    <div class="htc__list__details">
                                                        <h2><Link to="/product-detailS">Product Title Here </Link></h2>
                                                        <ul  class="pro__prize">
                                                            <li class="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul class="rating">
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div class="fr__list__btn">
                                                            <Link class="fr__btn" to="cart">Add To Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End List Product --> */}
                                                {/* <!-- Start List Product --> */}
                                                <div class="ht__list__product">
                                                    <div class="ht__list__thumb">
                                                        <Link to="/product-detailS"><img src="images/product-2/pro-1/2.jpg" alt="product images"/></Link>
                                                    </div>
                                                    <div class="htc__list__details">
                                                        <h2><Link to="/product-detailS">Product Title Here </Link></h2>
                                                        <ul  class="pro__prize">
                                                            <li class="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul class="rating">
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div class="fr__list__btn">
                                                            <Link class="fr__btn" to="cart">Add To Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End List Product --> */}
                                                {/* <!-- Start List Product --> */}
                                                <div class="ht__list__product">
                                                    <div class="ht__list__thumb">
                                                        <Link to="/product-detailS"><img src="images/product-2/pro-1/3.jpg" alt="product images"/></Link>
                                                    </div>
                                                    <div class="htc__list__details">
                                                        <h2><Link to="/product-detailS">Product Title Here </Link></h2>
                                                        <ul  class="pro__prize">
                                                            <li class="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul class="rating">
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div class="fr__list__btn">
                                                            <Link class="fr__btn" to="cart">Add To Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End List Product --> */}
                                                {/* <!-- Start List Product --> */}
                                                <div class="ht__list__product">
                                                    <div class="ht__list__thumb">
                                                        <Link to="/product-detailS"><img src="images/product-2/pro-1/4.jpg" alt="product images"/></Link>
                                                    </div>
                                                    <div class="htc__list__details">
                                                        <h2><Link to="/product-detailS">Product Title Here </Link></h2>
                                                        <ul  class="pro__prize">
                                                            <li class="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul class="rating">
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                            <li class="old"><i class="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div class="fr__list__btn">
                                                            <Link class="fr__btn" to="cart">Add To Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- End List Product --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Product View --> */}
                        </div>
                        
                    </div>
                    <div class="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40">
                        <div class="htc__product__leftsidebar">
                            {/* <!-- Start Best Sell Area --> */}
                            <div class="htc__recent__product">
                                <h2 class="title__line--4">best seller</h2>
                                <div class="htc__recent__product__inner">
                                    {/* <!-- Start Single Product --> */}
                                    <div class="htc__best__product">
                                        <div class="htc__best__pro__thumb">
                                            <Link to="/product-detailS">
                                                <img src="images/product-2/sm-smg/1.jpg" alt="small product"/>
                                            </Link>
                                        </div>
                                        <div class="htc__best__product__details">
                                            <h2><Link to="/product-detailS">Product Title Here</Link></h2>
                                            <ul class="rating">
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                            </ul>
                                            <ul  class="pro__prize">
                                                <li class="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div class="htc__best__product">
                                        <div class="htc__best__pro__thumb">
                                            <Link to="/product-detailS">
                                                <img src="images/product-2/sm-smg/2.jpg" alt="small product"/>
                                            </Link>
                                        </div>
                                        <div class="htc__best__product__details">
                                            <h2><Link to="/product-detailS">Product Title Here</Link></h2>
                                            <ul class="rating">
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                            </ul>
                                            <ul  class="pro__prize">
                                                <li class="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                    {/* <!-- Start Single Product --> */}
                                    <div class="htc__best__product">
                                        <div class="htc__best__pro__thumb">
                                            <Link to="/product-detailS">
                                                <img src="images/product-2/sm-smg/1.jpg" alt="small product"/>
                                            </Link>
                                        </div>
                                        <div class="htc__best__product__details">
                                            <h2><Link to="/product-detailS">Product Title Here</Link></h2>
                                            <ul class="rating">
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                                <li class="old"><i class="icon-star icons"></i></li>
                                            </ul>
                                            <ul  class="pro__prize">
                                                <li class="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Product --> */}
                                </div>
                            </div>
                            {/* <!-- End Best Sell Area --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Product Grid --> */}
        {/* <!-- Start Brand Area --> */}
        <Brand/>
        {/* <!-- End Banner Area --> */}
    
    
    </>
  )
}

export default Product