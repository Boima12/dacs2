import styles from './card.module.css';
import PropTypes from 'prop-types';

import ScrollRevealWrapper from '../../../../../utilities/hooks/scrollingAnimation/ScrollRevealWrapper';


function Co_card(props) {
    
    return(
        <ScrollRevealWrapper customStyles={styles}>
            <div className={styles.main}>
    
                <ScrollRevealWrapper customStyles={styles}>
                    <img src={props.image} alt="an image"></img>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </ScrollRevealWrapper>
    
            </div>
        </ScrollRevealWrapper>
    );

}


Co_card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    des: PropTypes.string,
}


export default Co_card