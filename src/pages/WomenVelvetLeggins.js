import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function WomenVelvetLeggins(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Adidas Velvet Panel Leggins'} breadcrumbText={'Women'}  crumbTextPath={'/women'} breadcrumbDeeper={'Adidas Velvet Panel Leggins'} crumbDeeperPath={'/womenVelvetLeggins'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./womenCloth1.jpg'} itemName={'Adidas Originals Velvet Panel Leggings'} itemPrice={'£40.00'} />
      </div>
        
    );
}




