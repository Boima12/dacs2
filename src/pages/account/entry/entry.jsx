import styles from './entry.module.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Co_navibar from '~/src/pages/navibar/navibar';

import signin_img1 from '../../../assets/images/signin_img1.webp';
import signin_img2 from '../../../assets/images/signin_img2.png';

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
                            <input type="email" placeholder="Email"></input>
                            <input type="text" placeholder="Mật khẩu"></input>

                            <div className={styles.LuuMatKhau}>
                                <input type="checkbox" className={styles.check1}></input>
                                <label>Lưu mật khẩu</label>
                            </div>

                            <button type="button">Đăng nhập</button>
                        </form>

                        <form className={styles.form_dangKy} ref={formDangKyRef}>
                            <input type="text" placeholder="Tên của bạn"></input>
                            <input type="email" placeholder="Email"></input>
                            <input type="text" placeholder="Mật khẩu"></input>

                            <div className={styles.checkBox2}>
                                <input type="checkbox" className={styles.check2}></input>
                                <label>Bằng cách đăng ký, bạn đồng ý với <span className={styles.dkdv}>Điều khoản dịch vụ</span> và <span className={styles.csbm}>Chính sách bảo mật</span> của chúng tôi</label>
                            </div>

                            <button type="button" onClick={() => navigate('/pages/account/entry/registering')}>Đăng ký</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Co_entry