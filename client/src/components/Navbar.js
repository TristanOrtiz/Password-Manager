import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import "./Navbar.css"


export const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (

		<header>
			<Link to="/">Lock It</Link>
			<nav ref={navRef}>
                <Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        
    )
}