import React, { useEffect, useState } from 'react';
import { Create, Delete, Get } from '../../Constants/API';

import styles from "./index.module.css";

const Tasks = () => {
   const [games, setgames] = useState([]);
   useEffect(() => {
      Get(`tasks.json`, "", "")
         .then((res) => res.json())
         .then((r) => {
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

   const [titleInput, settitleInput] = useState("");
   const [viewInput, setViewInput] = useState("");

   const password = "12345abcde";
   let newPassword = "";
   for (let i = 0; i < password.length; i++) {
      newPassword += password[Math.floor(Math.random() * password.length)];
   }
   const conditionsAndAddGames = () => {
      if (titleInput !== "" && viewInput !== "") {
         Create(
            {
               id: `p-${newPassword}`,
               title: titleInput,
               view: viewInput,
            },
            `tasks.json`,
            ""
         )
            .then((res) => res.json())
            .then(() => {
               settitleInput("");
               setViewInput("");
               window.location.reload()
            });
      } else {
         alert("Поля пустые");
      }
   };

   const deleteCard = (id) => {
      Delete(`tasks`, `${id}.json`, "").then(() => window.location.reload());
   };


   return (
      <>
         <div className={styles["task-table"]}>
            <div className={styles["content_titles"]}>
               {games.length < 1 ? (
                  <h1>Заданий нет XD</h1>
               ) : (
                  <div className={styles["contFTable"]}>
                     {games.map(item => (
                        <div className={styles["mapTitles"]}>
                           <div key={item.id}>
                              <div className={styles["flex_mapTable"]}>
                                 <div>
                                    <h1 className={styles["whom"]}>*{item.view}: <span>&nbsp;{item.title}</span></h1>
                                 </div>
                                 <div>
                                    <button onClick={() => {
                                       deleteCard(item.id)
                                    }}>X</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>
         <div className={styles["sendToTable"]}>
            <input
               onChange={(e) => {
                  settitleInput(e.target.value)
               }}
               value={titleInput}
               type="text"
               placeholder='Создать задание' />
            <input
               onChange={(e) => {
                  setViewInput(e.target.value)
               }}
               value={viewInput}
               type="text"
               placeholder='Кому ?' />
            <div className={styles["btn-content"]}>
               <button onClick={conditionsAndAddGames}>Закрепить</button>
            </div>
         </div></>
   );
};

export default Tasks;