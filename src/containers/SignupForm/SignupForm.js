import React, { Component } from 'react';
import styles from './SignupForm.module.css';
import { Form, Input } from 'react-formalized';

class SignupForm extends Component {
    state = {
        formIsValid: false,
        signupForm: {
            username: {
                elementType: 'input',
                type: 'email',
                identifier: 'username',
                placeholder: 'Email',
                validation: {
                   required: true
                },
            },
            password: {
                elementType: 'input',
                type: 'password',
                identifier: 'password',
                placeholder: 'Password',
                validation: {
                    customRules: [{
                        evaluation: value => value.length > 8,
                        message: 'Password must be at least 9 characters long'
                    }],
                   required: true 
                }
            },
            confirmPw: {
                elementType: 'input',
                type: 'password',
                identifier: 'confirm',
                placeholder: 'Confirm Password',
                validation: {
                    customRules: [{
                        evaluation: value => value,
                        message: 'Passwords must match'
                    }],
                   required: true 
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
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
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
                <h1>Create Account</h1>
                {form}
            </div>
        );
    }
}

export default SignupForm;