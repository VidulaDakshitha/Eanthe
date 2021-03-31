import React, { Component } from 'react';

import Logo from "../../assets/logo.jpg"
import Logo2 from "../../assets/logo2.jpg"
import insta from "../../assets/insta.jpg"
import facebook from "../../assets/facebook.jpg"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Footer extends Component {


  render() {

   


    return (
      <React.Fragment>
	
<footer className="container">
<div className="pt-5 pb-5 row">
<div className="pt-sm-4 d-flex justify-content-center col-lg-4">
<div class="f-widget">
<ul className="f-list">
<li>Contact us</li>
<li>Delivery & Shipping</li>
<li>Privacy Policy</li>
</ul>
</div>
</div>


<div className="pt-sm-4 d-flex justify-content-center col-lg-4">
<div>
<h3 className="text-center">CONNECT WITH US</h3>
<div className="d-flex justify-content-around">
<img src={facebook}/>
<img src={insta}/>
</div>
</div>
</div>



<div className="pt-sm-4  d-flex justify-content-center col-lg-4">
<div class="f-widget">
<ul className="f-list">
<li>Powered by</li>
<li>Spemai</li>
</ul>
</div>
</div>


</div>

</footer>
	


      </React.Fragment>
    );
  }
}



export default Footer;
