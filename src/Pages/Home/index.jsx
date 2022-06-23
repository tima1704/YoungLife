import React from 'react';

import styles from "../../Styles/page/home.module.css";
import Team from '../../Components/Team';
export const Home = () => {
     return (
          <div className={styles["home"]}>
               <Team/>
          </div>
     );
}