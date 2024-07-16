import React from 'react';
import "../pages/styles2.css";
import Row from "../components/Row";
import dataArray from '../data';  

const EmployeeList = () => {
   
  const rows = dataArray.map((employee) => ({
    employeeName: employee.employeeName,
    employeeId: employee.employeeId,
    joiningDate: employee.joiningDate,
    role: employee.role,
    status: employee.status,
    experience: employee.experience,
  }));

  return (
    <>
      <div className="main">
        <div className="employee">
          <section>
            <div className="head1">Employee List</div>
          </section>
          <div className="nav-side">
            <div>Filter By</div>
            <div>Sort</div>
            <div>Create Employee</div>
          </div>
        </div>
        <div className="table">
          <div>Employee Name</div>
          <div>Employee id</div>
          <div>Joining Date</div>
          <div>Role</div>
          <div>Status</div>
          <div>Experience</div>
          <div>Action</div>
        </div>       
        {rows.map((row) => 
          <Row
            key={row.employeeId}
            employeename={row.employeeName}
            employeeid={row.employeeId}
            joiningdate={row.joiningDate}
            role={row.role}
            status={row.status}
            experience={row.experience}
          />
        )}
      </div>
    </>
  );
};

export default EmployeeList;
