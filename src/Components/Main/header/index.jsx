import React, { useContext } from "react";
import { WidthContext } from "../../widthWrapper";
import Menu from "../menu";
import MenuHeader from "./menuHeader";
const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <section>
      {(
        <>
          <Menu openMenu={menuActive} setOpenMenu={setMenuActive} />
          <MenuHeader active={menuActive} setActive={setMenuActive} />
        </>
      )}
    </section>
  );
};

export default Header;
