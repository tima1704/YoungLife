import React from "react";
import styles from "./index.module.css";
import { URL_HOME, URL_ABOUT, URL_CONTACTS } from "../../../Constants/URL";
import classNames from "classnames";

export const Menu = ({ openMenu, setOpenMenu }) => {
  const onClickCloseMenu = () => {
    setOpenMenu(false);
  };

  const itemsMenu = [
    {
      id: 0,
      value: "Главная",
      href: URL_HOME,
    },
    {
      id: 1,
      value: "О нас",
      href: URL_ABOUT,
    },
    {
      id: 2,
      value: "Контакты",
      href: URL_CONTACTS,
    },
  ];

  return (
    <div
      onClick={() => setOpenMenu(false)}
      className={classNames(styles["menu"], {
        [styles["menu_open"]]: openMenu,
      })}
    >
      <div className={styles["blur"]} />
      <div
        className={styles["menu__content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div onClick={onClickCloseMenu} className={styles["close"]}>
          <span>Back</span>
        </div>
        <ul>
          {itemsMenu.map((item, index) => {
            return (
              <div className={styles["content_menu"]}>
                <li key={`${item.id} + ${index}`}>{item.value}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
