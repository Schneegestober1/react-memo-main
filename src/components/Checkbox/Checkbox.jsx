import styles from "././CustomCheckbox.module.css";

export const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <div className={styles.customCheckbox} onClick={() => onChange(!checked)}>
      <input type="checkbox" checked={checked} onChange={() => onChange(!checked)} className={styles.hiddenCheckbox} />
      <div className={`checkbox ${styles.checked ? "checked" : ""}`}>
        {checked && <span className={styles.checkmark}>✔</span>}
      </div>
    </div>
  );
};

export default CustomCheckbox;
