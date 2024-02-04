import styles from "./Button.module.css";
const Button = ({ isSec, icon, text }) => {
  return (
    <button   className={isSec ? styles.sec_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};
export default Button;
