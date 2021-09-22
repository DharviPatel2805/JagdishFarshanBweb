import styles from "./Footer.module.css";
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <div className={styles.f2div}>
      <div>
        <FooterMenu />
      </div>
      <div className={styles.copyright}>
        © 2020 Jagdishfarshan. All Rights Reserved.
        <div className={styles.footerIcon}>
          <a href="/" className={styles.flink}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className={styles.flink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className={styles.flink}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
