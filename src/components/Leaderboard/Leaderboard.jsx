import styles from "./Leaderboard.module.css";

export const Leaderboard = ({ position, user, time }) => {
  return (
    <div>
      <li className={styles.item}>
        <span className={styles.position}>{position}</span>
        <span className={styles.user}>{user}</span>
        <span className={styles.time}>{time}</span>
      </li>
    </div>
  );
};
