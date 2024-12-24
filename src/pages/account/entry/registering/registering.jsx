import styles from './registering.module.css';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    // const handleStep3 = () => {

    // }

    return(
        <div className={styles.main}>

            <div className={styles.step}
            ref={step1Ref}
            >
                <h3>vui lòng cung cấp các thông tin sau để hoàn thành thiết lập tài khoản.</h3>

                <div className={styles.inputs}>
                    <input type="text" placeholder='họ tên đầy đủ'></input>
                    <input type="text" placeholder='mô tả về bạn'></input>
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
                    <input type="text" placeholder='kĩ năng/ sở trường của bạn'></input>
                    <input type="text" placeholder='công việc hiện tại(nếu có)'></input>
                    <input type="text" placeholder='công việc/vị trí mong muốn'></input>
                    <input type="text" placeholder='nơi làm việc mong muốn'></input>
                    <input type="text" placeholder='mức lương mong muốn'></input>
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
                    <input type="text" placeholder='số điện thoại'></input>
                    <input type="text" placeholder='email'></input>
                    <input type="text" placeholder='địa chỉ'></input>
                    <input type="text" placeholder='link portfolio'></input>
                    <input type="text" placeholder='link linkedIn'></input>
                    <input type="text" placeholder='link twitter'></input>
                    <input type="text" placeholder='link github'></input>
                    <input type="text" placeholder='link facebook'></input>
                </div>

                <button type="button"
                onClick={() => navigate('/pages/account')}
                >Hoàn thành</button>
            </div>

        </div>
    );
}


export default Co_registering