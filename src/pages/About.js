import React from "react";
import "./About.css";
import InfoCard from "../components/InfoCard";
import GridLines from "react-gridlines"
import { useInView } from 'react-intersection-observer';

// import hyacinth from "../assets/hyacinth.png";
var hyacinth_text = 
`Water hyacinth is a weed, a parasite that can duplicate itself every nine days. Due to its fast growing nature, the weed quickly spread across most of the wetlands in India.

It poses several threats like:
It covers the surface layer of the water body and blocks sunlight from entering automatically degrading aquatic life.
Aquatic animals and plants die due to lack of oxygen as water hyacinth releases an excessive amount of CO2 and also methane.
It clogs waterways and chokes village ponds. It affects irrigation directly.
Breeding ground for diseases caused by mosquitoes.`;

var cotton_text =
`Over 100 million tons of cotton waste is produced annually, representing 35–40% of global textile waste. 
However, less than 30% of cotton waste is recycled annually. 
Consequences:
The waste not recycled is dumped into landfills or burnt, which generates methane and CO2, both potent greenhouse gases.
This also causes a lot of land pollution.`;

var germs_text =
`With the growing population, unhygienic commodes are a very common occurrence. 
 These, when used, pose several threats to personal hygiene. 
 In India itself, over 10 Lakh of groin fungal infections, known as tinea cruris are reported and a lot more go unreported.`
function About() {
    const [ref, inView] = useInView({
        threshold: 0,
    });
    const [ref2, inView2] = useInView({
        threshold: 0,
    });
    const [ref3, inView3] = useInView({
        threshold: 0,
    });
    
    return (
        <GridLines className="grid-area" cellWidth={111} strokeWidth={2} cellWidth2={111} lineColor="#BAEE83">
            
        <div className="about" id="about">
            {/* <GridLines className="grid-area" cellWidth={111} strokeWidth={1} cellWidth2={111} lineColor="#BAEE83"> */}
            <div className="about-content">
                <div id="c1" className={`info-card-container hidden ${inView ? 'visible':''}`} ref={ref}>
                    <InfoCard key={1} align="left" img='hyacinth' alt="Hyacinth" title="About Hyacinth" content={hyacinth_text} arrow_h={455} textW = {629} />
                </div>
                <div id="c2" className={`info-card-container hidden ${inView2 ? 'visible':''}`} ref={ref2}>
                    <InfoCard key={2} align="right" img='cotton' alt="Cotton" title="Cotton Waste generation" content={cotton_text} arrow_h={455} textW = {453}/>
                </div>
                <div id="c3" className={`info-card-container hidden ${inView3 ? 'visible':''}`} ref={ref3}>
                    <InfoCard key={3} align="left" img='germs' alt="Dirty Seat" title="Hazards of" title2="Unhygienic Commodes"content={germs_text} arrow_h={455} textW = {467} />
                </div>
            </div>
            {/* </GridLines> */}
        </div>
        </GridLines>
    );
}

export default About;