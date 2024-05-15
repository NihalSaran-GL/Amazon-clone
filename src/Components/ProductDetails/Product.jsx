import React from 'react'
import { Footer } from '../Footer/Footer';
import { FooterBottom } from '../Footer/FooterBottom/FooterBottom';
import Navbottom from '../Navbar/navbottom/navbottom';
import Navbar from '../Navbar/Navbar';
import { FooterSignIn } from '../Footer/FooterSignIn/FooterSignIn'

function Product() {
    return (
        <div className='Product-main-page'>
            <Navbar />
            <Navbottom />
            <FooterSignIn />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Product;
