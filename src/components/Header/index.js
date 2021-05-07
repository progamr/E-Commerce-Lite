import React from 'react';
import { FiPackage, FiSearch, FiChevronDown, FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import './index.scss';

export const Header = () => {
    return (
        <nav className="row color-surface">
            <header className="row">
                <div className="row header-top color-primary-1">
                    <div className="row header-top-wrapper container-fluid-flex-content">
                        <div className="free-shipping-message">
                            <span className="free-shipping-icon"><FiPackage/></span> Free shipping on orders over $100
                        </div>
                        <div className="subscribe-now">
                            <span className="subscribe-now-message2">
                                <span className="subscribe-now-message1">Don't miss out.</span> Subscribe Now
                            </span>
                            <span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Search bar header */}
                <div className="row header color-primary-1-light">
                    <div className="row header-top-wrapper container-fluid-flex-content">
                        {/*Logo*/}
                        <div>
                            <a href="/" className="logoLink">
                                <span className="logoWord">store</span>
                                <span className="logoWord2">logo</span>
                            </a>
                        </div>
                        {/* Search input */}
                        <div className="searchInputWrapper">
                            {/*TODO: enhance button word spacing */}
                            <button className="productCategoriesBtn">
                                All Products
                                <IconContext.Provider value={{ className: 'accountIcon', size:  '1em'}}>
                                    <FiChevronDown />
                                </IconContext.Provider>
                            </button>
                            <input className="searchInput" placeholder="Enter Keywords"/>
                            <IconContext.Provider value={{ className: 'searchIcon', size:  '1.3em', title: 'Search for products'}}>
                                <FiSearch />
                            </IconContext.Provider>
                        </div>
                        {/*TODO: Fix responsive bug for mobile of this div*/}
                        <div className="menusWrapper">
                            {/* Account Dropdown */}
                            <div className="accountWrapper">
                                <span className="headerText">Account</span>
                                <IconContext.Provider value={{ className: 'accountIcon', size:  '1em'}}>
                                    <FiChevronDown />
                                </IconContext.Provider>
                            </div>
                            {/* Separator */}
                            <div className="separatorWrapper">
                                <span className="separator" />
                            </div>
                            {/* Language Dropdown */}
                            <div className="flagWrapper">
                                <img src="./assets/flag3.jpeg" className="flag"/>
                                <IconContext.Provider value={{ className: 'accountIcon', size:  '1em'}}>
                                    <FiChevronDown />
                                </IconContext.Provider>
                            </div>
                            {/* Cart */}
                            <div className="cartWrapper">
                                <IconContext.Provider value={{ className: 'cartIcon', size:  '1em'}}>
                                <FiShoppingCart />
                                </IconContext.Provider>
                                <span className="headerText cartText">Cart</span>
                                <span className="cartCount">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>*/}
        </nav>
    );
};
