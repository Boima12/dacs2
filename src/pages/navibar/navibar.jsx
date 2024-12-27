import styles from './navibar.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import chatimg from '../../assets/images/chat.png';
import inboximg from '../../assets/images/inbox.png';
import userimg from '../../assets/images/user.png';

function Co_navibar() {

    const navigate = useNavigate();


    // Account logged checking
    const [isAccountApproved, setIsAccountApproved] = useState(false);

    // Helper function to get cookies
    const getCookie = (cookieName) => {
        const cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            const [key, value] = cookie.split('=');
            if (key === cookieName) {
                return decodeURIComponent(value);
            }
        }
        return null;
    };

    // Simulating account approval check
    useEffect(() => {
        // Fetch cookies
        const accountName = getCookie('accountName');
        const accountPassword = getCookie('accountPassword');

        // Check if cookies exist
        if (accountName && accountPassword) {
            // Send a POST request to the server
            axios.post('http://127.0.0.1:8000/account/navibar', {
                accountName,
                accountPassword,
            })
                .then(response => {
                    // If the server returns 'account true', approve the account
                    if (response.data === 'account true') {
                        console.log("[Server: account/navibar] account approved!.")
                        setIsAccountApproved(true);
                    } else {
                        console.log("[Server: account/navibar] account name or password didn't match.")
                        setIsAccountApproved(false);
                    }
                })
                .catch(error => {
                    console.error('[Server: account/navibar] Error verifying account:', error);
                    setIsAccountApproved(false); // Default to false on error
                });
        } else {
            // If no cookies, set to false
            console.log("[Server: account/navibar] found no entry cookies.")
            setIsAccountApproved(false);
        }
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


    function deleteCookie(cname, path = "/", secure = false, sameSite = "Strict") {
        const secureFlag = secure ? "Secure;" : "";
        const sameSiteFlag = `SameSite=${sameSite};`;
        document.cookie = `${encodeURIComponent(cname)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; ${secureFlag} ${sameSiteFlag}`;
    }


    // Dang Xuat
    const handleDangXuat = () => {
        deleteCookie("accountName");
        deleteCookie("accountPassword");

        navigate('/pages/account/entry')
    }

    
    return (
        <div className={styles.main}>

            <div className={styles.navibar}>

                <nav>
                    <h3 className={styles.navigation_component} onClick={() => navigate('/')}>GameDov</h3>
                    <p className={styles.navigation_component}>Trang Chủ</p>
                    <p className={styles.navigation_component} onClick={() => navigate('/pages/job')}>Tìm Việc</p>
                    <p className={styles.navigation_component}>Tuyển Dụng</p>
                    <p className={styles.navigation_component} onClick={() => navigate('/pages/admin')}>Admin</p>
                </nav>

                <div 
                className={styles.entryBt} 
                style={{ display: isAccountApproved ? 'none' : 'inline-block' }}
                >
                    <button type="button" onClick={() => navigate('/pages/account/entry')}>Login / Sign up</button>
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
                        <li onClick={() => navigate('/pages/account')}>Trang tài khoản</li>
                        <li onClick={() => navigate('/pages/account/accountSettings')}>Thiết lập</li>
                        <li onClick={handleDangXuat}>Đăng xuất</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Co_navibar;
