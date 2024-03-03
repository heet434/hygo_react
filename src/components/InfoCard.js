import React from "react";
import "./InfoCard.css";
import hyacinth from "../assets/hyacinth.png";
import germs from "../assets/germs.png";
import cotton from "../assets/cotton.png";
import { useInView } from 'react-intersection-observer';
// import { useParallax } from "react-scroll-parallax";

function InfoCard(props) {
    var info_card_align  = props.align === "left" ? "info-card_l" : "info-card_r";
    var viewBox_arrow = "0 0 30 "+props.arrow_h;
    var img_src = props.img === "hyacinth" ? hyacinth : props.img === "germs" ? germs : cotton; 
    
    const [border_ref, inView] = useInView({
        threshold: 0,
    });
    const [img_ref, inView2] = useInView({
        threshold: 0,
    });

    
    function getNewLine(text){
        //split the text into separate p based on \n;
        var textArray = text.split('\n');
        var newText = [];
        for (var i = 0; i < textArray.length; i++){
            newText.push(<p key={i} style={{width: props.textW+"px"}}>{textArray[i]}</p>);
        }
        return newText;
    }
    var pText = getNewLine(props.content);
    return (
        <div className={info_card_align}>
            <div className={`info-card-image-border ${inView ? 'cardb_visible':''}`} ref={border_ref}>
                <div className={`info-card-image ${inView2 ? 'card_visible':''}`}ref={img_ref}>
                    <img src={img_src} alt={props.alt} />
                </div>
            </div>
            
            <div className="info-card-arrow">
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