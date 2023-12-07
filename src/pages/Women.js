import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Women(){
    return(
        <div class="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Women'} breadcrumbText={'Women'}  crumbTextPath={'/women'} />
                </div>
            </div>
	        <div class="row list-row-1">
		        <div class="col-md-4 product-list-items">
                   <Link to='/womenVelvetLeggins'> 
                     <img src="./womenCloth1.jpg"/>
                     <div>
                        <p>Adidas Originals Velvet Panel Leggings</p>
                        <h4 className="item-price"><strong>£40.00</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div class="col-md-4 product-list-items">
                <Link to='/womenGazelleShoe'>
                    <img src="./womenShoe1.jpg"/>
                    <div>                   
                            <p>GAZELLE BOLD SHOES</p>
                            <h4 className="item-price"><strong>£90.00</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div class="col-md-4 product-list-items">
                <Link to='/womenNikeFleece'>
                    <img src="./womenCloth2.jpg"/>
                <div>
                        <p>Nike Sportswear Club Fleece</p>
                        <h4 className="item-price"><strong>£49.95</strong></h4>
                        </div>
                        </Link>
		        </div>
	        </div>
            <div class="row list-row-1">
		        <div class="col-md-4 product-list-items">
                   <Link to=''> 
                     <img src="./womenCloth3.jpg"/>
                     <div>
                        <p>Nike Sportswear</p>
                        <h4 className="item-price"><strong>£59.95</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div class="col-md-4 product-list-items">
                <Link to=''>
                    <img src="./womenCloth4.jpg"/>
                    <div>                   
                            <p>Nike Sportswear Phoenix Fleece</p>
                            <h4 className="item-price"><strong>£54.95</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div class="col-md-4 product-list-items">
                    <img src="./womenShoe2.jpg"/>
                <div>
                        <p>adidas Originals Falcon Women's</p>
                        <h4 className="item-price"><strong>£85.00</strong></h4>
                        </div>
		        </div>
	        </div>
	        
        </div>
    )
}
