import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  return (
    <div>
      <li className={styles.item}>
        <span className={styles.position}>11111111111111</span>
        <span className={styles.user}>211111111111</span>
        <span className={styles.time}>15:20</span>
        {/* <span className={styles.time}>4</span> */}
      </li>
    </div>
  );
};
