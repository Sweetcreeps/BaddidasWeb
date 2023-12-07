import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function MenCargoPants(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'B Malone Holster Cargo Track Pants'} breadcrumbText={'Men'}  crumbTextPath={'/men'} breadcrumbDeeper={'B Malone Holster Cargo Track Pants'} crumbDeeperPath={'/menCargoPants'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./Men-Cloth-2.jpg'} itemName={'B Malone Holster Cargo Track Pants'} itemPrice={'£55.00'} />
      </div>
        
    );
}
