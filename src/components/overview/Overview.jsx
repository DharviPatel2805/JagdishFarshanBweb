import styles from "./Overview.module.css";

function Overview(){
    return(
        <div className={styles.overview}>
            <div className="row">
                <div className="col-lg-5 col-md-8 col-sm-12" style={{margin: "2% auto"}}> <a href="/"><img className={styles.viewImg} src="https://jagdishfarshan.com/Content/img/home/home-offer_1.jpg" alt="overview" /></a>  </div>
                <div className="col-lg-5 col-md-8 col-sm-12" style={{margin: "2% auto"}}> <a href="/"> <img className={styles.viewImg} src="https://jagdishfarshan.com/Content/img/home/home-offer_2.jpg" alt="overview" /></a></div>
                <div className="col-lg-5 col-md-8 col-sm-12" style={{margin: "2% auto"}}> <a href="/"> <img className={styles.viewImg} src="https://jagdishfarshan.com/Content/img/home/home-offer_3.jpg" alt="overview" /> </a></div>
                <div className="col-lg-5 col-md-8 col-sm-12" style={{margin: "2% auto"}}> <a href="/"><img className={styles.viewImg} src="https://jagdishfarshan.com/Content/img/home/home-offer_4.jpg" alt="overview" /></a></div>
            </div>
        </div>
    )
}

export default Overview;