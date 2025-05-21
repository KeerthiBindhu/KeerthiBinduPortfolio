import styles from './Projects.module.css';

export function Projects(){
    return(
        <div className={styles.projectsSection}>
            <h5>PROJECTS</h5>
            <div className={styles.projectSection}>
                <div className={styles.project}>
                    <div className={styles.projectTitleSection}>
                        <h3>Sri Ahobila Math Website</h3>
                        <p>HTML, CSS and JavaScript </p>
                        <div id={styles.animate1}></div>
                        <div id={styles.animate2}></div>
                    </div>
                    <div className={styles.projectInfo}>
                        Developed an informative website detailing all functions and events 
                        organized by Sri Ahobila Math, enhancing user engagement through 
                        clear navigation that increased visitors duration by 30 seconds
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitleSection}>
                        <h3>AI Chatbot Website</h3>
                        <p>HTML, CSS and ReactJs</p>
                        <div id={styles.animate1}></div>
                        <div id={styles.animate2}></div>
                    </div>
                    <div className={styles.projectInfo}>
                        Developed a simple AI chatbot website where the users can chat with AI using ReactJs 
                        and Google AI AP
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitleSection}>
                        <h3>Puzzle Website</h3>
                        <p> HTML, CSS and ReactJs </p>
                        <div id={styles.animate1}></div>
                        <div id={styles.animate2}></div>
                    </div>
                    <div className={styles.projectInfo}>
                        Developed a simple website where the users can play SUDOKU and CONNECT-4 
                        games.
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitleSection}>
                        <h3>Quiz_pro Website</h3>
                        <p>Python, Flask and SQLAlchemy</p>
                        <div id={styles.animate1}></div>
                        <div id={styles.animate2}></div>
                    </div>
                    <div className={styles.projectInfo}>
                        Developed a simple website where the users can create their own quizzes or be able to 
                        play quizzes available in the database. Here users can perform CRUD operations.
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectTitleSection}>
                        <h3>Vidyapeeth - University Admit Eligibility Predictor</h3>
                        <p>HTML, CSS and Data Science </p>
                        <div id={styles.animate1}></div>
                        <div id={styles.animate2}></div>
                    </div>
                    <div className={styles.projectInfo}>
                        Developed a prediction model website using data science in backend as well as HTML 
                        and CSS in frontend.
                    </div>
                </div>
            </div>
        </div>
    );
}