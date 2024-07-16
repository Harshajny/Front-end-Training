
import React from 'react';
import '../pages/styles2.css';
import Status from '../components/status';
import { useParams } from 'react-router-dom';  
import dataArray from "../data.js"
const EmployeeDetails = () => {
  const { employeeId } = useParams(); 
  const employee = dataArray.find((emp) => emp.employeeId === employeeId);

  if (!employee) {
    return <div>No employee found with ID {employeeId}</div>;
  }
 
      return (
        <>
          <div className="main">
            <div className="employee">
              <section>
                <div className="head1">Employee Details</div>
              </section>
              <div className="nav-side">
                <div>Edit</div>
                </div>
          </div>
          <div className="display">
                   <div className="row1">
                   <div>Employee Name</div>
                   <div>Joining Date</div>
                   <div>Experience</div>
                   <div>Role</div>
                   <div>Status</div>
                   <div>Experience</div>
          </div>
        
        <div className="row1field">        
        <div>{employee.employeeName}</div>
        <div> {employee.joiningDate}</div>
        <div> {employee.experience}</div>
        <div>{employee.role}</div>
                   <div>
                    
                    <Status status={employee.status}/>
                   </div>
                   <div>{employee.experience}</div>
                   </div>
                   <br></br>
                   <br></br>
                   <hr className="new1"/>
                   <div className="row2">
                   <div>Address</div>
                   <div>Employee Id</div>
                   </div>
                   <div className="row2field">
                   <div>{employee.address}</div>
                   <div>{employee.employeeId}</div>
                   </div>
                   
                </div>
          </div>
        </>
        
      );
    };
    
    export default EmployeeDetails;