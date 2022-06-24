import React, { useState } from "react";
import { Create } from "../../../Constants/API";
export const CreateGame = () => {
  const [imgInput, setimgInput] = useState("");
  const [titleInput, settitleInput] = useState("");
  const [infoInput, setinfoInput] = useState("");
  const [viewInput, setViewInput] = useState("");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const hour = date.getHours();

  const password = "12345abcde";
  let newPassword = "";
  for (let i = 0; i < password.length; i++) {
    newPassword += password[Math.floor(Math.random() * password.length)];
  }
  const conditionsAndAddGames = () => {
    if (imgInput !== "" && titleInput !== "" && infoInput !== "") {
      Create(
        {
          id: `p-${newPassword}`,
          img: imgInput,
          title: titleInput,
          info: infoInput,
          view: viewInput,
          month: month,
          day: day,
          hour: hour,
          isLiked: 0,
          save: false,
        },
        `games.json`,
        ""
      )
        .then((res) => res.json())
        .then(() => {
          setimgInput("");
          settitleInput("");
          setinfoInput("");
          setViewInput("");
        });
    } else {
      alert("Поля пустые");
    }
  };
  return (
    <div>
      F
      <div>
        <div>
          <textarea
            placeholder={"Введите информацию ..."}
            onChange={(e) => {
              setinfoInput(e.target.value);
            }}
            value={infoInput}
          />
        </div>
        <div>
          <input
            placeholder={"Введите url-фотки ..."}
            onChange={(e) => {
              setimgInput(e.target.value);
            }}
            value={imgInput}
          />

          <input
            placeholder={"Введите заголовок ..."}
            onChange={(e) => {
              settitleInput(e.target.value);
            }}
            value={titleInput}
          />

          <input
            placeholder={"Введите категоорию ..."}
            onChange={(e) => {
              setViewInput(e.target.value);
            }}
            value={viewInput}
          />
        </div>
        <div>
          <button onClick={conditionsAndAddGames}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
