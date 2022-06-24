import React from "react";
import "../../../Styles/index.css"
import styles from "./index.module.css";
import { Foot, Head } from "..";
import classNames from "classnames";
export const AppWrapper = ({ children }) => {
  return (
    <div className={styles["page"]}>
      <div className={styles["header"]}><Head /></div>
      <div className={classNames(styles["content"], "body")}>{children}</div>
      <div className={styles["footer"]}><Foot /></div>
    </div>
  );
};
