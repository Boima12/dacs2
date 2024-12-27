import styles from './entry.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Co_navibar from '~/src/pages/navibar/navibar';

import signin_img1 from '../../../assets/images/signin_img1.webp';
import signin_img2 from '../../../assets/images/signin_img2.png';


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


function Co_entry() {

    const navigate = useNavigate();

    const thanhTrenDangNhapRef = useRef(null);
    const thanhTrenDangKyRef = useRef(null);
    const formDangNhapRef = useRef(null);
    const formDangKyRef = useRef(null);

    const [isDangNhap, setIsDangNhap] = useState(true);

    const handleDangNhapClick = () => {
        if (isDangNhap == false) {
            thanhTrenDangKyRef.current.style.background = '#D9D9D9';
            thanhTrenDangNhapRef.current.style.background = '#FFF';

            formDangKyRef.current.style.opacity = 0;
            setTimeout(() => {
                formDangKyRef.current.style.display = 'none';
                formDangNhapRef.current.style.display = 'flex';

                setTimeout(() => {
                    formDangNhapRef.current.style.opacity = 1;
                }, 200);
            }, 200);

            setIsDangNhap(true);
        }
    };
    

    const handleDangKyClick = () => {
        if (isDangNhap == true) {
            thanhTrenDangNhapRef.current.style.background = '#D9D9D9';
            thanhTrenDangKyRef.current.style.background = '#FFF';

            formDangNhapRef.current.style.opacity = 0;
            setTimeout(() => {
                formDangNhapRef.current.style.display = 'none';
                formDangKyRef.current.style.display = 'flex';

                setTimeout(() => {
                    formDangKyRef.current.style.opacity = 1;
                }, 200);
            }, 200);

            setIsDangNhap(false);
        }
    };


    const dangNhapPost = async () => {
        const accountName = formDangNhapRef.current.querySelector('input[name="dangNhap_accountName"]').value;
        const accountPassword = formDangNhapRef.current.querySelector('input[name="dangNhap_accountPassword"]').value;
    
        // Validate inputs (optional but recommended)
        if (!accountName || !accountPassword ) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        try {
            // Send the POST request
            const response = await axios.post('http://127.0.0.1:8000/account/dangNhap', {
                accountName: accountName,
                accountPassword: accountPassword,
            });
    
            if (response.data === 'account true') {
                console.log(response.data);
                
                setCookie('accountName', accountName.trim(), 30);
                setCookie('accountPassword', accountPassword.trim(), 30);   

                navigate('/pages/account'); // Navigate to the next page
            } else {
                console.log(response.data);

                alert('sai tên đăng nhập hoặc mật khẩu!');
            }

        } catch (error) {
            // Handle error
            console.error('Error during log in:', error.response.data);
            alert('lỗi hệ thống!.');
        }

    }


    const dangKyPost = async () => {
        // Get the input values
        const tenCuaBan = formDangKyRef.current.querySelector('input[name="dangKy_accountName"]').value;
        const email = formDangKyRef.current.querySelector('input[name="dangKy_accountEmail"]').value;
        const matKhau = formDangKyRef.current.querySelector('input[name="dangKy_accountPassword"]').value;
    
        // Validate inputs (optional but recommended)
        if (!tenCuaBan || !email || !matKhau) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
    
        try {
            // Send the POST request
            await axios.post('http://127.0.0.1:8000/account/dangKy', {
                name: tenCuaBan,
                email: email,
                password: matKhau,
            });
    
            // Handle success
            console.log('Đăng ký thành công!');

            setCookie('accountName', tenCuaBan.trim(), 30);
            setCookie('accountPassword', matKhau.trim(), 30);            

            navigate('/pages/account/entry/registering'); // Navigate to the next page
        } catch (error) {
            // Handle error
            console.error('Error during creating new account:', error);
            alert('Đăng ký thất bại! Vui lòng thử lại.');
        }
    };



    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.mainPart}>

                <div className={styles.box1}>
                    <div className={styles.sideDecoration}>
                        <div className={styles.images}>
                            <img src={signin_img1} alt="signin_img1"></img>
                            <img src={signin_img2} alt="signin_img2"></img>
                        </div>

                        <h3>Make your dream come true.</h3>
                        <p>GameDov</p>
                    </div>

                    <div className={styles.form1}>
                        <div className={styles.thanhTren}>
                            <button type="button" 
                                className={styles.dangNhap} 
                                ref={thanhTrenDangNhapRef}
                                onClick={handleDangNhapClick}
                            >Đăng nhập</button>

                            <button type="button" 
                                className={styles.dangKy} 
                                ref={thanhTrenDangKyRef}
                                onClick={handleDangKyClick}
                            >Đăng ký</button>
                        </div>

                        <form className={styles.form_dangNhap} ref={formDangNhapRef}>
                            <input type="text" name='dangNhap_accountName' placeholder="Tên tài khoản"></input>
                            <input type="password" name='dangNhap_accountPassword' placeholder="Mật khẩu"></input>

                            <div className={styles.LuuMatKhau}>
                                <input type="checkbox" className={styles.check1}></input>
                                <label>Lưu mật khẩu</label>
                            </div>

                            <button type="button" onClick={dangNhapPost}>Đăng nhập</button>
                        </form>

                        <form className={styles.form_dangKy} ref={formDangKyRef}>
                            <input type="text" name='dangKy_accountName' placeholder="Tên của bạn"></input>
                            <input type="email" name='dangKy_accountEmail' placeholder="Email"></input>
                            <input type="password" name='dangKy_accountPassword' placeholder="Mật khẩu"></input>

                            <div className={styles.checkBox2}>
                                <input type="checkbox" className={styles.check2}></input>
                                <label>Bằng cách đăng ký, bạn đồng ý với <span className={styles.dkdv}>Điều khoản dịch vụ</span> và <span className={styles.csbm}>Chính sách bảo mật</span> của chúng tôi</label>
                            </div>

                            <button type="button" onClick={dangKyPost}>Đăng ký</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Co_entry