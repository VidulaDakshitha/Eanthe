import React from 'react';
import Header from "../../../containers/DefaultLayout/Header.js";
import Footer from "../../../containers/DefaultLayout/Footer.js";
import onepay from "../../../assets/onepay_logo-1.png";
import {Label,FormGroup,Input,InputGroup,InputGroupAddon,Button} from "reactstrap";

import "./PaymentStyle.css";
class Payment extends React.Component {

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

 <section >
 <div >
 <div className="newpadding row">
        
 <div className="col-lg-6" style={{borderRight:"2px solid lightgrey",height:"1000px"}}>
 
                <h2 style={{paddingTop:"190px",fontWeight:800}} className="text-center"><b>Shipping Details</b></h2>
<div className="d-flex justify-content-center">
                <div className="row pt-5" style={{width:"80%"}}>
                        <div style={{paddingLeft:0,paddingRight:0}} className=" text-center col-lg-6">
                            <FormGroup className="d-flex align-items-center flex-column">
                    
                            <Input placeholder="First Name" style={{width:"100%"}} className=" InputStyle3 "></Input>
                            </FormGroup>
                        </div>


                        <div style={{paddingLeft:0,paddingRight:0}} className="pl-lg-2 text-center col-lg-6">
                            <FormGroup className="d-flex align-items-center flex-column">
                           
                            <Input placeholder="Last Name" style={{width:"100%"}} className=" InputStyle3 "></Input>
                            </FormGroup>
                        </div>
                </div>
</div>


                <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="Address"  className=" InputStyle "></Input>
                </FormGroup>
                </div>

                    <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="Appartment (opional)"  className=" InputStyle "></Input>
                </FormGroup>
                </div>



                    <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="City"  className=" InputStyle "></Input>
                </FormGroup>
                </div>


                <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input type="select" placeholder="postal code"  className=" InputStyle ">
                <option value="">country</option>
                <option value="">Sri Lanka</option>
                 <option value="">India</option>
                 <option value="">Malaysia</option>
                </Input>
                </FormGroup>
                </div>





  <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="postal code"  className=" InputStyle "></Input>
                </FormGroup>
                </div>


                <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="Contact Number"  className=" InputStyle "></Input>
                </FormGroup>
                </div>




              


           

{/* 
                    <div className="pt-5 nav-button d-flex align-items-center flex-column">
                            <a style={{width:"300px"}}
                                href="https://merchant.onepay.lk/"
                                >Submit</a>
                            </div> */}


                </div>

                   <div  className=" col-lg-6">
                    <h2 style={{paddingTop:"190px",fontWeight:800}} className="text-center"><b>Payment Options</b></h2>
                                <div className="pt-4 d-flex justify-content-center" >

                                            

                                                <div className="d-flex justify-content-center" style={{width:"70%",height:"300px",borderRadius:"30px",backgroundColor:"#CFFBCD"}}>
                                                        <div>
                                                            <h4 className="pt-3 text-center">Express Checkout</h4>
                                                        
                                                            <img  width="187px" src={onepay} />
                                                        
                                                        </div>
                                                </div>
                                </div>

<h3  style={{marginTop:"60px",color:"grey"}} className="container hrline"><b>OR</b></h3>

<div className="phone d-flex justify-content-around">
<span className="spanbackground"></span>
<span className="spanbackground1"></span>

<span className="spanbackground2"></span>
<span className="spanbackground3"></span>
</div>


<div className="desktop d-flex justify-content-between">
<span className="pr-2 spanbackgroundp"></span>
<span className="spanbackground1p"></span>

<span className="spanbackground2p"></span>
<span className="spanbackground3p"></span>
</div>


    <div className="pt-3 text-center ">
                <FormGroup className="d-flex align-items-center flex-column">
               
                <Input placeholder="Card number"  className=" InputStyle "></Input>
                </FormGroup>
    </div>


     <div className="row ">
        <div className=" text-center col-lg-8">
            <FormGroup className="d-flex align-items-center flex-column">
           
            <Input type="select"   className=" InputStyle ">
            
            <option>2000</option>
             <option>2001</option>
            </Input>
            </FormGroup>
        </div>


        <div className="text-center col-lg-4">
            <FormGroup className="d-flex align-items-center flex-column">
         
            <Input placeholder="CVC"   className=" InputStyle "></Input>
            </FormGroup>
        </div>
</div>






     <div className="row ">
        <div className=" text-center col">
            <FormGroup className="d-flex align-items-center flex-column">
           
            <Input type="select"   className=" InputStyle ">
            
            <option>Sri Lanka</option>
             <option>India</option>
            </Input>
            </FormGroup>
        </div>


        <div className="text-center col">
            <FormGroup className="d-flex align-items-center flex-column">
         
            <Input placeholder="postal code"   className=" InputStyle "></Input>
            </FormGroup>
        </div>

</div>

<div className="d-flex align-items-center flex-column">
      <InputGroup className="pb-5 " style={{width:"80%"}}>
        <Input placeholder="coupon code" className="codeInput"/>
        <InputGroupAddon addonType="append">
          <Button className="codeButton" color="danger">Apply Code</Button>
        </InputGroupAddon>
      </InputGroup>
     </div>

	<div className="phone pt-3 nav-button2 d-flex align-items-center flex-column">
			  <a style={{width:"526px",height:"56px",color:"black"}}
				href="https://merchant.onepay.lk/"
				>Check Out</a>
			</div>


            	<div className="desktop pt-3 nav-button2 d-flex align-items-center flex-column">
			  <a style={{width:"326px",height:"56px",color:"black"}}
				href="/"
				>Check Out</a>
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
export default Payment;