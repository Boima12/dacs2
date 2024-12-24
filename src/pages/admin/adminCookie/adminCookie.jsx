import styles from './adminCookie.module.css';


function Co_adminCookie() {

    return(
        <div className={styles.main}>

            <div className={styles.create}>
                <input type="text" placeholder='Cookie name'></input>
                <input type="text" placeholder='Cookie value'></input>
                <input type="text" placeholder='Expire day'></input>
                <button type="button">Create cookie</button>
            </div>

            <div className={styles.delete}>
                <input type="text" placeholder='Cookie name'></input>
                <button type="button">Delete cookie</button>                
            </div>

            <p className={styles.info}>to view all cookies available, use browser developer console</p>
        
        </div>
    );
}


export default Co_adminCookie