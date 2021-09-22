import styles from "./Products.module.css";
import Header from "./Header";
import Namkeen from "./Namkeen";
import Sweets from "./Sweets";
import Bakery from "./Bakery";
import Snakes from "./Snakes";
import ReadyToEat from "./ReadyToEat";
import Premium from "./Premium";

function Products(){
    return(
        <div>
        <div className={styles.mainDiv} >
            <div className={styles.sDiv}>
                <Header name="Namkeens"/>
                <div className={styles.productDiv}>
                    <Namkeen />
                </div>
            </div>
        </div>
        <div className={styles.mainDiv} style={{backgroundColor: "white"}}>
            <div className={styles.sDiv} style={{backgroundColor: "white"}}>
                <Header name="Sweets"/>
                <div className={styles.productDiv}>
                    <Sweets />
                </div>
            </div>
        </div>
        <div className={styles.mainDiv} >
            <div className={styles.sDiv}>
                <Header name="Bakery Products"/>
                <div className={styles.productDiv}>
                    <Bakery />
                </div>
            </div>
        </div>
        <div className={styles.mainDiv} style={{backgroundColor: "white"}}>
            <div className={styles.sDiv} style={{backgroundColor: "white"}}>
                <Header name="Roasted Snakes"/>
                <div className={styles.productDiv}>
                    <Snakes />
                </div>
            </div>
        </div>
        <div className={styles.mainDiv}>
            <div className={styles.sDiv}>
                <Header name="Ready To Eat"/>
                <div className={styles.productDiv}>
                    <ReadyToEat />
                </div>
            </div>
        </div>
        <div className={styles.mainDiv} style={{backgroundColor: "white"}}>
            <div className={styles.sDiv} style={{backgroundColor: "white"}}>
                <Header name="Premium Products"/>
                <div className={styles.productDiv}>
                    <Premium />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Products;