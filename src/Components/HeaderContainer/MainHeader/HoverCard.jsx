import React from 'react';
import styled from 'styled-components';
import {size, textSize} from "../../ReusableComponets/Sizes";
import colors from "../../ReusableComponets/Colors";

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: ${size.M};
`;

const SignInButton = styled.button`
  background-color: ${colors.quinary};
  padding: ${size.S} ${size.M};
  border: none;
  border-radius: ${size.XS};
  font-weight: bold;
  width: 100%;
  margin-bottom: ${size.S};
  cursor: pointer;
`;

const NewCustomerLink = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  font-size: ${textSize.XXS};
  display: block;
  text-align: center;
  margin-bottom: ${size.M};
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;
  
  const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: ${size.L};
`;

const ListTitle = styled.h3`
  font-size: ${textSize.S};
  margin-bottom: ${size.S};
`;

const ListItem = styled.li`
  margin-bottom: ${size.XS};
  
  a {
    color: ${colors.blue};
    text-decoration: none;
    font-size: ${textSize.XXS};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ListColumn = styled.div`
  width: 50%;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid ${colors.tertiary};
  margin: ${size.M} 0;
`;

function AmazonMenu() {
  return (
    <Container>
      <SignInButton>Sign in</SignInButton>
      <NewCustomerLink href="#">New customer? Start here.</NewCustomerLink>
      
      <ListContainer>
      <ListColumn>
          <ListTitle>Your Lists</ListTitle>
          <List>
            <ListItem><a href="#">Create a Wish List</a></ListItem>
            <ListItem><a href="#">Wish from Any Website</a></ListItem>
            <ListItem><a href="#">Baby Wishlist</a></ListItem>
            <ListItem><a href="#">Discover Your Style</a></ListItem>
            <ListItem><a href="#">Explore Showroom</a></ListItem>
          </List>
        </ListColumn>
        <HorizontalLine />
        <ListColumn>
          <ListTitle>Your Account</ListTitle>
          <List>
            <ListItem><a href="#">Your Account</a></ListItem>
            <ListItem><a href="#">Your Orders</a></ListItem>
            <ListItem><a href="#">Your Wish List</a></ListItem>
            <ListItem><a href="#">Your Recommendations</a></ListItem>
            <ListItem><a href="#">Your Prime Membership</a></ListItem>
            <ListItem><a href="#">Your Prime Video</a></ListItem>
            <ListItem><a href="#">Your Subscribe & Save Items</a></ListItem>
            <ListItem><a href="#">Memberships & Subscriptions</a></ListItem>
            <ListItem><a href="#">Your Seller Account</a></ListItem>
            <ListItem><a href="#">Manage Your Content and Devices</a></ListItem>
            <ListItem><a href="#">Your Free Amazon Business Account</a></ListItem>
          </List>
        </ListColumn>
      </ListContainer>
    </Container>
  );
}

export default AmazonMenu;