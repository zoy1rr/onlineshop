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
                    <a href="/">Bosh sahifa</a>
                    <a href="/">Bosh sahifa</a>
                    <a href="/">Bosh sahifa</a>
                </nav>


                <div className={styles.ong}>

                    <div className={styles.qidiruv}>
                        <input type="text" placeholder="Qidirish..." />
                    </div>








                    <div
                        className={styles.mobilTugma}
                        onClick={() => setMenyuOchilgan(!menyuOchilgan)}
                    >
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
