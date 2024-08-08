import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import styled from 'styled-components';
import AlertDialog from '../Components/ReusableComponets/AlertDialog'; // Import the AlertDialog component
import {
  sectionSize,
  size,
  textSize,
} from '../Components/ReusableComponets/Sizes';
import colors from '../Components/ReusableComponets/Colors';
import StarRating from '../Components/ReusableComponets/StarRating';
import { db } from '../Firebase/firebaseConfig';

const FlexContainer = styled.div`
  display: flex;
`;

const Section = styled.section`
  margin-bottom: ${size.L};
`;

const Title = styled.h2`
  font-size: ${textSize.M};
  margin-bottom: ${size.S};
  color: ${colors.quaternary};
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: ${size.XS};
  font-size: ${textSize.S};
  color: ${colors.quaternary};
`;

const Button = styled.button`
  background-color: ${colors.quinary};
  border: none;
  padding: ${size.XS} ${size.S};
  border-radius: ${size.M};
  cursor: pointer;
  font-size: ${textSize.S};
`;

const ProductCard = styled.article`
  display: flex;
  border: 1px solid ${colors.tertiary};
  padding: ${size.S};
  border-radius: ${size.XS};
  background-color: ${colors.primary};
  align-items: center;
  transition: background-color 0.3s;
`;

const ProductImageWrapper = styled.div`
  width: 15vh;
  height: 15vh;
  padding: ${size.L};
  background-color: ${colors.tertiary};
  overflow: hidden;
  border-radius: ${size.XS};
  margin-bottom: ${size.S};
  margin-right: ${size.M};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductTitle = styled.h3`
  font-weight: bold;
  font-size: ${textSize.S};
  margin: ${size.XS} 0;
  color: ${colors.quaternary};
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: ${textSize.M};
  margin: ${size.XS} 0;
`;

const ProductNote = styled.p`
  font-size: ${textSize.XS};
  color: ${colors.quaternary};
  margin: ${size.XS} 0;
`;

const Page = styled(FlexContainer)`
  font-family: Arial, sans-serif;
  background-color: ${colors.senary};
`;

const Sidebar = styled.aside`
  width: ${sectionSize.S};
  padding: ${size.M};
  background-color: ${colors.primary};
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${size.M};
`;

const Header = styled.h1`
  font-size: ${textSize.L};
  margin-bottom: ${size.M};
  color: ${colors.secondary};
`;

const PriceRange = styled(FlexContainer)`
  align-items: center;
`;

const PriceInput = styled.input`
  width: ${sectionSize.XXS};
  margin-right: ${size.XS};
  padding: ${size.XXS};
  border: 1px solid ${colors.tertiary};
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterSection = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

const Product = ({ image, title, price, note, onClick, onAddToCart }) => (
  <ProductCard onClick={onClick} style={{ cursor: 'pointer' }}>
    <ProductImageWrapper>
      <ProductImage src={image} alt={title} />
    </ProductImageWrapper>
    <div>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price}</ProductPrice>
      {note && <ProductNote>{note}</ProductNote>}
      <StarRating starRating={4} />
      <Button onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the Product click event
        onAddToCart();
      }}>
        Add to cart
      </Button>
    </div>
  </ProductCard>
);

const ProductListing = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  }, [location]);

  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const productsRef = collection(db, 'productdata', 'Products', query);
      const querySnapshot = await getDocs(productsRef);

      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = async (product) => {
    const user = auth.currentUser;

    try {
      if (user) {
        // User is logged in
        const userCartRef = doc(db, 'users', user.uid); // Assuming you have a "users" collection with document id as user.uid
        await updateDoc(userCartRef, {
          cart: arrayUnion(product), // Add the entire product object to the cart
        });
        setAlertMessage('Product added to your cart.');
      } else {
        // User is not logged in
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product); // Add the entire product object to the cart
        localStorage.setItem('cart', JSON.stringify(cart));
        setAlertMessage('Product added to local storage.');
      }
      setAlertOpen(true);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setAlertMessage('Failed to add product to cart. Please try again.');
      setAlertOpen(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Page>
      <Sidebar>
        <FilterSection title="Delivery Day">
          <CheckboxLabel>
            <input type="checkbox" /> Get It Today
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Get It by Tomorrow
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Get It in 2 Days
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Category">
          <CheckboxLabel>
            <input type="checkbox" /> Smartphones & Basic Mobiles
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Customer Review">
          <CheckboxLabel>
            <input type="checkbox" /> 1 Star & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 2 Stars & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 3 Stars & Up
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> 4 Stars & Up
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Brands">
          <CheckboxLabel>
            <input type="checkbox" /> Redmi
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Samsung
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> OnePlus
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Apple
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Xiaomi
          </CheckboxLabel>
          <CheckboxLabel>
            <input type="checkbox" /> Oppo
          </CheckboxLabel>
        </FilterSection>

        <FilterSection title="Price">
          <PriceRange>
            <PriceInput type="number" placeholder="₹205" />
            <span>-</span>
            <PriceInput type="number" placeholder="₹102,900+" />
            <Button>Go</Button>
          </PriceRange>
        </FilterSection>
      </Sidebar>

      <MainContent>
        <Header>
          {searchResults.length > 0
            ? `Search Results for "${new URLSearchParams(location.search).get('search')}"`
            : 'All Products'}
        </Header>
        <p style={{ marginBottom: size.S }}>Check each product page for other buying options.</p>

        <ProductGrid>
          {loading ? (
            <p>Loading...</p>
          ) : searchResults.length > 0 ? (
            searchResults.map((product) => (
              <Product
                key={product.id}
                image={product.imageUrl}
                title={product.name}
                price={`₹${product.price}`}
                note={product.note}
                onClick={() => handleProductClick(product)}
                onAddToCart={() => handleAddToCart(product)} // Pass the entire product object
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </ProductGrid>
      </MainContent>

      <AlertDialog 
        open={alertOpen} 
        onClose={handleCloseAlert} 
        message={alertMessage} 
      />
    </Page>
  );
};

export default ProductListing;
