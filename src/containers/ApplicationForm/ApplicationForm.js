import React, { Component } from 'react';
import styles from './ApplicationForm.module.css';
import { Form } from 'react-formalized';
import Input from '../../components/UI/Inputs/Input';

class ApplicationForm extends Component {
    render(){
        let form = (
            <Form>
                <Input 
                elementType='input'
                type='text' 
                placeholder='text field'
                required='true'
                value=''
                />            
            </Form>
        )
        return (
            <div className={styles.FormContainer}>
                <h1>Auto Application</h1>
                {form}
            </div>
        );
    }
}

export default ApplicationForm;