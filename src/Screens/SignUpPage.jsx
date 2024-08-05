import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";
import Logo from "../Components/ReusableComponets/Logo";
import englishData from "../../public/data/English.json";
import imagesData from "../../public/data/Image.json";
import { auth, googleProvider, db } from "../Firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export const LogoWidth = size.XXL;
export const LogoHeight = size.L;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: ${size.XL};
`;

const SignInContainer = styled.div`
  width: 350px;
  border: 1px solid ${colors.border};
  border-radius: ${size.XS};
  padding: ${size.L};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${textSize.L};
  font-weight: 400;
  margin-bottom: ${size.M};
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: ${size.S};
  background-color: #4285F4; /* Google blue color */
  border: none;
  border-radius: ${size.XXS};
  color: ${colors.white};
  font-size: ${textSize.S};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${size.M};
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: ${size.S};
`;

const SmallText = styled.p`
  font-size: ${textSize.XS};
  margin-bottom: ${size.M};
`;

const Link = styled.a`
  color: ${colors.link};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${colors.linkHover};
  }
`;

const LogoContainer = styled.section`
  margin-right: ${size.L};
  margin-bottom: ${size.S};
`;

const Data = {
  image: imagesData.header_container.main_header.amazon_logo_image,
  text: englishData.header_container.main_header.amazon_logo_text,
  logoName: englishData.header_container.main_header.logo_name,
};

function SignUp() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Extract user details
      const userDetails = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };

      // Save user details to Firestore
      await setDoc(doc(collection(db, "users"), user.uid), userDetails);

      // Handle successful sign-in
      console.log("User signed in", user);
      navigate('/'); // Navigate to /home after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google", error);
      // Handle sign-in errors here
    }
  };

  return (
    <PageContainer>
      <LogoContainer>
        <Logo
          image={"https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"}
          logoName={Data.logoName}
          width={LogoWidth}
          height={LogoHeight}
        />
      </LogoContainer>
      <SignInContainer>
        <Title>Sign Up</Title>
        <GoogleButton onClick={handleGoogleSignIn}>
          <GoogleIcon src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
          Sign Up with Google
        </GoogleButton>
        <SmallText>
          By continuing, you agree to Amazon clone's{" "}
          <Link href="#">Conditions of Use</Link> and{" "}
          <Link href="#">Privacy Notice</Link>.
        </SmallText>
        <Link href="#">Need help?</Link>
        <SmallText>
          <strong>Buying for work?</strong>
          <br />
          <Link href="#">Shop on Amazon Business</Link>
        </SmallText>
      </SignInContainer>
    </PageContainer>
  );
}

export default SignUp;
