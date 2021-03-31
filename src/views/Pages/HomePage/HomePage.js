import React from 'react';
import $ from "jquery";
import Header from "../../../containers/DefaultLayout/Header.js";
import Footer from "../../../containers/DefaultLayout/Footer.js";
import Logo from "../../../assets/logo.jpg"
import pic1 from "../../../assets/pic1.jpg"
import pic2 from "../../../assets/pic2.jpg"
import pic3 from "../../../assets/pic3.jpg"
import axios from "axios";
import Products from "../Products/Products.js";
import {Link} from "react-router-dom";
class HomePage extends React.Component {

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
  
        this.getData();


window.addEventListener('scroll', this.onScrollVisit);
// console.log("value"+this.state.isLoadmore)
        // if (window.performance) {
        //     if (window.performance.navigation.type == 1) {
        //         window.location.replace('/');

        //     }
        // }

// 		        var scrollPos = 0;
//         window.onscroll = ()=>{
// console.log("its triggered")
//             try {
//                 const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//                 var productBoxEle=document.getElementById('productBox');
//                 var productBox=productBoxEle.scrollHeight*(75/100); 
//                 if(winScroll>(productBoxEle.offsetTop+productBox-400) &&((document.body.getBoundingClientRect()).top < scrollPos)){

//                     if (this.state.isLoadmore){
//                         this.state.next+=this.state.limit;
//                         this.loadmore();
//                         this.setState({
//                             loading:true
//                         })
//                         this.state.isLoadmore=false;
//                     }else {
//                         this.setState({
//                             loading:false
//                         })
//                     }

//                 }

//                 scrollPos = (document.body.getBoundingClientRect()).top;
//             }catch (e) {

//             }

//         };




    }

    componentWillUnmount() {
         
    window.removeEventListener('scroll', this.onScrollVisit);
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

    render() { 

            
        
        return(

            <div >
    <Header/>

	<section className="home-1-banner main-banner bg-img bg-6" id="home">
		<div className="container">
			<div className="row align-items-center justify-content-end">




				<div className="col-lg-4 col-md-7 " style={{paddingtop: "180px"}}>
					<div className="banner-content ">
						<div className="ovh ">
							<h2 className="title wow slideInUpBig text-right"  data-wow-duration=".65s" data-wow-delay=".1s">BATIK</h2>
						</div>
						<div className="ovh text-right" >
							<span className="sub-title wow slideInUpBig" data-wow-duration=".65s"
								data-wow-delay=".3s">WILL MAKE YOU<br></br> EXTRA GLOWY.</span>
						</div>



	

<div className="row justify-content-end" >
	<div className="nav-button  pt-4">
			  <a
				href="/collection"
				>Order Now</a>
			</div>

				</div>


					</div>
				</div>
		
			</div>
		</div>
	</section>


	<section className="home-1-banner main-banner bg-img bg-6b" id="home">
		<div className="container">
			<div className="row align-items-center justify-content-around">



				<div className="col-lg-8 col-md-7" >
					<div className="banner-content">
						<div className="ovh">
							<h2 style={{paddingBottom: "50px"}} className="sub-title2 wow slideInUpBig" data-wow-duration=".65s" data-wow-delay=".1s" >WE ARE ACCEPTING CUSTOM ORDERS</h2>
						</div>
						{/* <div className="ovh" style={{paddingbottom: "20px"}}>
							<span className="sub-title wow slideInUpBig" data-wow-duration=".65s"
								data-wow-delay=".3s">Introducing the most advanced social app on the market, the one you
								always wanted.</span>
						</div> */}



	

<div className="row justify-content-center" >

	<div className="nav-button  pt-4 pb-4">
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


<section className="d-flex justify-content-center pt-5" >
<div className="col-lg-10 " >
<div className="row " >

		<div className="col-lg-5">
				<img  className="img-fluid" src={Logo} alt="" height="472px"></img>
		</div>
		<div className="col-lg-6 pt-5">
		<h3><b>ABOUT US</b></h3>
				<p className="pt-3">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</p>
		</div>
</div>
</div>
</section>


<section   style={{paddingLeft:"15px",paddingRight:"15px",paddingTop:"177px",marginLeft:"auto",marginRight:"auto"}}>
<div className="d-flex justify-content-center" style={{paddingBottom:"126px"}}>
<h1><b>COLLECTIONS</b></h1>
</div>
                        {/* <div className="row" id="productBox">

                            {this.state.product.map(product=>(
                                <div key={product.id} className="col-lg-3 col-md-3 col-sm-6">
                                    <Products data={product} />
                                </div>

                            ))}
							</div> */}


                            <div className="row">
                            
                            <div className="d-flex justify-content-center col-lg-4">
                            <div style={{width:"80%"}}>
                            <img style={{width:"382px",height:"533px"}} className="img-fluid" src={pic1}/>
                             <h3 className="pt-4 pb-4">Random Kick</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            
                            </div>
                            </div>

                             <div className="d-flex justify-content-center col-lg-4">
                             <div style={{width:"80%"}}>
                            <img style={{width:"382px",height:"533px"}} className="img-fluid" src={pic2}/>
                             <h3 className="pt-4 pb-4">Vibrant Vibrance</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>

                             <div className="d-flex justify-content-center col-lg-4">
                             <div style={{width:"80%"}}>
                            <img style={{width:"382px",height:"533px"}} className="img-fluid" src={pic3}/>
                            <h3 className="pt-4 pb-4">Smooth Splash</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>
                            
                            </div>
</section>


<div>
<Link style={{ textDecoration: 'none' }} to="/collection">
<h1 style={{color:"blue"}} className="pt-5 pb-5 text-center"><b>Discover Now <i class="fa fa-caret-right" aria-hidden="true"></i></b></h1>
</Link>
</div>



	<section className="home-1-banner main-banner bg-img bg-6b2" id="home">
		<div className="container">
			<div className="row align-items-left justify-content-left">




				<div className="col-lg-5 col-md-6" >
                <div className="ovh pb-5">
                <h3 className="sub-title2 wow slideInUpBig" style={{color:"white",fontWeight:"700"}}><b>WE ARE <br></br>GLAD YOU ARE HERE</b></h3>
                </div>
					<div className="banner-content">
						<div className="ovh">
							<h1 className="sub-title2 wow slideInUpBig" data-wow-duration=".65s" data-wow-delay=".1s" style={{color:"white",fontSize:"50px"}}>LET US <br></br>MAKE YOUR <br></br> BATIK DRESS</h1>
						</div>
					



	

<div className="row justify-content-left" >

	<div className="nav-button" >
			  <a style={{width:"300px"}}
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
export default HomePage;