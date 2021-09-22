import React from "react";

import styles from "./Enquiry.module.css";

function Enquiry() {
  return (
    <div className={styles.enquiry}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <i className="fas fa-phone-volume"></i> For Online Order Enquiry<strong>+91 89808 08585</strong>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className={styles.sdiv}>
          <a href="/" className={styles.login}>
            <i className="fas fa-user"></i> Login/Register
          </a>
          <a href="/" className={styles.link}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className={styles.link}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className={styles.link}>
            <i className="fab fa-instagram"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
