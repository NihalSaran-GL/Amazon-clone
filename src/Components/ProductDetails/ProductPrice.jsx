import React from 'react';
import Radio from '@mui/material/Radio';

function ProductPrice({ selectedValue, handleChange }) {
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
        </div>
    );
}

export default ProductPrice;
