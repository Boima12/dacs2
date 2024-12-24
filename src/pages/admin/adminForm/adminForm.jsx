import styles from './adminForm.module.css';
import axios from 'axios';

function Co_adminForm() {

    const sendHandler = async (event) => {
        event.preventDefault();

        const form = event.target;

        try {
            await axios.post('http://127.0.0.1:8000/formhandler/send', {
                name: form.elements.name.value,
                hobby: form.elements.hobby.value,
            });

            alert("success, data saved into database.")
            form.reset();

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };


    const searchHandler = async (event) => {
        event.preventDefault();

        const form = event.target;

        try {
            const response = await axios.post('http://127.0.0.1:8000/formhandler/search', {
                name: form.elements.name.value,
            });

            form.elements.hobby.value = response.data;

        } catch (error) {
            console.error('Error searching data:', error);
        }
    };


    return(
        <div className={styles.main}>

            <div className={styles.send}>
                <form onSubmit={sendHandler}>
                    <input type="text" name="name" placeholder='Human’s name'></input>
                    <input type="text" name="hobby" placeholder='Human’s hobby'></input>
                    <button type="submit">Send</button>
                </form>
            </div>
            
            <div className={styles.search}>
                <form onSubmit={searchHandler}>
                    <input type="text" name="name" placeholder='Human’s name to search'></input>
                    <button type="submit">Search</button>
                    <input type="text" name="hobby" placeholder='Human’s hobby result' readOnly></input>
                </form>
            </div>

        </div>
    );
}


export default Co_adminForm