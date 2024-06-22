import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getTimeInSeconds, sortLeadersEl } from "../../utils/helpers";
import { LeadersContext } from "../../context/leaderBoardContex";
import { postLeaders } from "../../api/leaders";

export function EndGameModal({
  isWon,
  gameDurationSeconds,
  gameDurationMinutes,
  onClick,
  pairsCount,
  timer,
  achievements,
}) {
  const timeLeaders = getTimeInSeconds({ minutes: gameDurationMinutes, seconds: gameDurationSeconds });

  const [inputLeaders, setInputLeaders] = useState("");

  const { leaders } = useContext(LeadersContext);

  const sortedLeaders = sortLeadersEl(leaders);

  const leadersLength = sortedLeaders.length;
  const isLeadResult = sortedLeaders[leadersLength - 1].time > getTimeInSeconds(timer) && pairsCount === 9;

  const navigate = useNavigate();

  const title = isWon ? (isLeadResult ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const [error, setError] = useState("");

  const onLeaders = () => {
    const resultLeaderboard = {
      name: inputLeaders,
      time: timeLeaders,
      achievements: achievements,
    };

    postLeaders({ resultLeaderboard })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isLeadResult ? (
        isWon ? (
          <form className={styles.form}>
            <input
              className={styles.input}
              onChange={e => {
                setInputLeaders(e.target.value);
              }}
              value={inputLeaders.name}
              type="text"
              placeholder="Пользователь"
            />
            <Button
              onClick={e => {
                e.preventDefault();
                if (!inputLeaders.trim()) {
                  return;
                }
                onLeaders();
                setInputLeaders("");
                navigate("/leaderboard");
              }}
            >
              Отправить
            </Button>
          </form>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link className={styles.link} to={"/leaderboard"}>
        Перейти к лидерборду
      </Link>
      {error && error}
    </div>
  );
}
