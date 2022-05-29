import React, { Component } from 'react';
class EmployeeDetails extends Component {
    state = {  }
    render() { 
        const {emp_details,handleDelete}=this.props;

        return ( <div className="container" style={{marginTop:50}}>
            <table className="table table-striped">
             <thead>
               <tr>
                 <th scope="col">UID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Address</th>
                 <th scope="col">Number</th>
                 <th scope="col">Email</th>
                 <th scope="col">Actions</th>
               </tr>
             </thead>
             <tbody>
                 {emp_details.map(e=>(
                      <tr key={e.uid}>
                      <th scope="row">{e.uid}</th>
                      <td>{e.name}</td>
                      <td>{e.address}</td>
                      <td>{e.mnumber}</td>
                      <td>{e.email}</td>
                      <td><button onClick={()=>handleDelete(e)} className="btn btn-danger">Delete</button></td>
                    </tr>
                 ))}

                
                </tbody>
            </table>
        </div> );
    }
}
 
export default EmployeeDetails;