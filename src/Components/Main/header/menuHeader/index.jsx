import React from "react";

import { Link } from "react-router-dom";
import { URL_HOME } from "../../../../Constants/URL";
import { LOGO_IMG } from "../../../common/img";
import styles from './index.module.css';
const MenuHeader = ({active, setActive}) => {
  return (
    <div className={styles["header"]}>
      <span 
      className={styles["open"]}
      onClick={() => setActive(!active)} >Menu</span>
      <div className={styles["right_content"]}>
        <Link to={URL_HOME}>
          <img src={LOGO_IMG} alt={`logo`} />
        </Link>
      </div>
    </div>
  );
};

export default MenuHeader;
