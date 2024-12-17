import styles from './taiSao.module.css';

import cardimg1 from '../../../assets/images/cardimg1.jpg';
import cardimg2 from '../../../assets/images/cardimg2.jpg';
import cardimg3 from '../../../assets/images/cardimg3.jpg';
import deco2 from '../../../assets/images/deco2.png';

import Co_card from './props/card/card';

function Co_taiSao() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <p>Tại Sao Chọn GameDov?</p>

                <div className={styles.cards}>
                    <Co_card image={cardimg1} 
                    title="Tạo Dựng Portfolio Chuyên Nghiệp"
                    des="Người dùng có thể dễ dàng trình bày các kỹ năng và dự án của mình thông qua giao diện thiết kế trực quan và hiện đại."
                    />

                    <Co_card image={cardimg2} 
                    title="Cơ Hội Việc Làm Đa Dạng"
                    des="Nền tảng giúp kết nối các tài năng trong ngành game với những công việc phù hợp từ khắp nơi trên thế giới."
                    />

                    <Co_card image={cardimg3} 
                    title="Cộng Đồng Năng Động"
                    des="Không chỉ là nơi tìm kiếm việc làm, GameDov còn là không gian để bạn xây dựng mối quan hệ với những người cùng đam mê và khám phá các dự án sáng tạo."
                    />                    
                </div>
            </div>

            <img src={deco2} alt="deco2" className={styles.decoicon2}></img>

        </div>
    );
}


export default Co_taiSao