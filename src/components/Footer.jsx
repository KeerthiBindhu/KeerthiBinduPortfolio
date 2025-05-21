import styles from './Footer.module.css';

export function Footer(){
    return (
        <div className={styles.FooterSection}>
            <div className={styles.FooterIcon}>
                <a href="https://github.com/KeerthiBindhu">
                    <i class="uil uil-github"></i>
                </a>
            </div>
            <div className={styles.FooterIcon}>
                <a href="#">
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>
        </div>
    );
}