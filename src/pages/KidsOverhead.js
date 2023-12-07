import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ItemShowcase from "../components/ItemShowcase";

export default function KidsOverhead(){
    return(
      <div className="conainer-fluid">
        <div className="row">
                <div className="col-md-12">
                    <Breadcrumbs pageTitle={'Hoodrich Certify Overhead Hoodie Junior'} breadcrumbText={'Kids'}  crumbTextPath={'/kids'} breadcrumbDeeper={'Hoodrich Certify Overhead Hoodie Junior'} crumbDeeperPath={'/kidsOverhead'}/>
                </div>
            </div>
        <ItemShowcase imgSrc={'./Men-Cloth-2.jpg'} itemName={'Hoodrich Certify Overhead Hoodie Junior'} itemPrice={'£45.00'} />
      </div>
        
    );
}
