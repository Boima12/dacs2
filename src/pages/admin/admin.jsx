import styles from './admin.module.css';
import { useState, useEffect } from 'react';

import Co_navibar from '~/src/pages/navibar/navibar';
import Co_adminForm from '~/src/pages/admin/adminForm/adminForm';
import Co_adminSession from '~/src/pages/admin/adminSession/adminSession';
import Co_adminCookie from '~/src/pages/admin/adminCookie/adminCookie';

function Co_admin() {

    // 1 is Form, 2 is Session, 3 is Cookie
    const [tabNumber, setTabNumber] = useState(1);

    useEffect(() => {
        setTabNumber(1); 
    }, []);


    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.adminPart}>

                <div className={styles.adminSide}>
                    <ul>
                        <li
                        className={tabNumber === 1 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(1)}
                        >Form</li>

                        <li
                        className={tabNumber === 2 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(2)}
                        >Session</li>

                        <li
                        className={tabNumber === 3 ? styles.activeTab : ''}
                        onClick={() => setTabNumber(3)}
                        >Cookie</li>

                        <li>Tab 4</li>

                        <li>Tab 5</li>
                    </ul>
                </div>

                <div className={styles.adminMain}>
                    
                    <div className={styles.adminWrapper}
                        style={{ display: (tabNumber == 1) ? 'flex' : 'none' }}
                    >
                        <Co_adminForm />
                    </div>

                    <div className={styles.adminWrapper}
                        style={{ display: (tabNumber == 2) ? 'flex' : 'none' }}
                    >
                        <Co_adminSession />
                    </div>

                    <div className={styles.adminWrapper}
                        style={{ display: (tabNumber == 3) ? 'flex' : 'none' }}
                    >
                        <Co_adminCookie />
                    </div>

                </div>

            </div>

        </div>
    );
}


export default Co_admin