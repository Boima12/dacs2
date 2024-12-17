import styles from './top.module.css';

import aboutBackground from '../../../assets/images/aboutBackground.jpg';


function Co_top() {

    const img1 = {
        backgroundImage: `url(${aboutBackground})`
    }

    return(
        <div className={styles.main} style={img1}>

            <h3>GameDov</h3>
            <p>GameDov là nền tảng chuyên biệt được thiết kế dành riêng cho cộng đồng các chuyên gia trong ngành công nghiệp game. Chúng tôi mang đến một môi trường lý tưởng để các nhà phát triển, lập trình viên, họa sĩ game, nhà làm phim hoạt hình và những tài năng khác trong lĩnh vực này có thể dễ dàng tạo dựng hồ sơ cá nhân (portfolio) và trình bày các dự án nổi bật của mình.</p>

            <div className={styles.wall2}></div>

        </div>
    );
}


export default Co_top