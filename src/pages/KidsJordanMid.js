import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function KidsJordanMid(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Jordan Air 1 Mid Alt Infant'} breadcrumbText={'Kids'}  crumbTextPath={'/kids'} breadcrumbDeeper={'Jordan Air 1 Mid Alt Infant'} crumbDeeperPath={'/kidsJordanMid'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./kidsShoe1.jpg'} itemName={'Jordan Air 1 Mid Alt Infant'} itemPrice={'£50.00'} />
      </div>
        
    );
}
