import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./notfound.module.css";

function Notfound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.glow}></div>
            <h1 className={styles.code}>404</h1>
            <h2 className={styles.title}>Sahifa topilmadi</h2>
            <p className={styles.text}>
                Kechirasiz, siz izlagan sahifa mavjud emas yoki o‘chirib yuborilgan.
            </p>
            <button className={styles.button} onClick={() => navigate("/")}>
                Bosh sahifaga qaytish
            </button>
        </div>
    );
}

export default Notfound;
