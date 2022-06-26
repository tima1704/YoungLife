import React from "react";
import classnames from 'classnames';
import styles from './index.module.css';
const Footer = () => {
  return (
    <footer className={classnames(styles["footer"], "container")}>
      <div className={styles["title"]}>
        <h1>Young Life</h1>
      </div>
    </footer>
  );
};

export default Footer;
