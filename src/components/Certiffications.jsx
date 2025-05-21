import { useState } from 'react';
import styles from './Certifications.module.css';

export function Certifications(){
    const [items, setItems] = useState([
        {   id: 1, 
            active: false,
            title: 'GIT Tutorial',
            issuedBy: 'Great Learnings',
            compilationDate: 'September 2024' 
        },
        {   id: 2, 
            active: false,
            title: 'Python and Flask Framework course',
            issuedBy: 'Udemy',
            compilationDate: 'September 2024' 
        },
        {   id: 3, 
            active: false,
            title: 'React Crash Course: From zero to Hero',
            issuedBy: 'Udemy',
            compilationDate: 'September 2024' 
        },
        {   id: 4, 
            active: false,
            title: 'Social Media Graphics Design Masterclass with Adobe and Canvas',
            issuedBy: 'Udemy',
            compilationDate: 'September 2024' 
        },
        {   id: 5, 
            active: false,
            title: 'Project on University Admit Eligibility Predictor',
            issuedBy: 'ICT Academy ',
            compilationDate: 'February 2023' 
        },
        {   id: 6, 
            active: false,
            title: 'Getting started with Python and Python Data Structures',
            issuedBy: 'Coursera ',
            compilationDate: 'August 2020' 
        }
    ]);

    function hanldeShowCertificate(clickedId){
        const updatedItems = items.map(item => ({
          ...item,
          active:  item.id === clickedId ? !item.active: item.active, // Only the clicked one is true
        }));
        // console.log(updatedItems);
        setItems(updatedItems);
    }

    return (
        <>
            {/* Certifications */}
            <div className={styles.certificationSections}>
              <h5>CERTIFICATIONS</h5>
              <div className={styles.aboutCertificateSection}>
                <ul>
                    {items.map(item => (
                    <li
                      key={item.id}
                      onClick={() => hanldeShowCertificate(item.id)}
                    >
                        {item.active ? 
                        <div className={styles.aboutCertificateSectionInfo}>
                            <div className={styles.certificationInfoHeader}>
                                <h4>{item.title}</h4>
                            </div>
                            <div className={styles.certificationInfo}>
                                <p>{item.issuedBy}</p>
                                <p>Compilation Date: {item.compilationDate}</p>
                            </div>
                        </div> :
                        <div 
                            className={styles.aboutCertificateSectionInfo}
                            style={{height: '102px'}}
                        >
                            <div className={styles.certificationInfoHeader} style={{borderRadius: '15px'}}>
                                <h4>{item.title}</h4>
                            </div>
                        </div>}
                    </li>
                    ))}
                </ul>
              </div>
            </div>
        </>
        
    );
}