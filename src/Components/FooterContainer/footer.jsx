import React from 'react';
import {
  FooterWrapper,
  Centered,
  Hr,
  FooterTop,
  FooterMiddle,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterBottom,
  FooterBottomRow,
  FooterBottomColumn,
  FooterBottomLink,
  FooterCopy,
  CopyLink,
  Logo
} from './footerstyles';

const Footer = () => {
  return (
    <FooterWrapper>
      

      <FooterTop>
        <a href="#nav-top">Back to top</a>
      </FooterTop>

      <FooterMiddle>
        <FooterColumn>
          <FooterTitle>Get to Know Us</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Press Releases</FooterLink>
          <FooterLink href="#">Amazon Science</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Connect with Us</FooterTitle>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Make Money with Us</FooterTitle>
          <FooterLink href="#">Sell on Amazon</FooterLink>
          <FooterLink href="#">Sell under Amazon Accelerator</FooterLink>
          <FooterLink href="#">Protect and Build Your Brand</FooterLink>
          <FooterLink href="#">Amazon Global Selling</FooterLink>
          <FooterLink href="#">Become an Affiliate</FooterLink>
          <FooterLink href="#">Fulfilment by Amazon</FooterLink>
          <FooterLink href="#">Advertise Your Products</FooterLink>
          <FooterLink href="#">Amazon Pay on Merchants</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Let Us Help You</FooterTitle>
          <FooterLink href="#">Your Account</FooterLink>
          <FooterLink href="#">Your Orders</FooterLink>
          <FooterLink href="#">Shipping Rates & Policies</FooterLink>
          <FooterLink href="#">Amazon Prime</FooterLink>
        </FooterColumn>
        </FooterMiddle>
        <Hr/>
        <FooterMiddle>
      <Centered>
        <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon Logo" />
      
      <FooterCopy>
        <CopyLink href="#">English</CopyLink>
        <CopyLink href="#">India</CopyLink>
        
      </FooterCopy></Centered>
   
      </FooterMiddle>
     
      <FooterBottom>
        <FooterBottomRow>
          <FooterBottomColumn>
            <FooterBottomLink href="#">AbeBooks<br />Books, art<br />& collectibles</FooterBottomLink>
            <FooterBottomLink href="#">Amazon Web Services<br />Scalable Cloud<br />Computing Services</FooterBottomLink>
          </FooterBottomColumn>
          <FooterBottomColumn>
            <FooterBottomLink href="#">Audible<br />Download<br />Audio Books</FooterBottomLink>
            <FooterBottomLink href="#">IMDb<br />Movies, TV<br />& Celebrities</FooterBottomLink>
          </FooterBottomColumn>
          <FooterBottomColumn>
            <FooterBottomLink href="#">Shopbop<br />Designer<br />Fashion Brands</FooterBottomLink>
            <FooterBottomLink href="#">Amazon Business<br />Everything For<br />Your Business</FooterBottomLink>
          </FooterBottomColumn>
          <FooterBottomColumn>
            <FooterBottomLink href="#">Prime Now<br />2-Hour Delivery<br />on Everyday Items</FooterBottomLink>
            <FooterBottomLink href="#">Amazon Prime Music<br />100 million songs, ad-free<br />Over 15 million podcast episodes</FooterBottomLink>
          </FooterBottomColumn>
        </FooterBottomRow>
      
    
         
            <FooterBottomLink href="#">Conditions of Use & Sale</FooterBottomLink>
            <FooterBottomLink href="#">Privacy Notice</FooterBottomLink>
            <FooterBottomLink href="#">Interest-Based Ads</FooterBottomLink>
            <br/>
            <FooterBottomLink href="#">&copy; 1996-2024, Amazon.com, Inc. or its affiliates</FooterBottomLink>
          
       
        </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
