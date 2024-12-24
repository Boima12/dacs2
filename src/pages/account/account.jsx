import styles from './account.module.css';

import Co_navibar from '../navibar/navibar';



function Co_account() {

    return(
        <div className={styles.main}>

            <Co_navibar />
            
            <div className={styles.mainPart}>
                <div className={styles.mainAndSide}>

                    <div className={styles.mainBox}>
                        <div className={styles.account_box}>
                            <div className={styles.account_top}>
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="100" cy="100" r="99.5" fill="#D9D9D9" stroke="black"/>
                                </svg>

                                <div className={styles.text1}>
                                    <p name="accountName">accountName</p>
                                    <p name="fullName">fullName</p>
                                </div>
                            </div>

                            <div className={styles.account_bottom}>
                                <p name="accountAbout">accountAbout</p>
                            </div>
                        </div>

                        <h2>Work Experiences</h2>

                        <div className={styles.experiences}>
                            {/* experience TODO */}
                        </div>
                    </div>

                    <div className={styles.sideBox}>
                        <div className={styles.box2}>
                            <h3>Professional Information</h3>
                            <p name="accountSkills">accountSkills</p>
                            <p name="accountCurrentJob">accountCurrentJob</p>
                            <p name="accountDesiredRoles">accountDesiredRoles</p>
                            <p name="accountPreferedLocation">accountPreferedLocation</p>
                            <p name="accountSalary">accountSalary</p>
                        </div>

                        <div className={styles.box2}>
                            <h3>Connection</h3>
                            <p name="accountPhone">accountPhone</p>
                            <p name="accountEmail">accountEmail</p>
                            <p name="accountAddress">accountAddress</p>
                            <p name="accountLink_portfolio">accountLink_portfolio</p>
                            <p name="accountLink_linkedin">accountLink_linkedin</p>
                            <p name="accountLink_twitter">accountLink_twitter</p>
                            <p name="accountLink_github">accountLink_github</p>
                            <p name="accountLink_facebook">accountLink_facebook</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Co_account