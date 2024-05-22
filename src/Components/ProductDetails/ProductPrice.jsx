import React, { useState } from 'react';
import './ProductPrice.css';
import Radio from '@mui/material/Radio';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ProductPrice() {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="price">
            <div className="withExchange">
                <div className="leftText">
                    <div>With Exchange</div>
                    <span>Up to &#8377; 17,450.00 off</span>
                </div>
                <Radio
                    className='right-select'
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>
            <div className="h2"></div>
            <div className="withoutExchange">
                <div className="leftText">
                    <div>Without Exchange</div>
                    <span>&#8377; 19,999.00 <span>&#8377; 24,999.0</span></span>
                </div>
                <Radio
                    className='right-select'
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </div>
            <div className="withoutExchange-content">
                <div className='free-delivery'>FREE delivery <span>Thursday, 23 May. </span>&nbsp;Details</div>
                <div className="fastest-delivery">Or fastest delivery <span className='today'>Today.&nbsp;</span>Order within <span className='time'>9 hrs 50 mins.</span><span>&nbsp;Details</span></div>
                <div className='locationicon'>
                    <LocationOnOutlinedIcon className='location-icon' />
                    <span className="update-location">update location</span>
                </div>
                <div className="instock">In Stock</div>
                <div className="company">Ships from<span>Amazon</span></div>
                <div className="owner">Sold by<span>Darshita Etel</span></div>
            </div>
        </div>
    );
}

export default ProductPrice;
