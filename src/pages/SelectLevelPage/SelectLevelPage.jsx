import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useContext, useState } from "react";
import { LevelContext } from "../../context/levelContext";
import { LivesContext } from "../../context/livesContext";
import CustomCheckbox from "../../components/Checkbox/Checkbox";

export function SelectLevelPage() {
  const { setLevel } = useContext(LevelContext);
  const { setLives } = useContext(LivesContext);

  const [isChecked, setIsChecked] = useState(false);

  const livesChnageHandler = event => {
    setLives(4 * event.target.checked - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li onClick={() => setLevel(1)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li onClick={() => setLevel(2)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li onClick={() => setLevel(3)} className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.wrap}>
          {/* <input onClick={livesChnageHandler} type="checkbox" id="checkbox" className="checkbox" />
          <label htmlFor="checkbox" className="checkbox-label"></label> */}
          <CustomCheckbox onClick={livesChnageHandler} checked={isChecked} onChange={setIsChecked} />
          <h3 className={styles.subtitle}> Упрощенный режим (3 жизни)</h3>
        </div>
        <Link to={"/leaderboard"} className={styles.link}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
