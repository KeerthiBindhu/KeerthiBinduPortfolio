import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { AboutMe } from './components/AboutMe';
import { Certifications } from './components/Certiffications';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { PersonalInfo } from './components/PersonalInfo';
import { Projects } from './components/Projects';

function App() {
  const [isLoading, setIsLoading] =useState(true);
  
  useEffect(() => {
    const timerId = setTimeout(() => setIsLoading(false), 3000);

    // clean-up in case the component unmounts early
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> :
      <>
        <section className={styles.App}>
          <div className={styles.section1}>
            <PersonalInfo />
            <AboutMe />
          </div>
          <div className={styles.section1}>
            <Certifications />
          </div>
          <div className={styles.section1}>
            <Projects />
          </div>
        </section>
        <Footer />
      </>
      }
    </>
  )
}

export default App
