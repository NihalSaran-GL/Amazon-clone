import styled from 'styled-components'
import { size, textSize } from "../../ReusableComponets/Sizes";
import colors from '../../ReusableComponets/Colors';

export const ButtonBackgroundColor = "transparent";
export const ButtonBorderColor = "transparent";
export const ButtonColor = colors.primary;
export const MenuIconSize = textSize.S;
export const MenuGapSize = size.XXS;
export const Menu1IconAlign = "left";
export const MenuIconColorPrimary = colors.primary;
export const MenuIconColorSecondary = colors.tertiary;

export const HeaderMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${size.S};
    color: ${colors.primary};
    background-color: ${colors.septenary};
    border-bottom: 1px solid ${colors.primary};
`;
