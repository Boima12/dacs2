import styles from './job.module.css';

import Co_navibar from '~/src/pages/navibar/navibar';

function Co_job() {

    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.mainPart}>
                <div className={styles.box1}>
                    <h3>Title</h3>
                    <p>Description</p>
                </div>

                <div className={styles.box1}>
                    <h3>Title</h3>
                    <p>Description</p>
                </div>

                <div className={styles.box1}>
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>

        </div>
    );
}


export default Co_job