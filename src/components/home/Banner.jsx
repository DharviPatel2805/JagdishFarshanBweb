import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div>
      <a href="/">
        <img
          src="	https://jagdishfarshan.com/Upload/Banner/bd83114bd3a549648d9dc45acb11fb45.jpg"
          alt="banner"
          className={styles.banner}
        />
      </a>
    </div>
  );
}

export default Banner;
