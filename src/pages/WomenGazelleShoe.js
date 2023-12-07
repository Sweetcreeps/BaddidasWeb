import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function WomenGazelleShoe(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'GAZELLE BOLD SHOES'} breadcrumbText={'Women'}  crumbTextPath={'/women'} breadcrumbDeeper={'GAZELLE BOLD SHOES'} crumbDeeperPath={'/womenGazelleShoe'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./womenShoe1.jpg'} itemName={'GAZELLE BOLD SHOES'} itemPrice={'£90.00'} />
      </div>
        
    );
}


