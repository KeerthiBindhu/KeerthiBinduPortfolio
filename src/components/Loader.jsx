import styles from './Loader.module.css';

export function Loader(){

    return(
        <div className={styles.loaderSection}>
            <div className={styles.loaderStyle}>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
}