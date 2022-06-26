import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
const BackBtn = ({ classname }) => {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }
  return (
    <span
      className={classNames(styles["back"])}
      onClick={handleBackClick}
    >
      ↩ back
    </span>
  );
};

export default BackBtn;
