import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: ${({ size }) => {
    switch (size) {
      case 'XXS':
        return '10px';
      case 'XS':
        return '12px';
      case 'S':
        return '14px';
      case 'M':
        return '16px';
      case 'L':
        return '18px';
      case 'XL':
        return '20px';
      case 'XXL':
        return '24px';
      case 'XXXL':
        return '28px';
      default:
        return '16px';
    }
  }};
`;

const FontSizeText = ({ size, children }) => {
  return <Text size={size}>{children}</Text>;
};

export default FontSizeText;
