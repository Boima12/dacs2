import styles from './account.module.css';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import Co_navibar from '../navibar/navibar';



function Co_account() {

    const [accountData, setAccountData] = useState(null);

    // Helper function to get cookies
    const getCookie = (cookieName) => {
        const cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            const [key, value] = cookie.split('=');
            if (key === cookieName) {
                return decodeURIComponent(value);
            }
        }
        return null;
    };


    const accountNameRef = useRef();
    const fullNameRef = useRef();
    const accountAboutRef = useRef();
    const accountSkillsRef = useRef();
    const accountCurrentJobRef = useRef();
    const accountDesiredRolesRef = useRef();
    const accountPreferedLocationRef = useRef();
    const accountSalaryRef = useRef();
    const accountPhoneRef = useRef();
    const accountEmailRef = useRef();
    const accountAddressRef = useRef();
    const accountLinkPortfolioRef = useRef();
    const accountLinkLinkedinRef = useRef();
    const accountLinkTwitterRef = useRef();
    const accountLinkGithubRef = useRef();
    const accountLinkFacebookRef = useRef();

    useEffect(() => {
        const accountName = getCookie('accountName');

        // Make the API call to fetch account data
        const fetchAccountData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/account/ac', {
                    accountName: accountName,
                });

                // Store account data in state
                setAccountData(response.data);

            } catch (error) {
                console.error('Error fetching account data:', error);
                alert('Failed to load account data.');
            }
        };

        // Call fetch function
        fetchAccountData();
    }, []);

    // Update refs with the fetched account data when it's available
    useEffect(() => {
        if (accountData) {
            accountNameRef.current.innerText = accountData.accountName || "";
            fullNameRef.current.innerText = accountData.fullName || "";
            accountAboutRef.current.innerText = accountData.accountAbout || "";
            accountSkillsRef.current.innerText = accountData.accountSkills ? "Kĩ năng: " + accountData.accountSkills : "";
            accountCurrentJobRef.current.innerText = accountData.accountCurrentJob ? "Công việc hiện tại: " + accountData.accountCurrentJob : "";
            accountDesiredRolesRef.current.innerText = accountData.accountDesiredRoles ? "Nghề nghiệp mong muốn: " + accountData.accountDesiredRoles : "";
            accountPreferedLocationRef.current.innerText = accountData.accountPreferedLocation ? "Nơi làm việc: " + accountData.accountPreferedLocation : "";
            accountSalaryRef.current.innerText = accountData.accountSalary ? "Lương thỏa thuận: " + accountData.accountSalary : "";
            accountPhoneRef.current.innerText = accountData.accountPhone ? "Điện thoại: " + accountData.accountPhone : "";
            accountEmailRef.current.innerText = accountData.accountEmail ? "Email: " + accountData.accountEmail : "";
            accountAddressRef.current.innerText = accountData.accountAddress ? "Địa chỉ: " + accountData.accountAddress : "";
    
            // Handle blank values for social links
            accountLinkPortfolioRef.current.innerText = accountData.accountLink_portfolio || "";
            accountLinkLinkedinRef.current.innerText = accountData.accountLink_linkedin || "";
            accountLinkTwitterRef.current.innerText = accountData.accountLink_twitter || "";
            accountLinkGithubRef.current.innerText = accountData.accountLink_github || "";
            accountLinkFacebookRef.current.innerText = accountData.accountLink_facebook || "";
        }
    }, [accountData]);





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
                                    <p name="accountName" ref={accountNameRef}>accountName</p>
                                    <p name="fullName" ref={fullNameRef}>fullName</p>
                                </div>
                            </div>

                            <div className={styles.account_bottom}>
                                <p name="accountAbout" ref={accountAboutRef}>accountAbout</p>
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
                            <p name="accountSkills" ref={accountSkillsRef}>accountSkills</p>
                            <p name="accountCurrentJob" ref={accountCurrentJobRef}>accountCurrentJob</p>
                            <p name="accountDesiredRoles" ref={accountDesiredRolesRef}>accountDesiredRoles</p>
                            <p name="accountPreferedLocation" ref={accountPreferedLocationRef}>accountPreferedLocation</p>
                            <p name="accountSalary" ref={accountSalaryRef}>accountSalary</p>
                        </div>

                        <div className={styles.box2}>
                            <h3>Connection</h3>
                            <p name="accountPhone" ref={accountPhoneRef}>accountPhone</p>
                            <p name="accountEmail" ref={accountEmailRef}>accountEmail</p>
                            <p name="accountAddress" ref={accountAddressRef}>accountAddress</p>
                            <p name="accountLink_portfolio" ref={accountLinkPortfolioRef}>accountLink_portfolio</p>
                            <p name="accountLink_linkedin" ref={accountLinkLinkedinRef}>accountLink_linkedin</p>
                            <p name="accountLink_twitter" ref={accountLinkTwitterRef}>accountLink_twitter</p>
                            <p name="accountLink_github" ref={accountLinkGithubRef}>accountLink_github</p>
                            <p name="accountLink_facebook" ref={accountLinkFacebookRef}>accountLink_facebook</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default Co_account