import styles from './adminSession.module.css';
import axios from 'axios';

function Co_adminSession() {

    const createHandler = () => {
        const nickname = document.querySelector('input[placeholder="Nickname"]');
        const age = document.querySelector('input[placeholder="Age"]');
        const point = document.querySelector('input[placeholder="Point"]');

        const Humanoid = { nickname: nickname.value, age: parseInt(age.value, 10), point: parseInt(point.value, 10) };

        // Save to sessionStorage
        sessionStorage.setItem(nickname.value, JSON.stringify(Humanoid));
        alert(`${nickname.value} created and saved in sessionStorage!`);

        nickname.value = "";
        age.value = "";
        point.value = "";
    };

    const deleteHandler = () => {
        const nickname = document.querySelector('input[name="delete_nickname"]');

        // Remove from sessionStorage
        sessionStorage.removeItem(nickname.value);
        alert(`${nickname.value} deleted from sessionStorage!`);

        nickname.value = "";
    };

    const printAllHandler = () => {
        const allKeys = Object.keys(sessionStorage);
        const allHumanoids = allKeys.map(key => JSON.parse(sessionStorage.getItem(key)));
        
        document.querySelector(`.${styles.printText}`).textContent = JSON.stringify(allHumanoids, null, 2);
    };


    const sendHandler = async (event) => {
        event.preventDefault();

        const nickname = document.querySelector('input[name="send_nickname"]');
        const person = sessionStorage.getItem(`${nickname.value}`)

        console.log(person.toString());

        try {
            await axios.post('http://127.0.0.1:8000/sessionhandler', {
                person: person,
            });

            alert(`session saved!.`)
        } catch (error) {
            console.error('Error saving session:', error);
        }

    }
    
    return (
        <div className={styles.main}>
            <div className={styles.createAndDelete}>
                <div className={styles.create}>
                    <input type="text" placeholder="Nickname"></input>
                    <input type="text" placeholder="Age"></input>
                    <input type="text" placeholder="Point"></input>
                    <button type="button" onClick={createHandler}>Create</button>
                </div>

                <div className={styles.delete}>
                    <input type="text" name="delete_nickname" placeholder="Nickname"></input>
                    <button type="button" onClick={deleteHandler}>Delete</button>
                </div>
            </div>

            <div className={styles.print}>
                <button type="button" onClick={printAllHandler}>Print all</button>
                <pre className={styles.printText}> </pre>
            </div>

            <div className={styles.send}>
                <input type="text" name="send_nickname" placeholder='Nickname'></input>
                <button type="button" onClick={sendHandler}>Send session to server</button>   
            </div>
        </div>
    );
}

export default Co_adminSession;
