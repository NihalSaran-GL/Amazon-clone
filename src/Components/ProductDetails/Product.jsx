import React, { useState } from 'react';
import './Product.css';
import productImage from '../../assets/productimg.jpg';
import productImage2 from '../../assets/productimg2.png';
import productImage3 from '../../assets/productimg3.jpg';
import productImage4 from '../../assets/productimg4.jpg';
import productImage5 from '../../assets/productimg5.jpg';
import productImage6 from '../../assets/productimg6.jpg';
import shareLogo from '../../assets/sharelogo.png';
import rating from '../../assets/rating.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import amazonchoice from '../../assets/amazon-choice.png';
import ProductPrice from './ProductPrice'; 

function ProductPage() {
    const [selectedImage, setSelectedImage] = useState(productImage);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='product-main-page'>
            <div className="productPage-container">
                <nav className="productPage-navbottom">
                    {/* Navigation items */}   {/* <span className="li-1">Electronics</span>
                    <span className="li">Mobiles & Accessories</span>
                    <span className="li">laptops & Accessories</span>
                    <span className="li">TV & Home Entertainment</span>
                    <span className="li">Audio</span>
                    <span className="li">Cameras</span>
                    <span className="li">Computer Peripherals</span>
                    <span className="li">Smart Technology</span>
                    <span className="li">Musical Instruments</span>
                    <span className="li">Office & Stationery</span> */}
                </nav>
                {/* <span className='productDirectory'>
                    <span>Electronics</span>
                    <span>›</span>
                    <span>Mobiles & Accessories</span>
                    <span>›</span>
                    <span>Smartphones & Basic Mobiles</span>
                    <span>›</span>
                    <span>Smartphones</span>
                </span> */}
                <div className="productDescription-container">
                    <div className="view">
                        <div className="otherView">
                            <span className="preview select">
                                <img className='pi' src={productImage} alt="Product" onClick={() => handleImageClick(productImage)} />
                            </span>
                            <span className="preview">
                                <img className='pi2' src={productImage2} alt="Product" onClick={() => handleImageClick(productImage2)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={productImage3} alt="Product" onClick={() => handleImageClick(productImage3)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={productImage4} alt="Product" onClick={() => handleImageClick(productImage4)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={productImage5} alt="Product" onClick={() => handleImageClick(productImage5)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={productImage6} alt="Product" onClick={() => handleImageClick(productImage6)} />
                            </span>
                        </div>
                        <img src={selectedImage} alt="Product" />
                        <span className="note">Roll over image to zoom in</span>
                        <img className='shareLogo' src={shareLogo} alt="" />
                    </div>
                    <div className="description">
                        <div className="Text">
                            <div className="title">iQOO Z9 5G (Brushed Green, 8GB RAM, 128GB Storage) | Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box</div>
                            <div className="store"><a href="">Visit the iQOO Store</a></div>
                            <div className="rating">
                                <span>4.2</span>
                                <img src={rating} alt="" />
                                <ArrowDropDownIcon className='arrow' />
                                <span className="ratingCount">1,827 ratings</span>
                                <span className='ml'>|</span>
                                <span className="ratingCount ml">Search this page</span>
                            </div>
                            <img src={amazonchoice} alt="" />
                            <div className="bought">5K+ bought in past month</div>
                            <div className="hl"></div>
                        </div>
                        <ProductPrice />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
