import React from "react";
import styles from "./index.module.css";
const Team = () => {
  const teamArray = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1615899486509-84e2c782b0da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];
  return (
    <div className={styles["team__content"]}>
      <div className={styles["flex_content"]}>
        {teamArray.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={styles["background_team"]}
            ></div>
          );
        })}
        <div className={styles["more_about_team"]}>+</div>
      </div>
    </div>
  );
};

export default Team;
