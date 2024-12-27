import styles from './accountSettings_security.module.css';
import axios from 'axios';

function Co_accountSettings_security() {

    // Helper function to get a cookie
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

    // Helper function to set a cookie
    function setCookie(cname, cvalue, exdays = 7, path = "/", secure = true, sameSite = "Strict") {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        const secureFlag = secure ? "Secure;" : "";
        const sameSiteFlag = `SameSite=${sameSite};`;
        const encodedName = encodeURIComponent(cname);
        const encodedValue = encodeURIComponent(cvalue);
        document.cookie = `${encodedName}=${encodedValue};${expires};path=${path};${secureFlag}${sameSiteFlag}`;
    }


    const accountName = getCookie('accountName');

    const handleLuuThayDoi = async () => {
        const currentPassword = document.querySelector('[name="currentPassword"]').value;
        const newPassword = document.querySelector('[name="newPassword"]').value;
        const newPasswordCheck = document.querySelector('[name="newPasswordCheck"]').value;

        // Step 1: Check if the new passwords match
        if (newPassword !== newPasswordCheck) {
            alert('Mật khẩu mới và xác nhận mật khẩu mới không khớp.');
            return;
        }

        // Step 2: Make an axios POST request
        try {
            const response = await axios.post('http://127.0.0.1:8000/account/doiMatKhau', {
                accountName,
                currentPassword,
                newPassword,
            });

            console.log(response.data)
            if (response.status === 200) {
                alert('Mật khẩu đã được thay đổi thành công!');
            } else if (response.status === 201) {
                alert('Mật khẩu hiện tại không đúng.');
            } else {
                alert(response.data.message || 'Đã xảy ra lỗi.');
            }

            setCookie('accountName', accountName, 30);
            setCookie('accountPassword', newPassword, 30);

        } catch (error) {
            console.error('Error updating password:', error.response.data);
            alert('Không thể thay đổi mật khẩu. Vui lòng kiểm tra và thử lại.');
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.infoPanel}>
                <h2>Bảo mật</h2>

                <div className={styles.input}>
                    <h3>mật khẩu hiện tại</h3>
                    <input type="password" placeholder='mật khẩu hiện tại' name='currentPassword'></input>
                </div>

                <div className={styles.input}>
                    <h3>mật khẩu mới</h3>
                    <input type="password" placeholder='mật khẩu mới' name='newPassword'></input>
                </div>

                <div className={styles.input}>
                    <h3>xác nhận mật khẩu mới</h3>
                    <input type="password" placeholder='xác nhận mật khẩu mới' name='newPasswordCheck'></input>
                </div>

                <button type='button' onClick={handleLuuThayDoi}>Lưu thay đổi</button>
            </div>
        </div>
    );
}

export default Co_accountSettings_security;
