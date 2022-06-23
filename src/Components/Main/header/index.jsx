import React, { useContext } from "react";
import classnames from "classnames";
import { WidthContext } from "../../widthWrapper";
import styles from "./index.module.css";
const Header = () => {
  const widthScreen = useContext(WidthContext);
  return (
    <>
    {widthScreen < 500 ? (
      <header className={classnames(styles["header"], "container")}>
      <h1>header 1980</h1>
    </header>
    ) : (
     <header className={classnames(styles["header"], "container")}>
     <h1>header 500</h1>
   </header>
    )}

    </>
  );
};

export default Header;
