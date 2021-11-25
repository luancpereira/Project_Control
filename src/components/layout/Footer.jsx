import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <p className={styles.copy_right}>
          <span>Project Control</span> &copy; 2021
        </p>
      </ul>
    </footer>
  );
}

export default Footer;
