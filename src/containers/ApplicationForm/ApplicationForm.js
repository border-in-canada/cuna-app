import React, { Component } from 'react';

class ApplicationForm extends Component {
    render(){
        let form = (
            <input type='text' placeholder='text field' />
        )
        return (
            <div>
                <h1>Auto Application</h1>
                {form}
            </div>
        );
    }
}

export default ApplicationForm;