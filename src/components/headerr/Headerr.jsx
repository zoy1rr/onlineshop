import styles from './headerr.module.css';

function Headerr() {
    return (
        <div className={styles.topbar}>
            <div className={styles.container}>


                <div className={styles.chap_qism}>
                    <span>📞 Qo‘llab-quvvatlash: </span>
                    <a href="https://t.me/Z_ruziqulovv">+998 95 636 12 48</a>
                </div>


                <div className={styles.ong_qism}>
                    <select className={styles.til_tanlash}>
                        <option>O'zbekcha</option>
                        <option>Русский</option>
                        <option>English</option>
                    </select>
                    <a href="/login" className={styles.kirish}>Kirish</a>
                    <div className={styles.profil}>
                        <a href=""><i class="fa-solid fa-user"></i> profil</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Headerr;
