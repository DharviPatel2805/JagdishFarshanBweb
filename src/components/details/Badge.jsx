import styles from "./Badge.module.css";

function Badge() {
  return (
    <div className={styles.badgeDiv}>
      <img
        className={styles.logoJ}
        src="https://jagdishfarshan.com/Content/img/home/titile-tag.png"
        alt="logo"
      />
      <div className={styles.description}>
        The entire process of manufacturing Leelo chevado/ Bhakharvadi and
        namkeen was scientifically and hygienically managed.
      </div>
      <div className={styles.year}>Since 1938</div>
    </div>
  );
}

export default Badge;
