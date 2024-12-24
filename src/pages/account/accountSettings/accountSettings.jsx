import styles from './accountSettings.module.css';
import { useState, useEffect } from 'react';

import Co_navibar from '~/src/pages/navibar/navibar';
import Co_accountSettings_info from '~/src/pages/account/accountSettings/accountSettings_info/accountSettings_info';
import Co_accountSettings_security from '~/src/pages/account/accountSettings/accountSettings_security/accountSettings_security';


function Co_accountSettings() {

    const [tabNumber, setTabNumber] = useState(1);

    useEffect(() => {
        setTabNumber(1); 
    }, []);

    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.mainPart}>

                <div className={styles.side}>
                    <ul>
                        <li
                        className={tabNumber === 1 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(1)}
                        >thông tin chung</li>

                        <li
                        className={tabNumber === 2 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(2)}
                        >bảo mật</li>

                        <li
                        className={tabNumber === 3 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(3)}
                        >kinh nghiệm công việc</li>
                    </ul>
                </div>

                <div className={styles.settingsMain}>
                    
                    <div className={styles.settingsWrapper}
                        style={{ display: (tabNumber == 1) ? 'flex' : 'none' }}
                    >
                        <Co_accountSettings_info />
                    </div>

                    <div className={styles.settingsWrapper}
                        style={{ display: (tabNumber == 2) ? 'flex' : 'none' }}
                    >
                        <Co_accountSettings_security />
                    </div>

                    <div className={styles.settingsWrapper}
                        style={{ display: (tabNumber == 3) ? 'flex' : 'none' }}
                    >
                        {/* <Co_adminCookie /> */}
                    </div>

                </div>

            </div>

        </div>
    );
}


export default Co_accountSettings