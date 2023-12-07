import React from "react";


const ItemShowcase = ({imgSrc,itemName,itemPrice}) => {
    return(
       <div className="container "> 
        <div className="row ">
          <div className="col-md-8 item-details">
            <img src={imgSrc}/>
          </div>
          <div className="col-md-4" id="about">
            <div className="about-info">
                <h3>{itemName} <br/> <br/> {itemPrice} </h3>
                
                <button className="size-button">XL</button>
                <button className="size-button">L</button>
                <button className="size-button">M</button>
                <button className="size-button">S</button>
               <div className="add-button"> <button >Add to Basket</button></div>
            </div>
          </div>
          
        </div>
        </div> 
    );
}

export default ItemShowcase;