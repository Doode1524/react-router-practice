import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({input, label}) { // destructured formProps
        return(
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    render(){
        return (
            <form className="ui form">
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)
