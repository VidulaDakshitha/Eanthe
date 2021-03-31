import React from 'react';
import {Link} from "react-router-dom";
import "./ProductStyle.css";
import cart from "../../../assets/cart.png";
class Products extends React.Component{

   constructor(props) {
       super(props);
       this.state={
           product:props.data,
           uid:localStorage.getItem('id'),
           qty:1,
           pid:props.data.id

       }
   }


      imgHover(id,image){
        document.getElementById(id).src=global.backend+image;
    }


   render() {
       return <>

           <div className="product-item pt-3">
               <div className="pi-pic">

                   { this.state.product.discount!=null?(
                       <div className="tag-sale" style={{'fontsize':12}}>{this.state.product.discount}% off</div>
                   ):(<></>)}
                   {this.state.product.images[1]!=null?(
                     <Link> <img style={{borderRadius:"30px"}}  src={global.backend+this.state.product.images[0]} id={this.state.product.id} alt={this.state.product.images[0]}
                            onMouseOut={()=>this.imgHover(this.state.product.id,this.state.product.images[0])}
                            onMouseMove={()=>this.imgHover(this.state.product.id,this.state.product.images[1])}
                            className="Pimage img"  /></Link>
                   ):(
                       <Link > <img src={global.backend+this.state.product.images[0]} id={this.state.product.id} alt={this.state.product.images[0]} className="Pimage"  /></Link>
                   )

                   }



                   <div className="pi-links">
                    
                       <div  className="addToCart">
                      
                       <i className="iconname2"></i>
                      
                       <span> <Link className="Link" to="/cart">ADD TO CART  </Link></span>
                     
                       </div>

                           <div  className="addToCart2">
                       <i className="iconname"></i>
                       <span><Link className="Link" to="/cart">BUY NOW </Link></span>
                       
                       </div>

                       {/* <div   className="wishlist-btn">   </div> */}
                   </div>
               </div>
               {/* <Link to={"/oneProduct/"+this.state.product.id}> 
               <div className="pi-text">
                   <h6>{this.state.product.price}$  </h6>
                   <p>{this.state.product.proName}</p>
               </div></Link> */}
               <div>
               
               <p className="text-center pt-3">{this.state.product.proName}</p>
               <h5 className="text-center"><b>RS. {this.state.product.price}</b></h5>
               </div>
               <div className="d-flex justify-content-center">
               <div style={{width:"50%"}} className="row  pt-3">
<div className="col-4 pt-2">
<button  className="productTags">XS</button>
</div>

<div className="col-4 pt-2">
<button  className="productTags">S</button>
</div>


<div className="col-4 pt-2">
<button  className="productTags">M</button>
</div>


<div className="col-4 pt-2">
<button className="productTags">L</button>
</div>


<div className="col-4 pt-2">
<button  className="productTags">XL</button>
</div>
</div>
</div>
           </div>

       </>;
   }
}
export default Products;