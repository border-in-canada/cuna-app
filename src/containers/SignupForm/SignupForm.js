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
                value: ''
            },
            password: {
                elementType: 'input',
                type: 'password',
                identifier: 'password',
                placeholder: 'Password',
                validation: {
                    customRules: [{
                        evaluation: value => value.length > 8 && new RegExp(/^(?=.*[0-9])|(?=.*[!@#\\$%\\^&\\*])/).test(value),
                        message: 'Must be 9 or more characters, with a number or special character'
                    }],
                   required: true 
                },
                value: ''
            },
            confirmPw: {
                elementType: 'input',
                type: 'password',
                identifier: 'confirmPw',
                placeholder: 'Confirm Password',
                validation: {
                    customRules: [{
                        evaluation: value => this.passwordValidation(value),
                        message: 'Passwords must match'
                    }],
                   required: true 
                },
                value: ''
            }
        }
    }

    passwordValidation = (value) => {
        return value === this.state.signupForm.password.value;
    }

    onChangeHandler = (formState) => {
        const updatedForm = {...this.state.signupForm};
        const updatedFormElement = {...updatedForm.password};
        updatedFormElement.value = formState.password.value;
        updatedForm.password = updatedFormElement;
        this.setState({formIsValid: formState.isValid, signupForm: updatedForm});
    }

    onSubmitHandler = (event, formState) => {
        event.preventDefault();
        this.props.history.push('/');
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
                    value={formElement.config.value}
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