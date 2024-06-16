import React from 'react';
import './Buy.css';
function Buy(props) {
    return (
        <div className="buy" style={{height:props.height+"vh", width:(props.width)+"vw"}} >
            <div className="buy-container" style={{height:props.height+"vh", width:props.width+"vw"}}>
                <div className="buy-col">
                    <div className='buy-row' style={{width:props.width/2+"vw", height:props.height/2+"vh"}}>
                        <p>100₹</p>
                    </div>
                    <div className='buy-row buy-row-b' style={{width:props.width/2+"vw"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="2" viewBox="0 0 90 2" fill="none" >
                            <path d="M0 1L108.019 1" stroke="url(#paint0_radial_180_190)" stroke-dasharray="18 18"/>
                            <defs>
                            <radialGradient id="paint0_radial_180_190" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.0093 0.500001) scale(54.0093 0.5)">
                            <stop offset="0.635" stop-color="#BAEE83"/>
                            <stop offset="1" stop-color="#628D50"/>
                            </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='buy-row' style={{width:props.width/2+"vw", height:props.height/2+"vh"}}>
                        <p>pack of 10</p>
                    </div>
                </div>
                <div className='buy-col-b'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="108" viewBox="0 0 4 108" fill="none">
                    <path d="M1 0L3 108" stroke="url(#paint0_radial_180_189)" stroke-dasharray="18 18"/>
                    <defs>
                    <radialGradient id="paint0_radial_180_189" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.49992 53.9907) rotate(88.9391) scale(54.0093 0.5)">
                    <stop offset="0.635" stop-color="#BAEE83"/>
                    <stop offset="1" stop-color="#628D50"/>
                    </radialGradient>
                    </defs>
                    </svg>
                </div>
                <div className="buy-col">
                    <div className='buy-row' style={{width:props.width/2+"vw", height:props.height+"vh"}}>
                        <h3>
                            <div className="buy-icon" onClick={props.openModal}>
                                <u>BUY</u>
                            </div>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy;