import styles from './job.module.css';
// import { useNavigate } from 'react-router-dom';

import Co_navibar from '~/src/pages/navibar/navibar';
import Co_jobCard from '~/src/pages/job/jobCard/jobCard';

function Co_job() {

    // const navigate = useNavigate();

    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.mainPart}>

                <div className={styles.panel}>

                    <input type="text" placeholder='Tìm kiếm...'></input>

                    <div className={styles.jobCards}>
                        <Co_jobCard />
                        <Co_jobCard />
                        <Co_jobCard />
                    </div>
                    
                    <button type="button" className={styles.dangKyViec}>Đăng ký việc</button>

                </div>

            </div>

        </div>
    );
}


export default Co_job