import styles from './footer.module.css';


function Co_footer() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <div className={styles.congTy}>
                    <h3>CÔNG TY</h3>
                    <a href="#"><p>Giới thiệu</p></a>
                    <a href="#"><p>Trung tâm hỗ trợ</p></a>
                    <a href="#"><p>Điều khoản dịch vụ</p></a>
                    <a href="#"><p>Chính sách bảo mật</p></a>
                </div>

                <div className={styles.theoDoi}>
                    <h3>THEO DÕI CHÚNG TÔI</h3>

                    <div className={styles.icons}>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-snapchat"></i></a>
                        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>



            <p className={styles.copyright}>&copy;2024, Boima</p>

        </div>
    );
}


export default Co_footer