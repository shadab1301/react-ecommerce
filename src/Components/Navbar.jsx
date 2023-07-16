import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <!-- Start Header Style --> */}
            <header id="htc__header" className="htc__header__area header--one">
                {/* <!-- Start Mainmenu Area --> */}
                <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="menumenu__container clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="logo">
                                        <Link to="/"><img src="images/logo/4.png" alt="logo images" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                    <nav className="main__menu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu">
                                            <li className="drop"><Link to="/">Home</Link></li>
                                            <li className="drop"><Link to="/#">women</Link>
                                                <ul className="dropdown mega_dropdown">
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product">Shop Pages</Link>
                                                        <ul className="mega__item">
                                                            <li><Link to="/product">Product</Link></li>
                                                            <li><Link to="/cart">Cart</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product-grid">Variable Product</Link>
                                                        <ul className="mega__item">
                                                            <li><Link to="/category">Category</Link></li>
                                                            <li><Link to="/account">My Account</Link></li>
                                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                                            <li><Link to="/cart">Shopping Cart</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product-grid">Product Types</Link>
                                                        <ul className="mega__item">
                                                            <li><Link to="/simple-product">Simple Product</Link></li>
                                                            <li><Link to="/variable-product">Variable Product</Link></li>
                                                            <li><Link to="/grouped-product">Grouped Product</Link></li>
                                                            <li><Link to="/downloadable-product">Downloadable Product</Link></li>
                                                            <li><Link to="/simple-product">Simple Product</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                </ul>
                                            </li>
                                            <li className="drop"><Link to="/#">men</Link>
                                                <ul className="dropdown mega_dropdown">
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product-grid">Shop Pages</Link>
                                                        <ul className="mega__item">
                                                            <li><Link to="/product-grid">Product Grid</Link></li>
                                                            <li><Link to="/cart">cart</Link></li>
                                                            <li><Link to="/checkout">checkout</Link></li>
                                                            <li><Link to="/wishlist">wishlist</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product">Variable Product</Link>
                                                        <ul className="mega__item">
                                                        <li><Link to="/category">Category</Link></li>
                                                            <li><Link to="/account">My Account</Link></li>
                                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                                            <li><Link to="/cart">Shopping Cart</Link></li>
                                                            <li><Link to="/checkout">Checkout</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                    {/* <!-- Start Single Mega MEnu --> */}
                                                    <li><Link className="mega__title" to="product-grid">Product Types</Link>
                                                        <ul className="mega__item">
                                                            <li><Link to="/simple-product">Simple Product</Link></li>
                                                            <li><Link to="/variable-product">Variable Product</Link></li>
                                                            <li><Link to="/grouped-product">Grouped Product</Link></li>
                                                            <li><Link to="/downloadable-product">Downloadable Product</Link></li>
                                                            <li><Link to="/simple-product">Simple Product</Link></li>
                                                        </ul>
                                                    </li>
                                                    {/* <!-- End Single Mega MEnu --> */}
                                                </ul>
                                            </li>
                                            <li className="drop"><Link to="/product">Product</Link>
                                                <ul className="dropdown">
                                                    <li><Link to="/product">Product Grid</Link></li>
                                                    <li><Link to="/product-details">Product Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><Link to="/blog">blog</Link>
                                                <ul className="dropdown">
                                                    <li><Link to="/blog">Blog Grid</Link></li>
                                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><Link to="/#">Pages</Link>
                                                <ul className="dropdown">
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/blog-details">Blog Details</Link></li>
                                                    <li><Link to="/cart">Cart page</Link></li>
                                                    <li><Link to="/checkout">checkout</Link></li>
                                                    <li><Link to="/contact">contact</Link></li>
                                                    <li><Link to="/product">product grid</Link></li>
                                                    <li><Link to="/product">product details</Link></li>
                                                    <li><Link to="/wishlist">wishlist</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/contact">contact</Link></li>
                                        </ul>
                                    </nav>

                                    <div className="mobile-menu clearfix visible-xs visible-sm">
                                        <nav id="mobile_dropdown">
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/blog">blog</Link></li>
                                                <li><Link to="/#">pages</Link>
                                                    <ul>
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                                        <li><Link to="/cart">Cart page</Link></li>
                                                        <li><Link to="/checkout">checkout</Link></li>
                                                        <li><Link to="/contact">contact</Link></li>
                                                        <li><Link to="/product">product grid</Link></li>
                                                        <li><Link to="/product">product details</Link></li>
                                                        <li><Link to="/wishlist">wishlist</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                                    <div className="header__right">
                                        <div className="header__search search search__open">
                                            <Link to="/#"><i className="icon-magnifier icons"></i></Link>
                                        </div>
                                        <div className="header__account">
                                            <Link to="/#"><i className="icon-user icons"></i></Link>
                                        </div>
                                        <div className="htc__shopping__cart">
                                            <Link className="cart__menu" to="#"><i className="icon-handbag icons"></i></Link>
                                            <Link to="/#"><span className="htc__qua">2</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-area"></div>
                    </div>
                </div>
                {/* <!-- End Mainmenu Area --> */}
            </header>
            <div class="body__overlay"></div>
            {/* <!-- End Header Area --> */}


        </>
    )
}

export default Navbar