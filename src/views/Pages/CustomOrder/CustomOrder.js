import React from 'react';
import Header from "../../../containers/DefaultLayout/Header.js";
import Footer from "../../../containers/DefaultLayout/Footer.js";
import order from "../../../assets/order.jpg";
import {Label,FormGroup,Input} from "reactstrap";
import "./OrderStyle.css";

class CustomOrder extends React.Component {

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
 <div className="paddingvalues row">
        <div className="col-lg-5">
                <img  className=" img-fluid w-76" src={order}/>
        </div>
 <div className="col-lg-7">
 
 <h3 className="pt-5 text-center" style={{fontWeight:500}}>Dear Customer</h3>

 <p className="text-center">It will be a pleasure to design a customized garment for you.</p>
 <p className="text-center">Please do fill in your detail below</p>
  <p className="text-center">and one of our consultants will be in touch</p>
    <p className="text-center">with you shortly.</p>

 <div className="row pt-5">
        <div className=" text-center col-lg-6">
            <FormGroup className="d-flex align-items-center flex-column">
            <Label>First Name</Label>
            <Input className=" InputStyle "></Input>
            </FormGroup>
        </div>


        <div className="text-center col-lg-6">
            <FormGroup className="d-flex align-items-center flex-column">
            <Label>Last Name</Label>
            <Input  className=" InputStyle "></Input>
            </FormGroup>
        </div>
</div>


<div className="pt-3 text-center ">
<FormGroup className="d-flex align-items-center flex-column">
<Label >Email</Label>
<Input className=" InputStyle "></Input>
</FormGroup>
</div>


<div className="pt-3 text-center ">
<FormGroup className="d-flex align-items-center flex-column">
<Label>Contact Number</Label>
<Input  className=" InputStyle "></Input>
</FormGroup>
</div>


<div className="pt-3 text-center col">
<FormGroup className="d-flex align-items-center flex-column">
<Label>Date of Event</Label>
<Input type="date"  className=" InputStyle "></Input>
</FormGroup>
</div>


<div className="pt-3 text-center ">
<FormGroup className="d-flex align-items-center flex-column">
<Label>Nature of Event</Label>
<Input  className=" InputStyle "></Input>
</FormGroup>
</div>


<div className="pt-3 text-center ">
<Label>Message</Label>
<FormGroup className="d-flex align-items-center flex-column">
<Input   className=" InputStyleMessage " type="textarea"></Input>
</FormGroup>
</div>

<div className="pt-3 text-center ">
<FormGroup className="d-flex align-items-center flex-column">
<Label>Preferred Delivery Time</Label>
<Input  className=" InputStyle "></Input>
</FormGroup>
</div>


	<div className="desktop pt-5 nav-button d-flex align-items-center flex-column">
			  <a style={{width:"300px"}}
				href="https://merchant.onepay.lk/"
				>Submit</a>
			</div>


            <div className="phone pt-5 nav-button d-flex align-items-center flex-column">
			  <a style={{width:"500px"}}
				href="https://merchant.onepay.lk/"
				>Submit</a>
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
export default CustomOrder;