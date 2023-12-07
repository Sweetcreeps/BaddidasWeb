import React from "react";
import {Link} from 'react-router-dom';


export default function Home () {
    return(
    <>
        <div className="container-fluid">
            
            <div className="row " >
                <div className="col-md-12 text image-with-text">
                    <div className="text-overlay"><Link to="/women" > <h2>Shop Now</h2> </Link></div>
                    <img className="home-img" src="./Mainimg.jpg" fluid />
                    
                </div>

            </div>

            <div class="row main-display">
		        <div class="col-md-4 img-overlay">
                    <div className="text-overlay"><Link to="/Men" > <h2>Shop Men</h2> </Link></div>
                    <img src="./Clothing-Men-Sports.jpg"/>
		        </div>
		        <div class="col-md-4 img-overlay"> 
                <div className="text-overlay"><Link to="/Women" > <h2>Shop Women</h2> </Link></div>
                <img src="./Women-Clothing-Sports.jpg"/>

		        </div>
		        <div class="col-md-4 img-overlay">
                <div className="text-overlay"><Link to="/Women" > <h2>Shop Kids</h2> </Link></div>
                <img src="./Kids-Clothing-Sports.jpg"/>

		        </div>
	        </div>


            
         </div>

            
        
    </>
    )
}


