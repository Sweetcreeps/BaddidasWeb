import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Men(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Men'} breadcrumbText={'Men'}  crumbTextPath={'/men'} />
                </div>
            </div>
	        <div className="row list-row-1">
		        <div className="col-md-4 product-list-items">
                   <Link to='/menNapapijri'> 
                     <img src="./menCloth1.jpg"/>
                     <div>
                        <p>Napapijri Salis Small Logo T-Shirt</p>
                        <h4 className="item-price"><strong>£30.00</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div className="col-md-4 product-list-items">
                <Link to='/menJordan1'>
                    <img src="./menShoe1.jpg"/>
                    <div>                   
                            <p>Air Jordan 1 Mid</p>
                            <h4 className="item-price"><strong>£129.95</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div className="col-md-4 product-list-items">
                <Link to='/menCargoPants'> 
                    <img src="./menCloth2.jpg"/>
                <div>
                        <p>B Malone Holster Cargo Track Pants</p>
                        <h4 className="item-price"><strong>£55.00</strong></h4>
                        </div>
                        </Link>
		        </div>
	        </div>
            <div className="row list-row-1">
		        <div className="col-md-4 product-list-items">
                   <Link to=''> 
                     <img src="./menCloth3.jpg"/>
                     <div>
                        <p>Hoodrich Empire T-Shirt</p>
                        <h4 className="item-price"><strong>£38.00</strong></h4>
                        </div>   
                   </Link>
		        </div>
		        <div className="col-md-4 product-list-items">
                <Link to=''>
                    <img src="./menShoe2.jpg"/>
                    <div>                   
                            <p>Jumpman MVP</p>
                            <h4 className="item-price"><strong>£154.95</strong></h4>
                            </div>  
                            </Link > 
		            </div>
		        <div className="col-md-4 product-list-items">
                    <img src="./menCloth4.jpg"/>
                <div>
                        <p>Hoodrich Core Large Logo Joggers</p>
                        <h4 className="item-price"><strong>£45.00</strong></h4>
                        </div>
		        </div>
	        </div>
	        
        </div>
    );
}