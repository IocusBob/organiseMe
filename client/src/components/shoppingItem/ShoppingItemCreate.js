import React, { Component } from 'react';
import {Field, reduxForm }from 'redux-form'

class ShoppingItemCreate extends Component {

    renderErrorMessage = ({touched, error}) =>{
        if(touched && error){
            return(
                <div className="mt-2 mb-2">
                    <p className="text-danger" >{error}</p>
                </div>
            )
        }
    }

    renderInput = ({input, label, type, meta}) =>{
        const fieldClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return(
            <div className="form-group">
                <label>{label}</label>
                <input className={fieldClassName} type={type} {...input} autoComplete="off" />
                {this.renderErrorMessage(meta)}
            </div>
        )
    }

    onSubmit(formValues){
        console.log(formValues)
    }

    render(){
        return(
            
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="shoppingItemQuantity" component={this.renderInput} label="Quantity" type="number" />
                <Field name="shoppingItemName" component={this.renderInput} label="Shopping Item" type="text" />
                <button className="btn btn-primary" type="submit">Submit!</button>
            </form>
        )
    }
}

const validate = (formValues) =>{
    const errors = {};
    if (!formValues.shoppingItemName){
        errors.shoppingItemName = "* Required"
    }
    if(!formValues.shoppingItemQuantity){
        errors.shoppingItemQuantity = "* Required"
    }
    return errors
}

export default reduxForm({form: 'ShoppingItemCreate', validate})(ShoppingItemCreate)