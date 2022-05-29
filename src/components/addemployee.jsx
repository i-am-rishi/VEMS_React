import React, { Component } from 'react';
class AddEmployee extends Component {
  state = {}
  render() {
    const { handleSubmit, handleChange, error, account } = this.props;
    return (
      <div className="container" style={{ marginTop: 30 }}>
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" style={{marginTop:10,marginBottom:10}} type="submit">Search</button> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
            <input type="text" className="form-control" value={account.name} onChange={handleChange} name="name" id="formGroupExampleInput" placeholder="Rishabh Kumar Srivastava" />
            {error.name && <div className="alert alert-danger">{error.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Contact Number</label>
            <input type="text" className="form-control" value={account.number} onChange={handleChange} name="number" id="formGroupExampleInput2" placeholder="945*****26" />
            {error.number && <div className="alert alert-danger">{error.number}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Address</label>
            <input type="text" className="form-control" value={account.address} onChange={handleChange} name="address" id="formGroupExampleInput3" placeholder="Harbanshpur, Azamgarh" />
            {error.address && <div className="alert alert-danger">{error.address}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={account.email} onChange={handleChange} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ris**************@gmail.com" />
            {error.email && <div className="alert alert-danger">{error.email}</div>}
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <button type="submit" className="btn btn-primary">Add</button>

        </form>
      </div>
    );
  }
}

export default AddEmployee;