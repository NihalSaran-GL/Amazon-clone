import React from 'react'
import './Product.css'
import { Footer } from '../Footer/Footer';
import { FooterBottom } from '../Footer/FooterBottom/FooterBottom';
import Navbottom from '../Navbar/navbottom/navbottom';
import Navbar from '../Navbar/Navbar';
import { FooterSignIn } from '../Footer/FooterSignIn/FooterSignIn'

function Product() {
    return (
        <div className='product-main-page'>
            <Navbar />
            <Navbottom />

            <div className="productPage-container">
                <nav className="productPage-navbottom">
                    <span className="li-1">Electronics</span>
                    <span className="li">Mobiles & Accessories</span>
                    <span className="li">laptops & Accessories</span>
                    <span className="li">TV & Home Entertainment</span>
                    <span className="li">Audio</span>
                    <span className="li">Cameras</span>
                    <span className="li">Computer Peripherals</span>
                    <span className="li">Smart Technology</span>
                    <span className="li">Musical Instruments</span>
                    <span className="li">Office & Stationery</span>
                </nav>
                <span className='productDirectory'>
                    <span>Electronics</span>
                    <span>›</span>
                    <span>Mobiles & Accessories</span>
                    <span>›</span>
                    <span>Smartphones & Basic Mobiles</span>
                    <span>›</span>
                    <span>Smartphones</span>
                </span>
                <div className="productDescription-container">
                    <div className="view">Photos</div>
                    <div className="description">Description</div>
                </div>
            </div>

            <FooterSignIn />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Product;
