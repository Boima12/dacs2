import styles from './accountSettings_security.module.css';


function Co_accountSettings_security() {

    return(
        <div className={styles.main}>

            <div className={styles.infoPanel}>
                <h2>Bảo mật</h2>

                <div className={styles.input}>
                    <h3>mật khẩu hiện tại</h3>
                    <input type="text" placeholder='mật khẩu hiện tại' name='accountName'></input>
                </div>

                <div className={styles.input}>
                    <h3>mật khẩu mới</h3>
                    <input type="text" placeholder='mật khẩu mới' name='fullName'></input>
                </div>

                <div className={styles.input}>
                    <h3>xác nhận mật khẩu mới</h3>
                    <input type="text" placeholder='xác nhận mật khẩu mới' name='accountAbout'></input>
                </div>

                <button type='button'>Lưu thay đổi</button>
            </div>


        </div>
    );
}


export default Co_accountSettings_security