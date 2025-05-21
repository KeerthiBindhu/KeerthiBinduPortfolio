import styles from './PersonalInfo.module.css';
import logoImage from '../assests/KeerthiBindu-300.png';

export function PersonalInfo(){
    return(
        <div className={styles.personalInfo}>
            <div className={styles.personalInfoSection}>
                <div className={styles.personalImgSection}>
                    {/* {window.innerWidth} => to check the size of window width */}
                    <figure>
                        <img src={logoImage} alt="Keerthi Bindu Balachander" />
                        <figcaption>Freelance Frontend Developer - Bytevurx Software Solutions</figcaption>
                    </figure>
                </div>
            </div>
            {/* <div className={styles.personalInfoSection}>
                <div className={styles.personalSection}>
                    <h5>SKILLS</h5>
                    <ul>
                        <li>
                            <h4>Programming Lanuguages:</h4>
                            <p>Python, Javascript</p>
                        </li>
                        <li>
                            <h4>Web Development:</h4>
                            <p>HTML, CSS, JavaScript and ReactJs</p>
                        </li>
                        <li>
                            <h4>Database:</h4>
                            <p>SQL Programming, MySQL</p>
                        </li>
                        <li>
                            <h4>Developer Tool:</h4>
                            <p>Git, VS Code</p>
                        </li>
                        <li>
                            <h4>Data Structures</h4>
                        </li>
                        <li>
                            <h4>Data Science</h4>
                        </li>
                    </ul>
                    
                </div>
            </div> */}
        </div>
    );
}