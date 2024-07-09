import styled from 'styled-components';
import { sizee, texttSize } from '../ReusableComponets/Sizes';
import colors from '../ReusableComponets/Colors';

export const FooterWrapper = styled.footer`
  width: 100%;
`;

export const FooterButton = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #37475a;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const FooterButtonText = styled.span`
  color: white;
  text-align: center;
  display: block;
  padding: 15px 0;
  line-height: 19px;
  font-size: 13px;
`;

export const FooterSecondary = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #232f3e;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hr = styled.hr`
  border: none;
  height: 20px;
  width: 0%;
  height: 15px;
  margin-top: 0;
  box-shadow: 0 15px 10px -20px #3a4553;
  margin: -50px auto 20px;
`;

export const FooterTop = styled.div`
  background: #37475a;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    padding: 17px;
    display: inline-block;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  &:hover {
    background: #485769;
  }
`;

export const FooterMiddle = styled.div`
  background: #232f3e;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  margin: 30px 40px 30px 0;
  display: inline-block;
  vertical-align: top;
  list-style: none;
`;

export const FooterTitle = styled.h3`
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
  padding: 0;
  font-size: 16px;
`;

export const FooterLink = styled.a`
  color: #ddd;
  font-size: 13px;
  display: block;
  padding: 5px 0;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  background: #131a22;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${sizee.M} 0;
`;

export const FooterBottomRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const FooterBottomColumn = styled.div`
  flex: 1;
  margin: 10px 20px;
  min-width: 200px;
`;

export const FooterBottomLink = styled.a`
  color: #ddd;
  font-size: 11px;
  line-height: 115%;
  text-decoration: none;
  margin-bottom: 15px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterCopy = styled.div`
  border-top: 1px solid #3a4553;
  padding: 30px 20px 20px 20px;
  text-align: center;
  margin-top: ${sizee.S};
  font-size: ${texttSize.XS};
  color: ${colors.darkGrey};
`;

export const CopyLink = styled.a`
  padding: 10px 30px 10px 10px;
  color: #232f3e;
  border: 1px solid #848688;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: none;
    border-color: #8d9096;
  }
`;

export const Logo = styled.img`
  background: transparent no-repeat 0 0;
  background-size: 76px;
  width: 76px;
  margin-right: 60px;
`;
