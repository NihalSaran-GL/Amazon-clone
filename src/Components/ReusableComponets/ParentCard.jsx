import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { size, textSize } from "./Sizes";
import colors from "./Colors";



const ParentCardWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${size.XS};
  padding: ${size.M};
  background-color: ${colors.white};
`;

const ParentCardTitle = styled.h2`
  font-size: ${textSize.M};
  color: ${colors.black};
  margin-bottom: ${size.S};
  font-weight: bold;
`;

const ChildCardTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: ${size.XS};
`;

const ChildCardCell = styled.td`
  width: 50%;
  vertical-align: top;
`;

const ChildCardImage = styled.img`
  width: 100%;
  height: 150px; // Adjust as needed
  object-fit: cover;
  border-radius: ${size.XXS};
`;

const ChildCardCaption = styled.p`
  font-size: ${textSize.XS};
  color: ${colors.darkGrey};
  margin-top: ${size.XXS};
  text-align: center;
`;

const SeeMoreLink = styled.a`
  font-size: ${textSize.S};
  color: ${colors.link};
  margin-top: ${size.XS};
  text-decoration: none;
  display: block;
  &:hover {
    color: ${colors.linkHover};
    text-decoration: underline;
  }
`;




const ParentCard = ({ title, items, seeMoreText }) => (
  <ParentCardWrapper>
    <ParentCardTitle>{title}</ParentCardTitle>
    <ChildCardTable>
      <tbody>
        <tr>
          <ChildCardCell>
            <ChildCardImage src={items[0].imageSrc} alt={items[0].caption} />
            <ChildCardCaption>{items[0].caption}</ChildCardCaption>
          </ChildCardCell>
          <ChildCardCell>
            <ChildCardImage src={items[1].imageSrc} alt={items[1].caption} />
            <ChildCardCaption>{items[1].caption}</ChildCardCaption>
          </ChildCardCell>
        </tr>
        <tr>
          <ChildCardCell>
            <ChildCardImage src={items[2].imageSrc} alt={items[2].caption} />
            <ChildCardCaption>{items[2].caption}</ChildCardCaption>
          </ChildCardCell>
          <ChildCardCell>
            <ChildCardImage src={items[3].imageSrc} alt={items[3].caption} />
            <ChildCardCaption>{items[3].caption}</ChildCardCaption>
          </ChildCardCell>
        </tr>
      </tbody>
    </ChildCardTable>
  </ParentCardWrapper>
);

export default ParentCard;