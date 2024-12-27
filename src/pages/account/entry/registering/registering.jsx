import styles from './registering.module.css';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Co_registering() {

    const navigate = useNavigate();

    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);

    useEffect(() => {
        step1Ref.current.style.display = 'flex';
        step2Ref.current.style.display = 'none';
        step3Ref.current.style.display = 'none';

        step1Ref.current.style.opacity = 1;
    }, []);

    const handleStep1 = () => {
        step1Ref.current.style.opacity = 0;

        setTimeout(() => {
            step1Ref.current.style.display = 'none';
            step2Ref.current.style.display = 'flex';

            setTimeout(() => {
                step2Ref.current.style.opacity = 1;
            }, 400);
        }, 400);
    };

    const handleStep2 = () => {
        step2Ref.current.style.opacity = 0;

        setTimeout(() => {
            step2Ref.current.style.display = 'none';
            step3Ref.current.style.display = 'flex';

            setTimeout(() => {
                step3Ref.current.style.opacity = 1;
            }, 400);
        }, 400);
    };


    // sending to Backend

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

    const fullNameRef = useRef();
    const accountAboutRef = useRef();
    const accountSkillsRef = useRef();
    const accountCurrentJobRef = useRef();
    const accountDesiredRolesRef = useRef();
    const accountPreferedLocationRef = useRef();
    const accountSalaryRef = useRef();
    const accountPhoneRef = useRef();
    const accountAddressRef = useRef();
    const accountLinkPortfolioRef = useRef();
    const accountLinkLinkedinRef = useRef();
    const accountLinkTwitterRef = useRef();
    const accountLinkGithubRef = useRef();
    const accountLinkFacebookRef = useRef();

    const accountName = getCookie('accountName');

    if (!accountName) {
        alert("Account name is not found in the cookie.");
        return;
    }

    const handleStep3 = async () => {
        const requestData = {
            // Collect all data from refs
            fullName: fullNameRef.current.value,
            accountAbout: accountAboutRef.current.value,
            accountSkills: accountSkillsRef.current.value,
            accountCurrentJob: accountCurrentJobRef.current.value,
            accountDesiredRoles: accountDesiredRolesRef.current.value,
            accountPreferedLocation: accountPreferedLocationRef.current.value,
            accountSalary: accountSalaryRef.current.value,
            accountPhone: accountPhoneRef.current.value,
            accountAddress: accountAddressRef.current.value,
            accountLink_portfolio: accountLinkPortfolioRef.current.value,
            accountLink_linkedin: accountLinkLinkedinRef.current.value,
            accountLink_twitter: accountLinkTwitterRef.current.value,
            accountLink_github: accountLinkGithubRef.current.value,
            accountLink_facebook: accountLinkFacebookRef.current.value,
        };
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/account/registering', {
                ...requestData,
                accountName: accountName, // Send the accountName along with other data
            });
    
            // Handle success
            console.log(response.data);            

            navigate('/pages/account')
        } catch (error) {
            // Handle error
            console.error('Error during registration:', error.response.data);
            alert('Registering thất bại! Vui lòng thử lại.');
        }
    };

    return(
        <div className={styles.main}>

            <div className={styles.step}
            ref={step1Ref}
            >
                <h3>vui lòng cung cấp các thông tin sau để hoàn thành thiết lập tài khoản.</h3>

                <div className={styles.inputs}>
                    <input type="text" name='fullName' placeholder='họ tên đầy đủ' ref={fullNameRef}></input>
                    <input type="text" name='accountAbout' placeholder='mô tả về bạn' ref={accountAboutRef}></input>
                </div>

                <button 
                type="button"
                onClick={handleStep1}
                >Tiếp tục</button>
            </div>


            <div className={styles.step}
            ref={step2Ref}
            >
                <h3>vui lòng cung cấp các thông tin sau để hoàn thành thiết lập tài khoản.</h3>

                <div className={styles.inputs}>
                    <input type="text" name='accountSkills' placeholder='kĩ năng/ sở trường của bạn' ref={accountSkillsRef}></input>
                    <input type="text" name='accountCurrentJob' placeholder='công việc hiện tại (nếu có)' ref={accountCurrentJobRef}></input>
                    <input type="text" name='accountDesiredRoles' placeholder='công việc/vị trí mong muốn' ref={accountDesiredRolesRef}></input>
                    <input type="text" name='accountPreferedLocation' placeholder='nơi làm việc mong muốn' ref={accountPreferedLocationRef}></input>
                    <input type="text" name='accountSalary' placeholder='mức lương mong muốn' ref={accountSalaryRef}></input>
                </div>

                <button 
                type="button"
                onClick={handleStep2}
                >Tiếp tục</button>
            </div>


            <div className={styles.step}
            ref={step3Ref}
            >
                <h3>vui lòng cung cấp các thông tin sau để hoàn thành thiết lập tài khoản.</h3>

                <div className={styles.inputs}>
                    <input type="text" name='accountPhone' placeholder='số điện thoại' ref={accountPhoneRef}></input>
                    {/* <input type="text" placeholder='email'></input> */}
                    <input type="text" name='accountAddress' placeholder='địa chỉ' ref={accountAddressRef}></input>
                    <input type="text" name='accountLink_portfolio' placeholder='link portfolio (nếu có)' ref={accountLinkPortfolioRef}></input>
                    <input type="text" name='accountLink_linkedin' placeholder='link linkedIn (nếu có)' ref={accountLinkLinkedinRef}></input>
                    <input type="text" name='accountLink_twitter' placeholder='link twitter (nếu có)' ref={accountLinkTwitterRef}></input>
                    <input type="text" name='accountLink_github' placeholder='link github (nếu có)' ref={accountLinkGithubRef}></input>
                    <input type="text" name='accountLink_facebook' placeholder='link facebook (nếu có)' ref={accountLinkFacebookRef}></input>
                </div>

                <button type="button"
                onClick={handleStep3}
                >Hoàn thành</button>
            </div>

        </div>
    );
}


export default Co_registering