import React, { useState } from "react";
import styles from "./Logo.module.css";
import Navbar from "./Navbar";

function Logo() {
  const [search, setSearch] = useState(false);
  function searchToggler() {
    setSearch(true);
  }

  return (
    <div className={styles.main}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/">
            <img
              src="https://jagdishfarshan.com/Content/img/home/logo.png"
              alt="Jagdish Farshan"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Navbar menu="COMBOS" />
              <Navbar menu="NAMKEENS" />
              <Navbar menu="SWEETS" />
              <Navbar menu="BAKERY PRODUCTS" />
              <Navbar menu="KHAKHRA" />
              <Navbar menu="ROASTED SNAKES" />
              <Navbar menu="READY TO EAT" />
              <Navbar menu="PREMIUM PRODUCTS" />
            </ul>

            <a href="/" className={styles.icon}>
              <i className="fas fa-shopping-cart"></i>
            </a>

            <form className="form-inline my-2 my-lg-0">
              {search && (
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              )}

              <a href="#" onClick={searchToggler} className={styles.icon}>
                <i className="fas fa-search"></i>
              </a>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Logo;
