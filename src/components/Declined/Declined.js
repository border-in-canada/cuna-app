import React from 'react';
import { connect } from 'react-redux';
import styles from './Declined.module.css';

const declined = (props) => {
    return (
        <div className={styles.Container}>
            <div>
                <h3>{props.userMessage}</h3><br />
                <h4>Please call customer service at 800-888-1234</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userMessage: state.message
    }
}

export default connect(mapStateToProps, null)(declined);