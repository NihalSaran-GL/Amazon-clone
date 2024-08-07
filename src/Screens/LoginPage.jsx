import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";
import Logo from "../Components/ReusableComponets/Logo";
import englishData from "../../public/data/English.json";
import imagesData from "../../public/data/Image.json";
import { auth, googleProvider } from "../Firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

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
  background-color: ${colors.quinary};
  border: none;
  border-radius: ${size.XXS};
  color: ${colors.secondary};
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
  text-align: center;
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

function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in", result.user);
      navigate('/');
    } catch (error) {
      console.error("Error signing in with Google", error);
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
        <Title>Sign in</Title>
        <GoogleButton onClick={handleGoogleSignIn}>
          <GoogleIcon src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
          Sign in with Google
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

export default LoginPage;
