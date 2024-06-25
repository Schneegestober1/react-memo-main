import styles from "./Leaderboard.module.css";
import magicBallActiveImg from "./images/magic-ball-active.png";
import magicBallNotActiveImg from "./images/magic-ball-not-active.png";
import vectorActiveImg from "./images/vector-active.png";
import vectorNotActiveImg from "./images/vector-not-active.png";
import hardModeImg from "./images/hard-mode.png";
import superPowersImg from "./images/super-powers.png";

export const Leaderboard = ({ position, user, time, achievements }) => {
  const achivImg1 = achievements.includes(1) ? vectorActiveImg : vectorNotActiveImg;
  const achivImg2 = achievements.includes(2) ? magicBallActiveImg : magicBallNotActiveImg;
  return (
    <div>
      <li className={styles.item}>
        <span className={styles.position}>{position}</span>
        <span className={styles.user}>{user}</span>
        <div className={styles.img}>
          <div className={achivImg1 === vectorActiveImg ? styles.wrapper : ""}>
            <div>
              <img src={achivImg1} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={hardModeImg} alt="#" />
            </div>
          </div>
          <div className={achivImg2 === magicBallActiveImg ? styles.wrapper : ""}>
            <div>
              <img src={achivImg2} alt="#" />
            </div>
            <div className={styles.bubble}>
              <img className={styles.description} src={superPowersImg} alt="#" />
            </div>
          </div>
        </div>
        <span className={styles.time}>{time}</span>
      </li>
    </div>
  );
};
