import React, { Component } from 'react';
import axios from 'axios';

class MongoTest extends Component {

    state = {}

    handleTextChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFileChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        for (let name in this.state) {
            formData.append(name, this.state[name]);
        }

        await axios.post("http://localhost:7000/upload/", formData, { "Content-Type": "multipart/form-data" });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleTextChange} id="formGroupExampleInput" placeholder="John" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
                    <input type="text" className="form-control" name="desc" onChange={this.handleTextChange} id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={this.handleFileChange} name="image" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>

                <input type="submit" onClick={this.handleSubmit} className="mt-3" />
            </div>
        );
    }
}

export default MongoTest;