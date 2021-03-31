import React from 'react';
import Header from "../../../containers/DefaultLayout/Header.js";
import Footer from "../../../containers/DefaultLayout/Footer.js";
import cart from "../../../assets/cart.jpg";
import {Label,FormGroup,Input} from "reactstrap";
import Collection1 from "../../../assets/collection1.jpg"
import Collection2 from "../../../assets/collection2.jpg"
import Collection3 from "../../../assets/collection3.jpg"
import pic1 from "../../../assets/pic1.jpg"
import "./CollectionStyle.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import axios from "axios";
import Products from "../Products/Products.js";

class Collection extends React.Component {

        constructor(props) {

        super(props);
        this.state={

            product:[],
            isLoadmore:false,
            next:0,
            limit:3,
            loading:false,
            latestProduct:[]

        }


    }




    

onScrollVisit=(event)=>{


    
		        var scrollPos = 0;
      

            try {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                var productBoxEle=document.getElementById('productBox');

            
                var productBox=productBoxEle.scrollHeight*(75/100); 

                        
                if(winScroll>(productBoxEle.offsetTop+productBox-400) &&((document.body.getBoundingClientRect()).top < scrollPos)){

                    if (this.state.isLoadmore){
                        console.log("scrollPos")
                        this.state.next+=this.state.limit;
                        this.loadmore();
                        this.setState({
                            loading:true
                        })
                        this.state.isLoadmore=false;
                    }else {
                        this.setState({
                            loading:false
                        })
                    }

                }

                scrollPos = (document.body.getBoundingClientRect()).top;
            }catch (e) {

            }

       


}

    loadmore=async ()=>{
        await axios({
            methode: 'GET',
            url:'https://code-4-backend-1.herokuapp.com/product/getAllProduct',
            params:{s:true,sets:this.state.next,limit:this.state.limit}

        }).then(res=>{
            // console.log(res.data.length);
            if (res.data.length!=0){
                this.setState({
                    product:[...this.state.product,...res.data],
                    loading:false
                },()=>{
                    this.state.isLoadmore=true;
               
                });
            }else {
                this.state.isLoadmore=false;
            }

        }).catch(err=>{
            console.log(err);
        });
    }



    getData=async () =>{
        try {
            await axios({
                        methode: 'GET',
                        url:"https://code-4-backend-1.herokuapp.com/product/getAllProduct",
                        params:{s:true,sets:this.state.next,limit:this.state.limit}
                    }).then(res=>{
                        this.setState({
                            product:res.data,
                            isLoadmore:true
                        },()=>{
                            this.state.next=+this.state.limit;
                            this.state.isLoadmore=true;
                           
                        })
                    }).catch(err=>{
                        console.log(err);
                    });


        }catch (e) {

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

                this.getData();


window.addEventListener('scroll', this.onScrollVisit);
    }

    render(){


        return(

<div>
 <Header/>
<section className="paddingvalues3">
<div className="container">

<h1 className="text-center"><b>Collections</b></h1>



<div className=" DivStyle" style={{backgroundImage:`url(${Collection1})`,borderRadius:"50px",backgroundRepeat: 'no-repeat',backgroundSize:"100% 100%"}}>

<div style={{paddingTop:"150px"}} className=" d-flex justify-content-center">
<h1 style={{color:"white"}}>Random Kick Off</h1>
</div>

<div  style={{paddingTop:"100px",paddingRight:"25%"}} className=" d-flex justify-content-end">
<h5 data-toggle="collapse" data-target="#demo" style={{color:"white"}}><b style={{cursor:"pointer"}}>Discover
 <i class="pl-1 fa fa-caret-right" aria-hidden="true"></i></b></h5>
</div>

</div>




 

  <div id="demo" class="collapse">
  {/* <div className="d-flex justify-content-center" style={{paddingBottom:"126px"}}>
<h3><b>COLLECTIONS</b></h3>
</div> */}
                        <div className="row" id="productBox">

                            {this.state.product.map(product=>(
                                <div key={product.id} className="col-lg-4 col-md-4 col-sm-6">
                                    <Products data={product} />
                                </div>

                            ))}
							</div>
  </div>
		





<div className="DivStyle" style={{backgroundImage:`url(${Collection2})`,borderRadius:"50px",backgroundRepeat: 'no-repeat',backgroundSize:"100% 100%"}}>

<div style={{paddingTop:"150px"}} className=" d-flex justify-content-center">
<h1 style={{color:"white"}}>Smooth Splash</h1>
</div>

<div  style={{paddingTop:"100px",paddingRight:"25%"}} className=" d-flex justify-content-end">
<h5 data-toggle="collapse" data-target="#demo2" style={{color:"white"}}><b style={{cursor:"pointer"}}>Discover <i class="pl-1 fa fa-caret-right" aria-hidden="true"></i></b></h5>
</div>

</div>





  <div id="demo2" class="collapse">
  {/* <div className="d-flex justify-content-center" style={{paddingBottom:"126px"}}>
<h3><b>COLLECTIONS</b></h3>
</div> */}

                        <h3 className="text-center pt-5">No Items Yet</h3>
  </div>
		







<div className="DivStyle" style={{backgroundImage:`url(${Collection3})`,borderRadius:"50px",backgroundRepeat: 'no-repeat',backgroundSize:"100% 100%"}}>

<div style={{paddingTop:"150px"}} className=" d-flex justify-content-center">
<h1 style={{color:"white"}}>Vibrant Vibrance</h1>
</div>

<div  style={{paddingTop:"100px",paddingRight:"25%"}} className=" d-flex justify-content-end">
<h5 data-toggle="collapse" data-target="#demo3" style={{color:"white"}}><b style={{cursor:"pointer"}}>Discover <i class="pl-1 fa fa-caret-right" aria-hidden="true"></i></b></h5>
</div>

</div>

  <div id="demo3" class="collapse">
  {/* <div className="d-flex justify-content-center" style={{paddingBottom:"126px"}}>
<h3><b>COLLECTIONS</b></h3>
</div> */}

                        <h3 className="text-center pt-5">No Items Yet</h3>
  </div>
		

</div>
</section>

<h3  style={{marginTop:"195px"}} className="container hrline"><b>Or</b></h3>

	<section style={{marginTop:"195px"}} className="DivStyle2 home-1-banner main-banner bg-img bg-6c" id="home">
		<div className="container">
			<div className="row align-items-center justify-content-around">



				<div className="col-lg-8 col-md-7" style={{paddingtop: "180px"}}>
					<div className="banner-content">
						<div className="ovh">
							<h2 className="sub-title2 wow slideInUpBig" data-wow-duration=".65s" data-wow-delay=".1s" style={{}}>WE ARE ACCEPTING CUSTOM ORDERS</h2>
						</div>
						{/* <div className="ovh" style={{paddingbottom: "20px"}}>
							<span className="sub-title wow slideInUpBig" data-wow-duration=".65s"
								data-wow-delay=".3s">Introducing the most advanced social app on the market, the one you
								always wanted.</span>
						</div> */}



	

<div className="row justify-content-center" >

	<div className="nav-button  pt-4">
			  <a
				href="/order"
				>Order Now</a>
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
export default Collection;