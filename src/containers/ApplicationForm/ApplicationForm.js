import React, { Component } from 'react';
import styles from './ApplicationForm.module.css';
import { Form } from 'react-formalized';
import Input from '../../components/UI/Inputs/Input';

class ApplicationForm extends Component {
    state = {
        purchasePrice: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Auto Purchase Price',
            validation: {
               required: true,
               number: true
            }
        },
        make: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Auto Make',
            validation: {
               required: true,
               number: false
            }
        },
        model: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Auto Model',
            validation: {
               required: true,
               number: false
            }
        },
        income: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Estimated Yearly Income',
            validation: {
               required: true,
               number: true
            },
            value: ''
        },
        creditScore: {
            elementType: 'input',
            type: 'text',
            placeholder: 'Estimated Credit Score',
            validation: {
                customRules: [{
                    evaluation: value => value >= 300 && value <= 850,
                    message: 'Value must be from 300-850'
                }],
               required: true,
               number: true
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