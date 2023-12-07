import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function WomenNikeFleece(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Nike Sportswear Club Fleece'} breadcrumbText={'Women'}  crumbTextPath={'/women'} breadcrumbDeeper={'Nike Sportswear Club Fleece'} crumbDeeperPath={'/womenNikeFleece'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./Women-Cloth-2.jpg'} itemName={'Nike Sportswear Club Fleece'} itemPrice={'£45.95'} />
      </div>
        
    );
}
