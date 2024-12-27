import styles from './jobCard.module.css';
import { useNavigate } from 'react-router-dom';


function Co_jobCard() {

    const navigate = useNavigate();

    const handleXem = () => {
        navigate('/pages/job/jobInformation')
    }

    return(
        <div className={styles.main}>

            <p className={styles.jobTitle}>jobTitle</p>
            <p className={styles.workType}>workType</p>
            <p className={styles.jobDescription}>jobDescription</p>

            <div className={styles.textSide}>
                <p className={styles.location}>location</p>
                <p className={styles.jobSalary}>jobSalary</p>
            </div>

            <button type="button" className={styles.xem} onClick={handleXem}>Xem</button>

        </div>
    );
}


export default Co_jobCard