import styles from './account.module.css';

import Co_navibar from '../navibar/navibar';
import Co_entry from './entry/entry';


function Co_account() {

    return(
        <div className={styles.main}>

            <Co_navibar />
            <Co_entry />

        </div>
    );
}


export default Co_account