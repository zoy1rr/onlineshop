import { useState } from "react";
import styles from "./header.module.css";

function Header() {
    const [menyuOchilgan, setMenyuOchilgan] = useState(false);
    const [til, setTil] = useState("uz");

    const tilniTanlash = (e) => {
        setTil(e.target.value);
        console.log("Tanlangan til:", e.target.value);
    };

    return (
        <header className={styles.sarlavha}>
            <div className={styles.container}>


                <div className={styles.belgi}><img src="./logo.png" alt="" /></div>


                <nav className={`${styles.menyu} ${menyuOchilgan ? styles.ochiq : ""}`}>
                    <a href="/">Bosh sahifa</a>
                    <a href="/">Katalog</a>
                    <a href="/">Bosh sahifa</a>
                    <a href="/">Bosh sahifa</a>
                </nav>


                <div className={styles.ong}>

                    <div className={styles.qidiruv}>
                        <input type="text" placeholder="Qidirish..." />
                    </div>

                    <a href="" className={styles.tanlash}><i class="fa-solid fa-magnifying-glass"></i> Qidirish</a>





                    <i class="fa-regular fa-heart" id={styles.like}></i>


                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
