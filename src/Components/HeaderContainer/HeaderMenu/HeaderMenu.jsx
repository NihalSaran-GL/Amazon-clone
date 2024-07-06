import React from "react";
import {
  ButtonBackgroundColor,
  ButtonBorderColor,
  ButtonColor,
  HeaderMenu,
  MenuGapSize,
  Menu1IconAlign,
  MenuIconSize,
  MenuIconColorSecondary,
  MenuIconColorPrimary,
} from "./HeaderMenuStyles";
import Button from "../../ReusableComponets/Button";
import englishData from "../../../../public/data/English.json";
import { ArrowDropDown, Menu } from "@mui/icons-material";

const Data = {
  menu1: englishData.header_container.header_menu.menu1,
  menu2: englishData.header_container.header_menu.menu2,
  menu3: englishData.header_container.header_menu.menu3,
  menu4: englishData.header_container.header_menu.menu4,
  menu5: englishData.header_container.header_menu.menu5,
  menu6: englishData.header_container.header_menu.menu6,
  menu7: englishData.header_container.header_menu.menu7,
  menu8: englishData.header_container.header_menu.menu8,
  menu9: englishData.header_container.header_menu.menu9,
  menu10: englishData.header_container.header_menu.menu10,
  menu11: englishData.header_container.header_menu.menu11,
  menu12: englishData.header_container.header_menu.menu12,
  menu13: englishData.header_container.header_menu.menu13,
  menu14: englishData.header_container.header_menu.menu14,
  menu15: englishData.header_container.header_menu.menu15,
  menu16: englishData.header_container.header_menu.menu16,
  menu17: englishData.header_container.header_menu.menu17,
};

function Header_Menu() {
  return (
    <HeaderMenu>
      <Button
        text={Data.menu1}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        icon={<Menu />}
        align={Menu1IconAlign}
        iconSize={MenuIconSize}
        gap={MenuGapSize}
        iconColor={MenuIconColorPrimary}
        />
      <Button
        text={Data.menu2}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        icon={<ArrowDropDown />}
        iconSize={MenuIconSize}
        iconColor={MenuIconColorSecondary}
        />
      <Button
        text={Data.menu3}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        />
      <Button
        text={Data.menu4}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        />
      <Button
        text={Data.menu5}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        />
      <Button
        text={Data.menu6}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        />
      <Button
        text={Data.menu7}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        />
      <Button
        text={Data.menu8}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
        icon={<ArrowDropDown />}
        iconSize={MenuIconSize}
        iconColor={MenuIconColorSecondary}
      />
      <Button
        text={Data.menu9}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu10}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu11}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu12}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu13}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu14}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu15}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu16}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
      <Button
        text={Data.menu17}
        bgColor={ButtonBackgroundColor}
        borderColor={ButtonBorderColor}
        color={ButtonColor}
      />
    </HeaderMenu>
  );
}

export default Header_Menu;
