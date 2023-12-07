import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function MenJordan1(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Air Jordan 1 Mid'} breadcrumbText={'Men'}  crumbTextPath={'/men'} breadcrumbDeeper={'Air Jordan 1 Mid'} crumbDeeperPath={'/menJordan1'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./menShoe1.jpg'} itemName={'Air Jordan 1 Mid'} itemPrice={'£129.95'} />
      </div>
        
    );
}
