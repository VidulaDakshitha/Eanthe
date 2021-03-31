import React from 'react';
import Header from "../../../containers/DefaultLayout/Header.js";
import cart from "../../../assets/cart.jpg";
import {Label,FormGroup,Input} from "reactstrap";
import "./CartItemStyle.css";
import Footer from "../../../containers/DefaultLayout/Footer.js";
import onepay from "../../../assets/onepay_logo-1.png";
class CartItem extends React.Component {

        constructor(props) {

        super(props);
        this.state={

            product:[],
            isLoadmore:false,
            next:0,
            limit:4,
            loading:false,
            latestProduct:[]

        }


    }


        componentDidMount(){
        	      const script1 = document.createElement("script1");
        script1.src = "../../js/lightcase.js";
        script1.async = true;
        document.body.appendChild(script1);

				      const script2 = document.createElement("script2");
        script2.src = "../../js/Custom2.js";
        script2.async = true;
        document.body.appendChild(script2);

        const script = document.createElement("script");
        script.src = "../../js/custom.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render(){


        return(

<div>
 <Header/>
<section>
<div className="container">
 <div className="d-flex paddingvalues2 justify-content-end">
        <div className="col-lg-7 ">
        <h2 style={{fontWeight:800}}>YOUR CART</h2>
        {/* <div className="d-flex justify-content-around">
         <p>Bathik dress</p>
         <p>5</p>
          <p>amount</p>
           <p>Rs. 7,500.00</p>
        </div> */}

        <p>Bathik dress [M] 1 qty RS. 3,500.00</p>
        <p>Bathik Saree [L] 1 qty RS. 5,000.00</p>

        <div style={{paddingTop:"120px"}} className="phone d-flex justify-content-around">
        <h4>Quantity</h4>
         <h4>5</h4>
        <h4>Total</h4>
        <h4>Rs. 7,500.00</h4>
        </div>

     




        </div>


        
 </div>

      <div style={{paddingTop:"185px"}} className="desktop d-flex justify-content-around ">
                        <div className="col-6" style={{borderRight:"1px solid black"}}>
                                <h4>Quantity</h4>
                                <h4>5</h4>
                        </div>
                        <div className="col-6">
                                <h4>Total</h4>
                                <h4>Rs. 7,500.00</h4>
                        </div>
        </div>


<hr/>
<div className="row" style={{paddingTop:"105px",paddingBottom:"105px"}}>

    <div className="col-lg-7">
    <div className="row">
                    <div className="col-lg-6">
                                <img style={{borderRadius:"30px"}} src={cart} className=" img-fluid" width="357px" height="508px" />
                    </div>

                        <div className="col-lg-6">
                                <h2 className="pt-5">Description</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>
                        </div>
    </div>

    </div>

    <div className="col-lg-5 d-flex justify-content-around align-items-center" >
                <div style={{alignItems:"center"}} className="d-flex justify-content-around align-items-center">
                <Input value="1" style={{width:"25%"}} type="number"></Input>

                <p>RS 7,500.00</p>
                </div>

    </div>

</div>


<hr />


 <div className="d-flex  justify-content-end">
        <div className="col-lg-6">
        <div  className="d-flex justify-content-around">
        <h4>SUB TOTAL</h4>
        <h4>Rs 7,500.00</h4>
        </div>
        <p className="pl-5" style={{paddingTop:"60px",paddingBottom:"60px"}}>Tax included and shipping calculated at checkout</p>
        <div className="desktop row">

        	<div className="col-lg-6 ">
            <div style={{marginLeft:0}} className=" nav-button">
			  <a style={{width:"300px"}}
				href="/payment"
				>Update Cart</a>
                </div>
			</div>

            	<div className="col-lg-6">
                 <div className="pt-4 nav-button2">
			  <a style={{width:"300px",color:"black"}}
				href="/payment"
				>Check Out</a>
                </div>
			</div>
        {/* <h4>Quantity</h4>
        <h4>Total</h4> */}
        </div>





        <div className="phone row">

        	<div className="col-lg-6 ">
            <div className=" nav-button">
			  <a style={{width:"220px"}}
				href="/payment"
				>Update Cart</a>
                </div>
			</div>

            	<div className="col-lg-6">
                 <div className="nav-button2">
			  <a style={{width:"220px",color:"black"}}
				href="/payment"
				>Check Out</a>
                </div>
			</div>
        {/* <h4>Quantity</h4>
        <h4>Total</h4> */}
        </div>



{/* for phone */}

                            <div   onClick={()=>window.location.href="/payment"}  className="desktop pt-5 d-flex justify-content-center" >

                                            

                                                <div className="d-flex justify-content-center" style={{width:"100%",height:"280px",borderRadius:"30px",backgroundColor:"#CFFBCD"}}>
                                                        <div>
                                                            <h4 className="pt-3 text-center">Express Checkout</h4>
                                                        
                                                            <img  width="157px" src={onepay} />
                                                        
                                                        </div>
                                                </div>
                                </div>


{/* for desktop */}

                                        <div   onClick={()=>window.location.href="/payment"} className="phone pt-5 d-flex justify-content-center" >

                                            

                                                <div className="d-flex justify-content-center" style={{width:"80%",height:"300px",borderRadius:"30px",backgroundColor:"#CFFBCD"}}>
                                                        <div>
                                                            <h4 className="pt-3 text-center">Express Checkout</h4>
                                                        
                                                            <img  width="187px" src={onepay} />
                                                        
                                                        </div>
                                                </div>
                                 </div>


        </div>
 </div>



</div>
</section>
 <Footer/>
 </div>


        );
    }


        }
export default CartItem;