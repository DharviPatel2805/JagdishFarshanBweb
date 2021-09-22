import styles from './FooterMenu.module.css';

function FooterMenu() {
  return (
    <div className={styles.footer}>
      <img
        src="https://jagdishfarshan.com/Content/img/home/logo.png"
        alt="Jagdish"
      />
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">
              Certifications
            </a>
            <a class="nav-item nav-link" href="/">
              Contacts Us
            </a>
            <a class="nav-item nav-link" href="/">
              Our Networks
            </a>
            <a class="nav-item nav-link" href="/">
              Shipping and Delivery
            </a>
            <a class="nav-item nav-link" href="/">
              Privacy Policy
            </a>
            <a class="nav-item nav-link" href="/">
              Tearms and Conditions
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FooterMenu;
