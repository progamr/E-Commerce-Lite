import React from 'react';
import {Link} from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';

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
                <div className="row header color-primary-1-light">

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
