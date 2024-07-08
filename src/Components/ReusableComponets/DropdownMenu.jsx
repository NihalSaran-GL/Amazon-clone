import React from "react";
import styled from "styled-components";
import { useDropdown } from "../Hooks/useDropdown";

const DropdownContainer = styled.section`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#3498db"};
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding || "10px"};
  font-size: ${(props) => props.fontSize || "16px"};
  border: 1px solid transparent;
  border-radius: ${(props) => props.borderRadius || "5px"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  border: ${(props) => props.borderColor || "transparent"};
  margin-left: ${(props) => props.marginLeft || "-2px"};
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border-radius: ${(props) => props.borderRadius || "5px"};
  position: absolute;
  background-color: ${(props) => props.contentBgColor || "#f9f9f9"};
  min-width: ${(props) => props.minWidth || "max-content"};
  max-height: ${(props) => props.maxHeight || "200px"};
  overflow-y: auto; /* Makes the content scrollable */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: ${(props) => props.itemColor || "black"};
  padding: ${(props) => props.itemPadding || "12px 16px"};
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${(props) => props.itemHoverBgColor || "#f1f1f1"};
    color: ${(props) => props.itemHoverColor || "white"};
    text-decoration: none;
  }
`;

const Dropdown = ({
  buttonLabel = "Dropdown",
  items = [],
  buttonProps = {},
  dropdownProps = {},
  itemProps = {},
  icon = null,
  iconMarginLeft = "-2px",
  iconBorderColor = "transparent",
  maxHeight = "200px",
}) => {
  const { isOpen, toggleDropdown } = useDropdown();

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} {...buttonProps}>
        {buttonLabel}
        {icon && (
          <IconContainer
            borderColor={iconBorderColor}
            marginLeft={iconMarginLeft}
          >
            {icon}
          </IconContainer>
        )}
      </DropdownButton>
      <DropdownContent isOpen={isOpen} maxHeight={maxHeight} {...dropdownProps}>
        {items.map((item, index) => (
          <DropdownItem key={index} href={item.href || "#"} {...itemProps}>
            {item.label || "Item"}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
