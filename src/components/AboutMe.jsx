import { useState } from 'react';
import styles from './AboutMe.module.css';

export function AboutMe(){
    const [displaySection,setDisplaySection] = useState([true, false, false]);

    function handleDisplaySection(e){
        console.log(e.currentTarget.dataset.indexid);
        index = e.currentTarget.dataset.indexid
        
        setDisplaySection({
            ...displaySection,
            [index]: true
        });
    }

    return (
      <div className={styles.aboutMe}>
        {/* About Me Section */}
        <div className={styles.aboutMeSection}>
          <h3>
            ABOUT<span> Keerthi Bindu Balacahnder:</span>
          </h3>
          <ul>
            <li className={styles.aboutText}>
              <i class="uil uil-angle-double-right"></i>
              <p> 
                Software developer with keen interest in learning and applying it.
              </p>
            </li>
            <li className={styles.aboutText}>
              <i class="uil uil-angle-double-right"></i>
              <p> An intrinsically motivated and creative person, with strong
                  problem-solving and teamwork abilities. I have immense interest in
                  learning new things as well as implementing it. I believe being
                  punctual and disciplined towards doing work is the key to success.
              </p>
            </li>
            <li className={styles.aboutText}>
              <i class="uil uil-angle-double-right"></i>
              <p> About my experience in Bytevurx Software Solutions, there I designed and developed responsive 
                  websites for small businesses using HTML, CSS, and JavaScript. Collaborated with clients to 
                  gather requirements, present wireframes, and deliver final products. Integrated third-party 
                  APIs and built custom features to meet client needs.
              </p>
            </li>
          </ul>
        </div>

        {/* Internships */}
        {/* <div className={styles.aboutSections}>
          <h5>INTERNSHIPS</h5>
          <div className={styles.aboutSectionInfo}>
            <ul>
              <li>
                <h4>Data Science, <span>Exposys DataLabs</span></h4>
                <p className={styles.aboutPText}>From 06.07.2021 To 07.08.2021</p>
              </li>
              <li>
                <h4>Data Science, <span>Exposys DataLabs </span></h4>
                <p className={styles.aboutPText}>From 19.08.2022 To 18.09.2022</p>
              </li>
            </ul>
          </div>
        </div> */}
        
      </div>
    );
}