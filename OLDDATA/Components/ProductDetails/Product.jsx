import React, { useEffect, useState } from 'react';
import './Product.css';
import shareLogo from '../../assets/sharelogo.png';
import rating from '../../assets/rating.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import amazonchoice from '../../assets/amazon-choice.png';
import ProductPrice from './ProductPrice';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null); // State variable to store main product image
    const { id } = useParams();

    useEffect(() => {
        // Fetch product data based on the id parameter
        fetch(`https://api-amazon-clone.vercel.app/products/${id}`)
     //   fetch(`http://localhost:3001/products/${id}`)  npx json-server --watch data/db.json --port 3001
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setMainImage(data.src); // Set initial main image to the first preview image
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [id]);

    const handleImageClick = (imageUrl) => {
        // Update the main product image when a preview image is clicked
        setMainImage(imageUrl);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='product-main-page'>
            <div className="productPage-container">
                <div className="productDescription-container">
                    <div className="view">
                        <div className="otherView">
                            <span className="preview select">
                                <img className='pi' src={product.images[0].src1} alt="Product" onClick={() => handleImageClick(product.images[0].src1)} />
                            </span>
                            <span className="preview">
                                <img className='pi2' src={product.images[1].src2} alt="Product" onClick={() => handleImageClick(product.images[1].src2)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={product.images[2].src3} alt="Product" onClick={() => handleImageClick(product.images[2].src3)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={product.images[3].src4} alt="Product" onClick={() => handleImageClick(product.images[3].src4)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={product.images[4].src5} alt="Product" onClick={() => handleImageClick(product.images[4].src5)} />
                            </span>
                            <span className="preview">
                                <img className='pi' src={product.images[5].src6} alt="Product" onClick={() => handleImageClick(product.images[5].src6)} />
                            </span>
                        </div>
                        <img src={mainImage} alt={product.title} /> {/* Display the main product image */}
                        <span className="note">Roll over image to zoom in</span>
                        <img className='shareLogo' src={shareLogo} alt="" />
                    </div>
                    <div className="description">
                        <div className="Text">
                            <div className="title">
                                <div className='image-tittle'>{product.title}</div>
                            </div>
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
