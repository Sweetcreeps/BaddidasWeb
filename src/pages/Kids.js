import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Kids(){
    return(
        <div class="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Kids'} breadcrumbText={'Kids'}  crumbTextPath={'/kids'} />
                </div>
            </div>
	        <div class="row list-row-1">
		        <div class="col-md-4 product-list-items">
                   <Link to='/kidsOverhead'> 
                     <img src="./kidsCloth1.jpg"/>
                     <div>
                        <p>Hoodrich Certify Overhead Hoodie Junior</p>
                        <h4 className="item-price"><strong>£45.00</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div class="col-md-4 product-list-items">
                <Link to='/kidsZipTop'>
                    <img src="./kidsCloth2.jpg"/>
                    <div>                   
                            <p>Nike Girls' Fitness Long Sleeve 1/2 Zip Top Junior</p>
                            <h4 className="item-price"><strong>£40.00</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div class="col-md-4 product-list-items">
                <Link to='/kidsJordanMid'>
                    <img src="./KkdsShoe1.jpg"/>
                <div>
                        <p>Jordan Air 1 Mid Alt Infant</p>
                        <h4 className="item-price"><strong>£50.00</strong></h4>
                        </div>
                        </Link>
		        </div>
	        </div>
            <div class="row list-row-1">
		        <div class="col-md-4 product-list-items">
                   <Link to=''> 
                     <img src="./kidsShoe2.jpg"/>
                     <div>
                        <p>GAZELLE SHOES</p>
                        <h4 className="item-price"><strong>£55.00</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div class="col-md-4 product-list-items">
                <Link to=''>
                    <img src="./kidsCloth3.jpg"/>
                    <div>                   
                            <p>CR7</p>
                            <h4 className="item-price"><strong>£59.95</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div class="col-md-4 product-list-items">
                    <img src="./kidsCloth4.jpg"/>
                <div>
                        <p>Nike Dri-FIT Challenger</p>
                        <h4 className="item-price"><strong>£27.95</strong></h4>
                        </div>
		        </div>
	        </div>
	        
        </div>
    );
}