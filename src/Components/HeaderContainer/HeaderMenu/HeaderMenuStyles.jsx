import styled from 'styled-components'
import { size, textSize } from "../../ReusableComponets/Sizes";
import colors from '../../ReusableComponets/Colors';

export const HeaderMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${size.S};
    font-size: ${textSize.XS};
    color: ${colors.primary};
    background-color: ${colors.septenary};
    border-bottom: 1px solid ${colors.primary};
`;

export default HeaderMenu