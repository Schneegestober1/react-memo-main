import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { Leaderboard } from "../../components/Leaderboard/Leaderboard";
import { useContext, useEffect } from "react";
import { getLeaders } from "../../api/leaders";
import { sortLeadersEl } from "../../utils/helpers";
import { LeadersContext } from "../../context/leaderBoardContex";

export const LeaderBoardPage = () => {
  const { leaders, setLeaders } = useContext(LeadersContext);

  const formatTime = resultTime => {
    const seconds = resultTime % 60;
    const minutes = Math.floor(resultTime / 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    getLeaders().then(leaders => {
      const sortedLeaders = sortLeadersEl(leaders.leaders);
      setLeaders(sortedLeaders.splice(1, 10));
    });
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Лидерборд</h3>
        <Link to={"/"}>
          <Button>Начать игру</Button>
        </Link>
      </header>
      <main>
        <div className={styles.box}>
          <p className={styles.sub1}>Позиция</p>
          <p className={styles.sub2}>Пользователь</p>
          <p className={styles.sub4}>Время</p>
        </div>
        <ul className={styles.wrap}>
          {leaders.map((el, index) => (
            <Leaderboard key={el.id} position={`#${index + 1}`} user={el.name} time={formatTime(el.time)} />
          ))}
        </ul>
      </main>
    </div>
  );
};
