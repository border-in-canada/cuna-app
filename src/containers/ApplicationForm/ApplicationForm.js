import React, { Component } from 'react';
import styles from './ApplicationForm.module.css';
import { Form } from 'react-formalized';
import Input from '../../components/UI/Inputs/Input';

class ApplicationForm extends Component {
    state = {
        purchasePrice: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Purchase Price',
            validation: {
               required: true,
               number: true,
               minLength: 4
            }
        }
    }
    render(){
        const formElementsArray = [];
        for (let key in this.state) {
            formElementsArray.push({
                id: key,
                config: this.state[key]
            });
        }

        let form = (
            <Form>
                {formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.config.id}
                    elementType={formElement.config.elementType}
                    type={formElement.config.type} 
                    placeholder={formElement.config.placeholder}
                    validation={formElement.config.validation}
                    />            
                ))}
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