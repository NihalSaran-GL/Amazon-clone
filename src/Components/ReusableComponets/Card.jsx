import React from "react";
import styled from "styled-components";
import { size, textSize } from "./Sizes";
import colors from "./Colors";

const CardWrapper = styled.article`
  border: 1px solid #ddd;
  border-radius: ${(props) => props.borderRadius || size.S};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.wrapperPadding || size.M};
  margin: ${(props) => props.wrapperMargin || size.M};
  background-color: ${(props) => props.wrapperBgColor || colors.primary};
`;

const CardHeader = styled.header`
  font-size: ${(props) => props.fontSize || textSize.M};
  margin-bottom: ${(props) => props.marginBottom || size.S};
`;

const CardContent = styled.section`
  font-size: ${(props) => props.contentFontSize || textSize.S};
  margin-bottom: ${(props) => props.contentMarginBottom || size.S};
`;

const CardFooter = styled.footer`
  text-align: ${(props) => props.footerTextAlign || 'left'};
  font-size: ${(props) => props.footerFontSize || textSize.XXS};
  color: ${(props) => props.footerColor || colors.octonary};
`;

const Card = ({
  title,
  content,
  footer,
  headerFontSize,
  headerMarginBottom,
  contentFontSize,
  contentMarginBottom,
  footerFontSize,
  footerColor,
  footerTextAlign,
  padding,
  margin,
  wrapperBgColor,
  borderRadius,
}) => (
  <CardWrapper
    wrapperPadding={padding}
    wrapperMargin={margin}
    wrapperBgColor={wrapperBgColor}
    borderRadius={borderRadius}
  >
    <CardHeader fontSize={headerFontSize} marginBottom={headerMarginBottom}>
      {title}
    </CardHeader>
    <CardContent
      contentFontSize={contentFontSize}
      contentMarginBottom={contentMarginBottom}
    >
      {content}
    </CardContent>
    <CardFooter
      footerFontSize={footerFontSize}
      footerColor={footerColor}
      footerTextAlign={footerTextAlign}
    >
      {footer}
    </CardFooter>
  </CardWrapper>
);

export default Card;
