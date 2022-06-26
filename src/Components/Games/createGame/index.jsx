import React, { useState } from "react";

import styles from "./index.module.css";
import { Create } from "../../../Constants/API";
import BackBtn from "../../common/backBtn";
import { useNavigate } from "react-router-dom";
export const CreateGame = () => {
  const [imgInput, setimgInput] = useState("");
  const [titleInput, settitleInput] = useState("");
  const [infoInput, setinfoInput] = useState("");
  const [beginInput, setbeginInput] = useState("");
  const date = new Date();
  const day = date.getDate();
  const password = "12345abcde";
  let newPassword = "";
  for (let i = 0; i < password.length; i++) {
    newPassword += password[Math.floor(Math.random() * password.length)];
  }
  const navigate = useNavigate();
  const conditionsAndAddGames = () => {
    if (
      imgInput !== "" &&
      titleInput !== "" &&
      infoInput !== "" &&
      beginInput !== "" &&
      beginInput.length <= 2
    ) {
      Create(
        {
          id: `p-${newPassword}`,
          img: imgInput,
          title: titleInput,
          info: infoInput,
          day: day,
          begin: beginInput,
        },
        `games.json`,
        ""
      )
        .then((res) => res.json())
        .then(() => {
          setimgInput("");
          settitleInput("");
          setinfoInput("");
          navigate(-1);
        });
    } else {
      alert("Cоблюдайте правила!");
    }
  };
  return (
    <div className={styles["content_create_game"]}>
      <div className={styles["back-btn"]}>
        {" "}
        <BackBtn />
      </div>
      <div className={styles["create_block"]}>
        <input
          placeholder={"Enter the url of the photo..."}
          onChange={(e) => {
            setimgInput(e.target.value);
          }}
          value={imgInput}
        />
        <input
          placeholder={"Enter the title..."}
          onChange={(e) => {
            settitleInput(e.target.value);
          }}
          value={titleInput}
        />
        <input
          type="number"
          placeholder={"start of the game (just a day)"}
          onChange={(e) => {
            setbeginInput(e.target.value);
          }}
          value={beginInput}
        />
        <textarea
          placeholder={"Enter the information..."}
          onChange={(e) => {
            setinfoInput(e.target.value);
          }}
          value={infoInput}
        />
        <div className={styles["send-block"]}>
          <button onClick={conditionsAndAddGames}>send</button>
        </div>
      </div>
    </div>
  );
};
