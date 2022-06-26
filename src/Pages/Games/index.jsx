import React from "react";
import { Delete, Get } from "../../Constants/API";
import styles from "../../Styles/page/game.module.css";
import Load from "../../Components/common/Load";
import { Link } from "react-router-dom";
import BackBtn from "../../Components/common/backBtn";
const News = () => {
  const [loading, setLoading] = React.useState(false);
  const [games, setgames] = React.useState([]);
  // To get DATA. Getting the base from the component API;

  React.useEffect(() => {
    Get(`games.json`, "", "")
      .then((res) => res.json(), setLoading(true))
      .then((r) => {
        setLoading(false);
        if (r !== null) {
          const data = Object.entries(r).map((item) => {
            const id = item[0];
            return {
              ...item[1],
              id,
            };
          });
          setgames(data);
        }
      });
  }, []);
  const deleteCard = (id) => {
    Delete(`games`, `${id}.json`, "").then(() => window.location.reload());
  };

  return (
    <div className={styles["block_games"]}>
      <div className={styles["add-game"]}>
        <BackBtn />
        <Link to="/addgame">
          <button>добавить игру + </button>
        </Link>
      </div>
      {loading ? (
        <Load />
      ) : games.length === 0 ? (
        <div className={styles["noArray"]}>
          <p>Пока ничего нет.</p>
        </div>
      ) : (
        <div className={styles["flex-item"]}>
          {games.map((item) => {
            return (
              <div className={styles["item"]} key={item.id}>
                <div className={styles["item_header"]}>
                  <img alt="" src={item.img} />
                </div>
                <div className={styles["item_body"]}>
                  <h1>{item.title}</h1>
                  <p>{item.info}</p>
                  <div className={styles["day"]}>
                    <span>{item.day >= item.begin  ? (
                      <>Состоялось: {item.begin} июня</>
                    ) : (
                      <>Состоится: {item.begin} июня </>
                    )}</span>
                  </div>
                  <div className={styles["item_footer"]}>
                    <button
                      onClick={() => {
                        deleteCard(item.id);
                      }}
                    >
                      Delete this game
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default News;
