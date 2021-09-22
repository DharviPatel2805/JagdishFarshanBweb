import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.secH}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <strong>{props.name}</strong>
          </div>
          <div className="col-lg-6 col-md-6" style={{paddingLeft: "200px"}}>
            <button className={styles.view}>view all</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
