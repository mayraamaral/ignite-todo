import logo from "../assets/logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
    </div>
  )
}