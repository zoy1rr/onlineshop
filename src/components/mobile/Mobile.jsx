import { Navigate } from 'react-router-dom'
import styles from './mobile.module.css'

function Mobile() {
    return (
        <div>
            <div className={styles.bg}>
                <div className={styles.menu}>


                    <div className={styles.menu_card}>
                        <a href="">
                            <i class="fa-regular fa-house"></i>
                            <p>Bosh sahifa</p>
                        </a>
                    </div>
                    <div className={styles.menu_card}>
                        <a href="">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <p>Savat</p>
                        </a>
                    </div>
                    <div className={styles.menu_card}>
                        <a href="">
                            <i class="fa-regular fa-user"></i>
                            <p>Profil</p>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Mobile
