import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.qism}>
                    <h2 className={styles.logo}>NB</h2>
                    <p className={styles.matn}>
                        NextBuy — zamonaviy texnologiyalar va sifatli xizmatlar manzili.
                    </p>
                </div>

                <div className={styles.qism}>
                    <h3 className={styles.sarlavha}>Havolalar</h3>
                    <ul className={styles.royxat}>
                        <li><a href="/">Bosh sahifa</a></li>
                        <li><a href="/about">Biz haqimizda</a></li>
                        <li><a href="/contact">Aloqa</a></li>
                        <li><a href="/shop">Do‘kon</a></li>
                    </ul>
                </div>

                <div className={styles.qism}>
                    <h3 className={styles.sarlavha}>Bog‘lanish</h3>
                    <p>📞 +998 95 636 12 48</p>
                    <p>✉️ zoyir9500@gmail.com</p>
                </div>

            </div>

            <div className={styles.past_qator}>
                <p>© {new Date().getFullYear()} NextBuy. Barcha huquqlar himoyalangan.</p>
            </div>
        </footer>
    );
}

export default Footer;
