import styles from './suMenh.module.css';
import ScrollRevealWrapper from '~/src/utilities/hooks/scrollingAnimation/ScrollRevealWrapper';

import deco1 from '../../../assets/images/deco1.png';
import decoimg1 from '../../../assets/images/decoimg1.jpg';
import decoimg2 from '../../../assets/images/decoimg2.jpg';
import decoimg3 from '../../../assets/images/decoimg3.jpg';

function Co_suMenh() {

    return(
        <div className={styles.main}>

            <div className={styles.box1}>
                <div className={styles.decoImages}>
                    <ScrollRevealWrapper customStyles={styles}>
                        <img src={decoimg1} alt="decoimg1"></img>
                        <img src={decoimg2} alt="decoimg2"></img>
                        <img src={decoimg3} alt="decoimg3"></img>
                    </ScrollRevealWrapper>
                </div>

                <div className={styles.paragraphs}>
                    <p>Sứ Mệnh </p>
                    <p>Sứ mệnh của GameDov là kết nối tài năng với cơ hội. Bằng cách tập trung vào việc hỗ trợ các chuyên gia trong ngành game thể hiện kỹ năng và công việc của mình một cách chuyên nghiệp, chúng tôi hy vọng sẽ tạo ra một cộng đồng phát triển bền vững, nơi tài năng được công nhận và khai thác tối đa.</p>
                </div>
            </div>

            <img src={deco1} alt="deco1" className={styles.decoicon1}></img>
        </div>
    );
}


export default Co_suMenh