import React from "react";
import "./ProductDisplay.css";
import img1 from '../assets/product1.png';
import img2 from '../assets/product2.png';


function ProductDisplay(props) {

    var num = 0;
    if(props.imgnum === 1){
        num = 1;
    }
    else if(props.imgnum === 2){
        num = 2;
    };
    var rotation = props.rotation;
    var rotationimg = props.rotationimg;
    return(
        <div className="product-display ">
            {/* <div className={`product-img-border1 ${rotation}`}></div> */}
            {/* <div className={`product-img-borderd ${rotation}`} style={{top:props.top+"vh", width:props.borderwidth+"vw", height:props.borderwidth+"vw"}}></div> */}
            <div className="product-img-container">
                <div className={`product-img-borderd ${rotation}`} style={{top:props.top+"vh", width:props.borderwidth+"vw", height:props.borderwidth+"vw", left:props.left+"vw"}}></div>
                <div className={`product-img ${rotationimg}`} style={{top:props.top+"vh", width:props.borderwidth+"vw", height:props.borderwidth+"vw", left:props.left+"vw"}} >
                    <img src={num === 1 ? img1 : img2} alt="product" style={{width:props.imgwidth+"vw"}}/>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay;