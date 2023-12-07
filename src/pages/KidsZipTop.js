import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function KidsZipTop(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={"Nike Girls' Fitness Long Sleeve 1/2 Zip Top Junior"} breadcrumbText={'Kids'}  crumbTextPath={'/kids'} breadcrumbDeeper={"Nike Girls' Fitness Long Sleeve 1/2 Zip Top Junior"} crumbDeeperPath={'/kidsZipTop'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./kidsCloth2.jpg'} itemName={"Nike Girls' Fitness Long Sleeve 1/2 Zip Top Junior"} itemPrice={'£40.00'} />
      </div>
        
    );
}
