import React from "react";
import "./Specs.css";

function Specs(props) {
    return(
        <div className="specs" style={{height: props.height+"vh", width: props.width + "vw"}}>
            <div className="specs-container">
                <div className="specs-title" style={{height: props.height/5+"vh",width: props.width+"vw"}}>
                    <h2>SPECIFICS</h2>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="379" height="2" viewBox="0 0 379 2" fill="none" id="b1">
                    <path d="M379 1L1.12057e-05 0.999993" stroke="url(#paint0_radial_180_198)" stroke-dasharray="18 18"/>
                    <defs>
                    <radialGradient id="paint0_radial_180_198" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(189.5 1.5) rotate(-180) scale(189.5 0.5)">
                    <stop offset="0.635" stop-color="#BAEE83"/>
                    <stop offset="1" stop-color="#012317"/>
                    </radialGradient>
                    </defs>
                </svg>
                <div className="specs-row" id="sr-1">
                    <div className="specs-cell" id="s11" style={{width: props.width/2 + "vw"}}><p>Bio-degradable</p></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50" viewBox="0 0 2 50" fill="none">
                        <path d="M1 0L1.00001 50" stroke="url(#paint0_radial_180_196)" stroke-dasharray="5 5"/>
                        <defs>
                        <radialGradient id="paint0_radial_180_196" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 20) rotate(90) scale(20 0.5)">
                        <stop offset="0.635" stop-color="#BAEE83"/>
                        <stop offset="1" stop-color="#012317"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    <div className="specs-cell" id="s12" style={{width: props.width/2 + "vw"}}><p>Portable</p></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="312" height="2" viewBox="0 0 312 2" fill="none" id="b2">
                    <path d="M311.127 1.31348L0 1.31347" stroke="url(#paint0_radial_180_197)" stroke-dasharray="18 18"/>
                    <defs>
                    <radialGradient id="paint0_radial_180_197" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.563 1.81347) rotate(-180) scale(155.563 0.5)">
                    <stop offset="0.635" stop-color="#BAEE83"/>
                    <stop offset="1" stop-color="#012317"/>
                    </radialGradient>
                    </defs>
                </svg>
                <div className="specs-row" id="sr-2">
                    <div className="specs-cell" id="s21" style={{width: props.width/2 + "vw"}}><p>FLushable</p></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="50" viewBox="0 0 2 50" fill="none">
                        <path d="M1 0L1.00001 50" stroke="url(#paint0_radial_180_196)" stroke-dasharray="5 5"/>
                        <defs>
                        <radialGradient id="paint0_radial_180_196" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 20) rotate(90) scale(20 0.5)">
                        <stop offset="0.635" stop-color="#BAEE83"/>
                        <stop offset="1" stop-color="#012317"/>
                        </radialGradient>
                        </defs>
                    </svg>
                    <div className="specs-cell" id="s22" style={{width: props.width/2 + "vw"}}><p>Fragrant</p></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="312" height="2" viewBox="0 0 312 2" fill="none" id="b2">
                    <path d="M311.127 1.31348L0 1.31347" stroke="url(#paint0_radial_180_197)" stroke-dasharray="18 18"/>
                    <defs>
                    <radialGradient id="paint0_radial_180_197" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.563 1.81347) rotate(-180) scale(155.563 0.5)">
                    <stop offset="0.635" stop-color="#BAEE83"/>
                    <stop offset="1" stop-color="#012317"/>
                    </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Specs;