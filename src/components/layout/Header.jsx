import React from 'react';
import {Link} from "react-router-dom";
import './header.css';

const Header = () => {
	return (
		<header className="header">
			<nav className="header-items">
				<Link to="/calculator">Calculator</Link>
			</nav>
		</header>
	)
}

export default Header;