import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Nav.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Landing from '../pages/Landing';
import Products from '../pages/Products';
const Nav = () => {
//   const navStyle = {
//     position: `fixed`,
//     top: 0,
//     width: `100%`,
//     height: `70px`,
//   };

  return (
    <nav className="nav"  id="navBar">
        <div className="nav-content"  >
            <div className="nav-name">
                <Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                >
                    <div id="nav-hygo">
                        <span className='c1'>Hy</span>
                        <span className='c2'>Go</span>
                    </div>
                </Link>
            </div>
            <ul className="nav-items">

                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                >
                    <div className='about-link'>
                        ABOUT
                    </div>
                </Link>
                </li>

                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={145}
                    duration={500}
                >
                    PRODUCTS
                </Link>
                </li>

                <li className="nav-item">
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    // offset={-100}
                    duration={500}
                >
                    CONTACT
                </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
