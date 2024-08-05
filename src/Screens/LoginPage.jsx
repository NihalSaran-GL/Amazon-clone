import React from "react";
import styled from "styled-components";
import { size, textSize } from "../Components/ReusableComponets/Sizes";
import colors from "../Components/ReusableComponets/Colors";
import Logo from "../Components/ReusableComponets/Logo";
import englishData from "../../public/data/English.json";
import imagesData from "../../public/data/Image.json";

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
`;

const Title = styled.h1`
  font-size: ${textSize.L};
  font-weight: 400;
  margin-bottom: ${size.M};
`;

const Label = styled.label`
  font-size: ${textSize.S};
  font-weight: bold;
  display: block;
  margin-bottom: ${size.XS};
`;

const Input = styled.input`
  width: 100%;
  padding: ${size.S};
  border: 1px solid ${colors.border};
  border-radius: ${size.XXS};
  margin-bottom: ${size.M};
`;

const Button = styled.button`
  width: 100%;
  padding: ${size.S};
  background-color: ${colors.primary};
  border: none;
  border-radius: ${size.XXS};
  color: ${colors.black};
  font-size: ${textSize.S};
  cursor: pointer;
  margin-bottom: ${size.M};
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

export const LogoContainer = styled.section`
  margin-right: ${size.L};
  margin-bottom: ${size.S};
`;

const Data = {
    image: imagesData.header_container.main_header.amazon_logo_image,
    text: englishData.header_container.main_header.amazon_logo_text,
    logoName: englishData.header_container.main_header.logo_name,
  };

function SignIn() {
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
        <Label htmlFor="email">Email or mobile phone number</Label>
        <Input id="email" type="text" />
        <Label htmlFor="email">Password</Label>
        <Input id="password" type="text" />
        <Button style={{backgroundColor: colors.quinary}}>Continue</Button>
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

export default SignIn;
