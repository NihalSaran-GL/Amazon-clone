import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { size, textSize } from "../ReusableComponets/Sizes";
import colors from "../ReusableComponets/Colors";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// Fetch cart items from Firestore or local storage
const fetchCartItems = async () => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;
  let cartItems = [];

  if (user) {
    // Fetch cart items from Firestore
    const userCartRef = doc(db, 'users', user.uid);
    const userCartDoc = await getDoc(userCartRef);

    if (userCartDoc.exists()) {
      cartItems = userCartDoc.data().cart || [];
    }
  } else {
    // Fetch cart items from local storage
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  }

  return cartItems;
};

const updateCart = async (cartItems) => {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  if (user) {
    // Update Firestore
    const userCartRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userCartRef, { cart: cartItems });
    } catch (error) {
      console.error('Error updating cart in Firestore:', error);
    }
  } else {
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const loadCartItems = async () => {
      const items = await fetchCartItems();
      console.log('Fetched items:', items); // Debugging

      // Group items by id and sum quantities
      const groupedItems = items.reduce((acc, item) => {
        const existing = acc.find(i => i.id === item.id);
        if (existing) {
          existing.quantity += item.quantity;
        } else {
          acc.push({ ...item, quantity: item.quantity || 1 });
        }
        return acc;
      }, []);
      console.log('Grouped items:', groupedItems); // Debugging

      setCartItems(groupedItems);
    
      // Calculate subtotal
      const total = groupedItems.reduce((acc, item) => {
        // Parse price directly as a float
        const itemPrice = parseFloat(item.price);
        if (isNaN(itemPrice)) {
          console.error('Invalid price format:', item.price); // Debugging
        }
        return acc + (itemPrice * (item.quantity || 1));
      }, 0);
      console.log('Calculated subtotal:', total); // Debugging

      setSubtotal(total);
    };

    loadCartItems();
  }, []);

  const handleQuantityChange = async (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    await updateCart(updatedCart);

    // Recalculate subtotal
    const newSubtotal = updatedCart.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      if (isNaN(itemPrice)) {
        console.error('Invalid price format:', item.price); // Debugging
      }
      return acc + (itemPrice * item.quantity);
    }, 0);
    console.log('New subtotal after quantity change:', newSubtotal); // Debugging
    setSubtotal(newSubtotal);
  };

  const handleDelete = async (itemToDelete) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToDelete.id);
    setCartItems(updatedCart);
    await updateCart(updatedCart);

    // Recalculate subtotal
    const newSubtotal = updatedCart.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      if (isNaN(itemPrice)) {
        console.error('Invalid price format:', item.price); // Debugging
      }
      return acc + (itemPrice * item.quantity);
    }, 0);
    console.log('New subtotal after delete:', newSubtotal); // Debugging
    setSubtotal(newSubtotal);
  };

  const handleProceedToBuy = () => {
    if (cartItems.length > 0) { // Check if cart is not empty
      navigate('/SignIn'); // Navigate to /SignIn
    } else {
      setDialogMessage('Your cart is empty!'); // Set dialog message
      setDialogOpen(true); // Open dialog
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          image={item.imageUrl}
          title={item.name}
          size={item.size || 'N/A'}
          color={item.color || 'N/A'}
          price={item.price}
          quantity={item.quantity}
          onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
          onDelete={() => handleDelete(item)}
        />
      ))}
      <PriceDetails subtotal={subtotal} itemCount={cartItems.length} onProceedToBuy={handleProceedToBuy} />

      {/* Dialog for empty cart */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cart Empty"}</DialogTitle>
        <DialogContent>
          <p>{dialogMessage}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// Styled components for PriceDetails
const PriceContainer = styled.div`
  padding: ${size.M};
  border-top: 1px solid ${colors.senary};
`;

const Subtotal = styled.div`
  font-size: ${textSize.M};
  font-weight: bold;
  margin-bottom: ${size.M};
`;

const CheckoutButton = styled.button`
  background-color: ${colors.quinary};
  border: 1px solid ${colors.quinary};
  padding: ${size.S};
  width: 100%;
  font-size: ${textSize.S};
  cursor: pointer;
  border-radius: 20px;
`;

// Styled components for CartItem
const ItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.senary};
  padding: ${size.S} 0;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ItemDetails = styled.div`
  flex: 3;
  padding-left: ${size.M};
`;

const ItemTitle = styled.div`
  font-size: ${textSize.M};
  font-weight: bold;
  margin-bottom: ${size.XS};
`;

const ItemInfo = styled.div`
  color: ${colors.tertiary};
  margin-bottom: ${size.S};
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const ItemActions = styled.div`
  margin-left: ${size.M};
`;

const Action = styled.span`
  margin-right: ${size.S};
  color: ${colors.octonary};
  cursor: pointer;
`;

const ItemPrice = styled.div`
  font-size: ${textSize.L};
  font-weight: bold;
  color: ${colors.quinary};
  margin-top: ${size.S};
`;

const PriceDetails = ({ subtotal, itemCount, onProceedToBuy }) => {
  return (
    <PriceContainer>
      <Subtotal>Subtotal ({itemCount} item{itemCount > 1 ? 's' : ''}): ₹{subtotal.toFixed(2)}</Subtotal>
      <CheckoutButton onClick={onProceedToBuy}>Proceed to Buy</CheckoutButton>
    </PriceContainer>
  );
};

const CartItem = ({ image, title, size, color, price, quantity, onQuantityChange, onDelete }) => {
    const handleDropdownChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      onQuantityChange(newQuantity);
    };
    return (
        <ItemContainer>
          <ImageContainer>
            <img src={image} alt={title} />
          </ImageContainer>
          <ItemDetails>
            <ItemTitle>{title}</ItemTitle>
            <ItemInfo>Size: {size}</ItemInfo>
            <ItemInfo>Colour: {color}</ItemInfo>
            <Quantity>
              <select value={quantity} onChange={handleDropdownChange}>
                {[...Array(10).keys()].map(num => (
                  <option key={num} value={num + 1}>{num + 1}</option>
                ))}
              </select>
              <ItemActions>
                <Action onClick={onDelete}>Delete</Action>
                <Action>Save for later</Action>
                <Action>See more like this</Action>
              </ItemActions>
            </Quantity>
            <ItemPrice>₹{price}</ItemPrice>
          </ItemDetails>
        </ItemContainer>
      );
}

export default ShoppingCart;
