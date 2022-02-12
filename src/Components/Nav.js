import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';


function Nav() {
    // State.
    const [ mobileNav, setMobileNav ] = useState(false);
    const toogleMobileMenu = () => {
        setMobileNav(!mobileNav);
    }

    // React Spring.
    const transition = useTransition(mobileNav, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    // Show nav menu on big screens.
    useEffect(() => {
        let mobileNavScreenWidth = () => {
            if (window.innerWidth > 539) {
                setMobileNav(true);
            } else {
                setMobileNav(false);
            }
        }


        window.addEventListener("load", mobileNavScreenWidth)
        window.addEventListener("resize", mobileNavScreenWidth)
        return() => {
            window.removeEventListener("load", mobileNavScreenWidth)
            window.removeEventListener("resize", mobileNavScreenWidth)
        }
    });


    return (
        <div className="nav-wrapper">
            <div className="nav-container">
                <img src={mobileNav ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"} alt="Nav Button" onClick={toogleMobileMenu} className="nav-btn"/>
                <img src="./images/logo.svg" alt="Logo" className="nav-logo" />
                {transition((style, mobileNav) => mobileNav ? (
                    <animated.ul style={style} className={mobileNav ? "show-nav" : ""}>
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </animated.ul>
                ) : null)}
            </div>
        </div>
    )
}

export default Nav;