import styles from './navibar.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import chatimg from '../../assets/images/chat.png';
import inboximg from '../../assets/images/inbox.png';
import userimg from '../../assets/images/user.png';

function Co_navibar() {

    const navigate = useNavigate();


    // Account logged checking
    const [isAccountApproved, setIsAccountApproved] = useState(false);

    // Simulating account approval check (replace this logic with cookies/session handling later)
    useEffect(() => {
        // Here you would check cookies, session, or API to verify the account
        setIsAccountApproved(false); // Set the state based on the logic
    }, []);

    
    // accountMenu
    const accountMenuRef = useRef(null);
    const [isAccountMenuVisible, setIsAccountMenuVisible] = useState(false);

    const accountMenuShow = () => {
        if (accountMenuRef.current) {
            setIsAccountMenuVisible(true);
        }
    };

    useEffect(() => {
        // Hide accountMenu when clicking outside
        const handleClickOutside = (event) => {
            if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
                setIsAccountMenuVisible(false);
            }
        };

        // document here refer to entire webpage, this mean the handleClickOutside always be trigger whenever we on the page(on the page only because return () code below will clean this up when we leave the page)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    
    return (
        <div className={styles.main}>

            <div className={styles.navibar}>

                <nav>
                    <h3 className={styles.navigation_component} onClick={() => navigate('/')}>GameDov</h3>
                    <p className={styles.navigation_component}>Trang Chủ</p>
                    <p className={styles.navigation_component}>Tìm Việc</p>
                    <p className={styles.navigation_component}>Tuyển Dụng</p>
                    <p className={styles.navigation_component} onClick={() => navigate('/pages/admin')}>Admin</p>
                </nav>

                <div 
                className={styles.entryBt} 
                style={{ display: isAccountApproved ? 'none' : 'inline-block' }}
                >
                    <button type="button" onClick={() => navigate('/pages/account')}>Login / Sign up</button>
                </div>
                
                <div 
                className={styles.approved} 
                style={{ display: isAccountApproved ? 'flex' : 'none' }}
                >
                    <img className={styles.chat} src={chatimg} alt="Chat"></img>
                    <img className={styles.inbox} src={inboximg} alt="Inbox"></img>
                    <img className={styles.user} src={userimg} alt="User"
                        onClick={accountMenuShow}
                    ></img>
                </div>

                <div 
                className={styles.accountMenu} 
                ref={accountMenuRef}
                style={{ display: isAccountMenuVisible ? 'inline-block' : 'none' }}
                >
                    <ul>
                        <li>Trang tài khoản</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Co_navibar;
