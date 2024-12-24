import styles from './adminCookie.module.css';

function setCookie(cname, cvalue, exdays = 7, path = "/", secure = true, sameSite = "Strict") {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const secureFlag = secure ? "Secure;" : "";
    const sameSiteFlag = `SameSite=${sameSite};`;
    const encodedName = encodeURIComponent(cname);
    const encodedValue = encodeURIComponent(cvalue);
    document.cookie = `${encodedName}=${encodedValue};${expires};path=${path};${secureFlag}${sameSiteFlag}`;
}

function deleteCookie(cname, path = "/", secure = false, sameSite = "Strict") {
    const secureFlag = secure ? "Secure;" : "";
    const sameSiteFlag = `SameSite=${sameSite};`;
    document.cookie = `${encodeURIComponent(cname)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}; ${secureFlag}${sameSiteFlag}`;
}


function Co_adminCookie() {

    const handleCreateCookie = () => {
        const nameInput = document.querySelector('input[placeholder="Cookie name"]');
        const valueInput = document.querySelector('input[placeholder="Cookie value"]');
        const expireInput = document.querySelector('input[placeholder="Expire day"]');

        const cname = nameInput.value.trim();
        const cvalue = valueInput.value.trim();
        const exdays = parseInt(expireInput.value.trim()) || 7; // Default to 7 days if empty or invalid

        if (cname && cvalue) {
            setCookie(cname, cvalue, exdays);
            alert(`Cookie "${cname}" has been created!`);
            nameInput.value = "";
            valueInput.value = "";
            expireInput.value = "";
        } else {
            alert("Please fill in both cookie name and value.");
        }
    };

    const handleDeleteCookie = () => {
        const nameInput = document.querySelector('input[name="delete_cookieName"]');
        const cname = nameInput.value.trim();

        if (cname) {
            deleteCookie(cname);
            alert(`Cookie "${cname}" has been deleted!`);
            nameInput.value = "";
        } else {
            alert("Please enter the name of the cookie to delete.");
        }
    };

    return(
        <div className={styles.main}>

            <div className={styles.create}>
                <input type="text" placeholder='Cookie name'></input>
                <input type="text" placeholder='Cookie value'></input>
                <input type="text" placeholder='Expire day'></input>
                <button type="button" onClick={handleCreateCookie}>Create cookie</button>
            </div>

            <div className={styles.delete}>
                <input type="text" name='delete_cookieName' placeholder='Cookie name'></input>
                <button type="button" onClick={handleDeleteCookie}>Delete cookie</button>                
            </div>

            <p className={styles.info}>to view all cookies available, use browser developer console</p>
        
        </div>
    );
}


export default Co_adminCookie