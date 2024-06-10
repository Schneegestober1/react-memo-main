import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";

export const LeaderBoardPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Лидерборд</h3>
        <Link>
          <Button>Начать игру</Button>
        </Link>
      </header>
      <main>
        <div className={styles.box}>
          <p className={styles.sub1}>Позиция</p>
          <p className={styles.sub2}>Пользователь</p>
          <p className={styles.sub3}></p>
          <p className={styles.sub4}>Время</p>
        </div>
        {/* <ul className={styles.wrap}>
            {leaders.map((el, index) => (
              <Leaderboard/>
            ))}
          </ul> */}
      </main>
    </div>
  );
};
