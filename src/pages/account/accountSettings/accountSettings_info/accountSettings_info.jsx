import styles from './accountSettings_info.module.css';


function Co_accountSettings_info() {

    return(
        <div className={styles.main}>

            <div className={styles.infoPanel}>
                <h2>Thông tin chung</h2>

                <div className={styles.anhDaiDien}>
                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75" cy="75" r="74.5" fill="#D9D9D9" stroke="black"/>
                    </svg>

                    <button>Sửa</button>
                </div>

                <div className={styles.input}>
                    <h3>tên tài khoản</h3>
                    <input type="text" placeholder='tên tài khoản' name='accountName'></input>
                </div>

                <div className={styles.input}>
                    <h3>họ tên đầy đủ</h3>
                    <input type="text" placeholder='họ tên đầy đủ' name='fullName'></input>
                </div>

                <div className={styles.input}>
                    <h3>mô tả về bạn</h3>
                    <input type="text" placeholder='mô tả về bạn' name='accountAbout'></input>
                </div>
            </div>

            <div className={styles.infoPanel}>
                <h2>Công việc</h2>

                <div className={styles.input}>
                    <h3>kĩ năng/sở trường của bạn</h3>
                    <input type="text" placeholder='kĩ năng/sở trường của bạn' name='accountSkills'></input>
                </div>

                <div className={styles.input}>
                    <h3>công việc hiện tại(nếu có)</h3>
                    <input type="text" placeholder='công việc hiện tại(nếu có)' name='accountCurrentJob'></input>
                </div>

                <div className={styles.input}>
                    <h3>công việc/vị trí mong muốn</h3>
                    <input type="text" placeholder='công việc/vị trí mong muốn' name='accountDesiredRoles'></input>
                </div>

                <div className={styles.input}>
                    <h3>nơi làm việc mong muốn</h3>
                    <input type="text" placeholder='nơi làm việc mong muốn' name='accountPreferedLocation'></input>
                </div>

                <div className={styles.input}>
                    <h3>mức lương mong muốn</h3>
                    <input type="text" placeholder='mức lương mong muốn' name='accountSalary'></input>
                </div>
            </div>

            <div className={styles.infoPanel}>
                <h2>Kết nối</h2>

                <div className={styles.input}>
                    <h3>số điện thoại</h3>
                    <input type="text" placeholder='số điện thoại' name='accountPhone'></input>
                </div>

                <div className={styles.input}>
                    <h3>email</h3>
                    <input type="text" placeholder='email' name='accountEmail'></input>
                </div>

                <div className={styles.input}>
                    <h3>địa chỉ</h3>
                    <input type="text" placeholder='địa chỉ' name='accountAddress'></input>
                </div>

                <div className={styles.input}>
                    <h3>link portfolio</h3>
                    <input type="text" placeholder='link portfolio' name=' accountLink_portfolio'></input>
                </div>

                <div className={styles.input}>
                    <h3>link linkedIn</h3>
                    <input type="text" placeholder='link linkedIn' name='accountLink_linkedin'></input>
                </div>

                <div className={styles.input}>
                    <h3>link twitter</h3>
                    <input type="text" placeholder='link twitter' name='accountLink_twitter'></input>
                </div>

                <div className={styles.input}>
                    <h3>link github</h3>
                    <input type="text" placeholder='link github' name='accountLink_github'></input>
                </div>

                <div className={styles.input}>
                    <h3>link facebook</h3>
                    <input type="text" placeholder='link facebook' name='accountLink_facebook'></input>
                </div>
            </div>

            <button type='button' name='saveChangeBt'>Lưu thay đổi</button>

        </div>
    );
}


export default Co_accountSettings_info