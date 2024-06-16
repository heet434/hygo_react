import React from 'react';
import './Solution.css';
import p1 from '../assets/product1.png';
import p2 from '../assets/product2.png';
import GridLines from "react-gridlines"


const hyacinth_text = `
We introduce to you water hyacinth based paper sheets for your washroom hygiene. These sheets are portable, foldable, flushable and bio-degradable. 

Whenever you go for a loo, take these with you for an enhanced washroom experience. 
Also a fragrance is added to the product for added luxury, so you don’t have to worry about bad washroom smell.`;

const cotton_text = `
Our other product is made from recycled cotton waste paper. 
This solves the issue of tons of cotton waste generated across the world while also providing comfortable paper for our sheets. 

These also come with a fragrance for added experience and luxury. 

You can take these too with you when you go to the washroom, pop the centre part open and lay the sheet on the commode to avoid skin contact with the unhygienic commode seat.`;


function Solution(props) {
    function getNewLine(text){
        //split the text into separate p based on \n;
        var textArray = text.split('\n');
        var newText = [];
        for (var i = 0; i < textArray.length; i++){
            newText.push(<p key={i} >{textArray[i]}</p>);
        }
        return newText;
    }
    
    return (
     <div className="solution">
        <div className="solution-bg" >
            <GridLines className="grid-area2" cellWidth={150} strokeWidth={2} cellWidth2={150} lineColor="#628D50;">
                <div className="grid-bg">
                </div>
            </GridLines>
        </div>
        <div className='content'>
            <div className="solution-title">
                <h1>S</h1>
                <h1>O</h1>
                <h1>L</h1>
                <h1>U</h1>
                <h1>T</h1>
                <h1>I</h1>
                <h1>O</h1>
                <h1>N</h1>
            </div>
            <div className='solution-content' >
                <div>
                    <article>
                        <h2>Hyacinth</h2><br></br>
                        {getNewLine(hyacinth_text)}
                    </article>
                    <div className='product-images'>
                        <img src={p1} alt="Hyacinth Product" />
                    </div>
                </div>
                <div>
                    <div className='product-images'>
                        <img src={p2} alt="Cotton Product" />
                    </div>
                    <article>
                        <h2>Cotton</h2><br></br>
                        {getNewLine(cotton_text)}
                    </article>
                </div>
            </div>
        </div>
        {/* </GridLines> */}
     </div>
    );

}

export default Solution;