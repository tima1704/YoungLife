import { useState, useEffect } from "react";
import { CreateGame } from "../../Components/Games/createGame";
import { Create, Delete, Get } from "../../Constants/API";
import Style from "../../Styles/page/game.module.css";
const News = () => {
  const [loading, setLoading] = useState(false);
  const [games, setgames] = useState([]);
  const [gamesSelect, setGamesSelect] = useState("all");
  // To get DATA. Getting the base from the component API;

  useEffect(() => {
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
          if (gamesSelect === "all") {
            setgames(data);
          } else {
            const filterArray = data.filter(
              (item) => item.view === `${gamesSelect}`
            );
            setgames(filterArray);
          }
        }
      });
  }, [gamesSelect]);
  const deleteCard = (id) => {
    Delete(`games`, `${id}.json`, "").then(() => window.location.reload());
  };
  return (
    <div>
      <div>
        <div>
          <select
            placeholder="разделы"
            onChange={(e) => {
              const selectedFood = e.target.value;
              setGamesSelect(selectedFood);
            }}
          >
            <option onClick={() => setGamesSelect("all")} value="all">
              all
            </option>
            <option onClick={() => setGamesSelect("Contests")} value="Contests">
              Contests
            </option>
            <option onClick={() => setGamesSelect("tourism")} value="tourism">
              tourism
            </option>
          </select>
        </div>
      </div>
      {loading ? (
        <>loading...</>
      ) : games.length === 0 ? (
        <p className={Style.noitems}>Пусто..</p>
      ) : (
        games.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <img alt="" src={item.img} />
                </div>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.info}</p>
                  <div>
                    <div>
                      <button
                        onClick={() => {
                          deleteCard(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <p>
                        <span>{item.view}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default News;
