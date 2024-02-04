import styles from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={`${styles.navbar}  container`}>
      <div className={styles.logo}>
        <img src="/public/images/brand_logo.png" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default NavBar;
