import styles from './accountSettings_info.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Co_accountSettings_info() {
    const [accountData, setAccountData] = useState({
        accountName: '',
        fullName: '',
        accountAbout: '',
        accountSkills: '',
        accountCurrentJob: '',
        accountDesiredRoles: '',
        accountPreferedLocation: '',
        accountSalary: '',
        accountPhone: '',
        accountEmail: '',
        accountAddress: '',
        accountLink_portfolio: '',
        accountLink_linkedin: '',
        accountLink_twitter: '',
        accountLink_github: '',
        accountLink_facebook: '',
    });

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

    useEffect(() => {
        const accountName = getCookie('accountName');

        // Fetch account data
        const fetchAccountData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/account/ac', {
                    accountName: accountName,
                });

                // Update state with fetched account data
                setAccountData(response.data);
            } catch (error) {
                console.error('Error fetching account data:', error);
                alert('Failed to load account data.');
            }
        };

        fetchAccountData();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleLuuThayDoi = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/account/thongTinChung', accountData, {
            });

            console.log(response.data)
            if (response.status === 200) {
                alert('Thay đổi đã được lưu thành công!');
            } else {
                alert('Có lỗi xảy ra khi lưu thay đổi.');
            }

        } catch (error) {
            console.error('Error saving changes:', error.response.data);
            alert('Có lỗi xảy ra khi lưu thay đổi.');
        }
    };



    return (
        <div className={styles.main}>
            <div className={styles.infoPanel}>
                <h2>Thông tin chung</h2>

                <div className={styles.anhDaiDien}>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75" cy="75" r="74.5" fill="#D9D9D9" stroke="black" />
                    </svg>
                    <button>Sửa</button>
                </div>

                <div className={styles.input}>
                    <h3>tên tài khoản</h3>
                    <input
                        type="text"
                        placeholder="tên tài khoản"
                        name="accountName"
                        value={accountData.accountName}
                        onChange={handleInputChange}
                        readOnly
                    />
                </div>

                <div className={styles.input}>
                    <h3>họ tên đầy đủ</h3>
                    <input
                        type="text"
                        placeholder="họ tên đầy đủ"
                        name="fullName"
                        value={accountData.fullName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>mô tả về bạn</h3>
                    <input
                        type="text"
                        placeholder="mô tả về bạn"
                        name="accountAbout"
                        value={accountData.accountAbout}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className={styles.infoPanel}>
                <h2>Công việc</h2>

                <div className={styles.input}>
                    <h3>kĩ năng/sở trường của bạn</h3>
                    <input
                        type="text"
                        placeholder="kĩ năng/sở trường của bạn"
                        name="accountSkills"
                        value={accountData.accountSkills}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>công việc hiện tại(nếu có)</h3>
                    <input
                        type="text"
                        placeholder="công việc hiện tại(nếu có)"
                        name="accountCurrentJob"
                        value={accountData.accountCurrentJob}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>công việc/vị trí mong muốn</h3>
                    <input
                        type="text"
                        placeholder="công việc/vị trí mong muốn"
                        name="accountDesiredRoles"
                        value={accountData.accountDesiredRoles}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>nơi làm việc mong muốn</h3>
                    <input
                        type="text"
                        placeholder="nơi làm việc mong muốn"
                        name="accountPreferedLocation"
                        value={accountData.accountPreferedLocation}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>mức lương mong muốn</h3>
                    <input
                        type="text"
                        placeholder="mức lương mong muốn"
                        name="accountSalary"
                        value={accountData.accountSalary}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className={styles.infoPanel}>
                <h2>Kết nối</h2>

                <div className={styles.input}>
                    <h3>số điện thoại</h3>
                    <input
                        type="text"
                        placeholder="số điện thoại"
                        name="accountPhone"
                        value={accountData.accountPhone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>email</h3>
                    <input
                        type="text"
                        placeholder="email"
                        name="accountEmail"
                        value={accountData.accountEmail}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>địa chỉ</h3>
                    <input
                        type="text"
                        placeholder="địa chỉ"
                        name="accountAddress"
                        value={accountData.accountAddress}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>link portfolio</h3>
                    <input
                        type="text"
                        placeholder="link portfolio"
                        name="accountLinkPortfolio"
                        value={accountData.accountLink_portfolio}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>link linkedIn</h3>
                    <input
                        type="text"
                        placeholder="link linkedIn"
                        name="accountLinkLinkedin"
                        value={accountData.accountLink_linkedin}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>link twitter</h3>
                    <input
                        type="text"
                        placeholder="link twitter"
                        name="accountLinkTwitter"
                        value={accountData.accountLink_twitter}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>link github</h3>
                    <input
                        type="text"
                        placeholder="link github"
                        name="accountLinkGithub"
                        value={accountData.accountLink_github}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.input}>
                    <h3>link facebook</h3>
                    <input
                        type="text"
                        placeholder="link facebook"
                        name="accountLinkFacebook"
                        value={accountData.accountLink_facebook}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <button type="button" name="saveChangeBt" onClick={handleLuuThayDoi}>
                Lưu thay đổi
            </button>
        </div>
    );
}

export default Co_accountSettings_info;
