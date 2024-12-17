import styles from './navibar.module.css';
import { useNavigate } from 'react-router-dom';

import chatimg from '../../assets/images/chat.png';
import inboximg from '../../assets/images/inbox.png';
import userimg from '../../assets/images/user.png';

function Co_navibar() {

    const navigate = useNavigate();

    return (
        <div className={styles.main}>

            <div className={styles.navibar}>
                <a href="#"
                    onClick={() => navigate('/')}
                ><h3>GameDov</h3></a>
                <a href="#"><p>Trang Chủ</p></a>
                <a href="#"><p>Tìm Việc</p></a>
                <a href="#"><p>Tuyển Dụng</p></a>
                
                <img className={styles.chat} src={chatimg} alt="Chat"></img>
                <img className={styles.inbox} src={inboximg} alt="Inbox"></img>
                <img className={styles.user} src={userimg} alt="User"
                    onClick={() => navigate('/pages/account')}
                ></img>
            </div>
            
        </div>
    );
}

export default Co_navibar;
