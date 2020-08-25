import React, { Component } from 'react';
import styles from './ApplicationForm.module.css';
import { Form, Input } from 'react-formalized';

class ApplicationForm extends Component {
    state = {
        formIsValid: false,
        orderForm: {
            purchasePrice: {
                elementType: 'input',
                type: 'text',
                identifier: 'purchasePrice',
                placeholder: 'Auto Purchase Price',
                validation: {
                   required: true,
                   number: true
                },
            },
            make: {
                elementType: 'input',
                type: 'text',
                identifier: 'make',
                placeholder: 'Auto Make',
                validation: {
                   required: true            }
            },
            model: {
                elementType: 'input',
                type: 'text',
                identifier: 'model',
                placeholder: 'Auto Model',
                validation: {
                   required: true            }
            },
            income: {
                elementType: 'input',
                type: 'text',
                identifier: 'income',
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
                identifier: 'creditScore',
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
    }

    onChangeHandler = (formState) => {
        this.setState({formIsValid: formState.isValid});
    }

    onSubmitHandler = (event, formState) => {
        event.preventDefault();
        window.alert(JSON.stringify(formState, null, 3));
    }


    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <Form
            onChange={this.onChangeHandler}
            onSubmit={this.onSubmitHandler} >
                {formElementsArray.map(formElement => (
                    <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    type={formElement.config.type} 
                    identifier={formElement.config.identifier}
                    placeholder={formElement.config.placeholder}
                    validation={formElement.config.validation}
                    />            
                ))}
                {this.state.formIsValid ? <button type='submit'>Submit</button> :
                <button type='submit' disabled>Submit</button> }
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