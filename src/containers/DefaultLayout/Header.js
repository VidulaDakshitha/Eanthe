import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.jpg"
import Logo2 from "../../assets/logo2.jpg"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Header extends Component {


  render() {

   


    return (
      <React.Fragment>
	<header className="header">
		<nav className="navbar navbar-expand-lg fixed-top" id="main-nav">
		  <div className="container">
			<a className="navbar-brand" href="/">
			  <img
				className="white-logo"
				src={Logo}
				alt=""
				width="160px"
				height="200px"
			  ></img>
			  <img
				className="color-logo"
				src={Logo2}
				alt=""
				width="40px"
			  ></img>
			</a>
			<button
			  className="navbar-toggler order-1"
			  type="button"
			  data-toggle="collapse"
			  data-target="#main-nav-collapse"
			  aria-controls="main-nav-collapse"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span className="menu-toggle">
				<span className="hamburger">
				  <span></span>
				  <span></span>
				  <span></span>
				</span>
				<span className="hamburger-cross">
				  <span></span>
				  <span></span>
				</span>
			  </span>
			</button>
			<div
			  className="collapse navbar-collapse order-3 order-lg-2"
			  id="main-nav-collapse"
			>
			  <ul className="navbar-nav ml-auto">
				<li className="nav-item">
				  <a style={{background:"none"}} className="nav-link nav-link-scroll" href="/">
					Home
				  </a>
				</li>

				


				<li className="nav-item">
				  <a  style={{background:"none"}} className="nav-link nav-link-scroll" href="/order"
					>Order</a>
				</li>

					<li className="nav-item">
				  <a style={{background:"none"}} className="nav-link nav-link-scroll" href="/collection">
					Collections
				  </a>
				</li>
				
			  </ul>
			</div>
		
				<div className="text-right order-2 order-lg-3">
				<ShoppingCartIcon onClick={()=>window.location.href="/cart"}/>
			</div>
		
		  </div>
		</nav>
	  </header>

	


      </React.Fragment>
    );
  }
}



export default Header;
