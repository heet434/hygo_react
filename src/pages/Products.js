import React from "react";
import "./Products.css";
import texture from '../assets/textures/texture.png';
import Product1 from "../components/ProductDisplay";
import Product2 from "../components/ProductDisplay";
import Specs from "../components/Specs";
import Buy from "../components/Buy";
import nextIcon from "../assets/icons/next.png";
import Payment from "./Payment";
// import { Link } from "react-router-dom";
// import { useState } from "react";


function Products(props) {


    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    function openModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <div className="products" id="products-page">
            <Payment modalIsOpen={modalIsOpen} closeModal={closeModal} product={"Hyacinth Sheets"} price={100}/>
            <div className="products-container">
                <div className="products-overlay">
                    <img src={texture}/>
                </div>
                <div className="products-content">
                    <div className="product-title">
                        <h1>WATER HYACINTH BASED SHEET</h1>
                        <Specs height={35} width={24}/>
                    </div>
                    <div className="product-samples sample1" id="p1sample1">
                        <Product1 imgnum={1} rotation={"rotate-left"} rotationimg={"rotate-right"} imgwidth={16} top={35} borderwidth={20} left={5.5}/>
                        <Buy height={11} width={16} openModal= {openModal}/>
                    </div>
                    <div className="product-samples sample2" id="p1sample2">
                        <Product2 imgnum={2} rotation={"rotate-right"} rotationimg={"rotate-left"} imgwidth={40} top={25} borderwidth={27} left={10}/>
                        <div className="next-icon">
                            <img src={nextIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Products;