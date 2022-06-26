import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { URL_GAMES, URL_HOME } from "../../../../Constants/URL";
import { LOGO_IMG } from "../../../common/img";
import { WidthContext } from "../../../widthWrapper";
import styles from './index.module.css';
const MenuHeader = ({ active, setActive }) => {
  const width = useContext(WidthContext)
  return (
    <div className={styles["header"]}>
      {width < 500 ? (
        <>
          <span
            className={styles["open"]}
            onClick={() => setActive(!active)} >Menu</span>
          <div className={styles["right_content"]}>
            <Link to={URL_HOME} className={styles["links"]}>
              <img src={LOGO_IMG} alt={`logo`} />
            </Link>
          </div>
        </>
      ) : (
        <div className={styles["pc_content"]}>
          <div className={styles["leftPc"]}>
          <Link to={URL_HOME} className={styles["links"]}>
              <span className={styles["Home"]}>Young Life</span>
              {" "}
              &nbsp;
              &nbsp;
              &nbsp;
            </Link>
          </div>
          <div className={styles["rightPc"]}>
            <Link to={URL_GAMES} className={styles["links"]}>
              <span>games</span>
              &nbsp;
              &nbsp;
              &nbsp;
            </Link>
            <Link to={URL_GAMES} className={styles["links"]}>
              <span>gallery</span>
              &nbsp;
              &nbsp;
              &nbsp;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
export default MenuHeader;
