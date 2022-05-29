import React, { Component } from 'react';
import NavBar from './components/navbar';
import Joi from 'joi-browser';
import axios from 'axios';
import AddEmployee from './components/addemployee';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EmployeeDetails from './components/employeedetails';

class Show extends Component {
    state = {
        account: { name: "", number: "", address: "", email: "" },
        errors: {},
        emp_details: []
    }

    addServer = async () => {
        const { account } = this.state;
        await axios.post("http://localhost:3001/api/insert", account);
        const original_account = { name: "", number: "", address: "", email: "" };
        this.setState({ account: original_account });
        this.getServer();
    }

    async componentDidMount() {
        this.getServer();
    }

    getServer = async () => {
        const { data: emp_details } = await axios.get("http://localhost:3001/api/employee_details");
        this.setState({ emp_details });
    }

    schema = {
        name: Joi.string().min(5).required().label('Name'),
        number: Joi.string().min(10).max(10).required().label('Number'),
        address: Joi.string().min(10).required().label('Address'),
        email: Joi.string().required().label('Email'),
    }


    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors === null) this.addServer();
    }

    handleDelete = async (e) => {
        await axios.delete(`http://localhost:3001/api/delete/${e.uid}`);
        this.getServer();
    }

    validate = () => {

        const { error } = Joi.validate(this.state.account, this.schema, { abortEarly: false });

        if (!error) return null;
        const errors = {};
        for (let items of error.details)
            errors[items.path[0]] = items.message;
        return errors;
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar />

                <Switch>

                    <Route path="/" exact render={() => <AddEmployee
                        handleSubmit={this.handleSubmit}
                        account={this.state.account}
                        handleChange={this.handleChange}
                        error={this.state.errors}
                    />} />

                    <Route path="/employee_detail" render={() => <EmployeeDetails
                        emp_details={this.state.emp_details}
                        handleDelete={this.handleDelete}
                    />} />

                </Switch>

            </BrowserRouter>
        );
    }
}

export default Show;