import styles from './thamGia.module.css';
import ScrollRevealWrapper from '../../../utilities/hooks/scrollingAnimation/ScrollRevealWrapper';

import deco3 from '../../../assets/images/deco3.png';
import deco4 from '../../../assets/images/deco4.png';


function Co_thamGia() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <ScrollRevealWrapper>
                    <h3>Tham Gia Ngay Hôm Nay</h3>
                    <p>Nếu bạn là một cá nhân đam mê ngành game, hãy bắt đầu hành trình của mình cùng GameDov! Dù bạn là người mới bắt đầu hay đã có nhiều năm kinh nghiệm, nền tảng của chúng tôi sẽ luôn là nơi hỗ trợ bạn trên con đường phát triển sự nghiệp.</p>
                    <button type="button">Tham gia ngay</button>
                </ScrollRevealWrapper>
            </div>

            <img src={deco3} alt="deco3"></img>
            <img src={deco4} alt="deco4"></img>
        </div>
    );
}


export default Co_thamGia