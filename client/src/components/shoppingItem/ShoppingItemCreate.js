import React, { Component } from 'react';
import {Field, reduxForm }from 'redux-form'
import { connect } from 'react-redux';

import { createShoppingItem } from '../../actions';

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

    renderInput = ({input, customClass, type, meta}) =>{
        const formClassName = `form-group ${customClass}`;
        const fieldClassName = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`
        return(
            <div className={formClassName}>
                <input className={fieldClassName} type={type} {...input} autoComplete="off" />
                {this.renderErrorMessage(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createShoppingItem(formValues);
    }

    render(){
        return(
            <form className="d-flex" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="shoppingItemQuantity" component={this.renderInput} customClass="col-3" type="number" />
                <Field name="shoppingItemName" component={this.renderInput} customClass="col-6" type="text" />
                <button className="btn btn-primary col-3" type="submit">Submit!</button>
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

const formWrapped = reduxForm({form: 'ShoppingItemCreate', validate})(ShoppingItemCreate);

export default connect(null, {createShoppingItem})(formWrapped);