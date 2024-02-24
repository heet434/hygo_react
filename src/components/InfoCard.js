import React from "react";
import "./InfoCard.css";
import hyacinth from "../assets/hyacinth.png";
import germs from "../assets/germs.png";
import cotton from "../assets/cotton.png";
import { useParallax } from "react-scroll-parallax";

function InfoCard(props) {
    var info_card_align  = props.align === "left" ? "info-card_l" : "info-card_r";
    var viewBox_arrow = "0 0 30 "+props.arrow_h;
    var img_src = props.img === "hyacinth" ? hyacinth : props.img === "germs" ? germs : cotton; 
    
    function getNewLine(text){
        //split the text into separate p based on \n;
        var textArray = text.split('\n');
        var newText = [];
        for (var i = 0; i < textArray.length; i++){
            newText.push(<p style={{width: props.textW+"px"}}>{textArray[i]}</p>);
        }
        return newText;
    }
    var pText = getNewLine(props.content);
    const parallaxr = useParallax({
        // translateY: [-40,20],
        rotate: [150, 272],
        speed : 20,
        
    });
    const parallaxi = useParallax({
        // rotate: [150, 272],
        // speed : 20,
        
    });
    const parallaxl = useParallax({
        translateY: [-20, 10],
    });
    return (
        <div className={info_card_align}>
            <div className="info-card-image-border" ref={parallaxr.ref}>
                <div className="info-card-image" ref={parallaxi.ref}>
                    <img src={img_src} alt={props.alt} />
                </div>
            </div>
            
            <div className="info-card-arrow" ref={parallaxl.ref}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height={props.arrow_h} viewBox={viewBox_arrow} fill="none" >
                <path d="M14.9672 454.434L29.4337 440.033L15.0328 425.566L0.56628 439.967L14.9672 454.434ZM13.5 -0.0056818L12.5 439.994L17.5 440.006L18.5 0.0056818L13.5 -0.0056818Z" fill="#053805"/>
                </svg>
            </div>
            <div className="info-card-text">
                <h1>{props.title}</h1>
                <h1>{props.title2}</h1>
                {pText}
            </div>
        </div>
    );
}

export default InfoCard;