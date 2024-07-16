import { useState } from "react";
import "../pages/styles2.css";
import Button from "./Button";
import Select from "./Select";
import TextField from "./TextField";

const Form = ({ id }) => {
  const roles = [
    {
      key: "0",
      rolename: "Software dev",
    },
    {
      key: "1",
      rolename: "tester",
    },
    {
      key: "2",
      rolename: "devops",
    },
  ];

  const status = [
    {
      key: "0",
      rolename: "employee",
    },
    {
      key: "1",
      rolename: "tester",
    },
    {
      key: "2",
      rolename: "devops",
    },
  ];

  const fields = [
    {
      key: "employeename",
      label: "Employee Name",
      type: "text",
    },
    { key: "employeeid", 
        label: "Employee ID", type: "text", hidden: !id },
    {
      key: "role",
      label: "Role",
      value: "Choose Role",
      roles: roles,
      component: Select,
    },
    {
      key: "status",
      label: "Status",
      value: "Status",
      roles: status,
      component: Select,
    },
    { key: "joiningdate", label: "Joining date", type: "date" },
    { key: "address", label: "Address", type: "text" },
    { key: "experience", label: "Experience", type: "text" },
  ];

  const [employeeInfo, setEmployeeInfo] = useState({
    employeename: "",
    employeeid: "",
    role: "",
    status: "",
    joiningdate: "",
    address: "",
    experience: "",
  });

  console.log("employeeInfo");
  const handlechange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    setEmployeeInfo({
      ...employeeInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div className="fill">
        <div className="part1">
          {fields.map((field) => {
            if (field.hidden) return <></>;
            return field.component ? (
              <field.component
                label={field.label}
                value={field.value}
                key={field.key}
                roles={field.roles}
                name={field.key}
                onChange={handlechange}
              />
            ) : (
              <TextField
                label={field.label}
                type={field.type}
                key={field.key}
                name={field.key}
                onChange={handlechange}
              />
            );
          })}{" "}
        </div>

        <br></br>
        <div className="buttons">
          <Button id="button1" text="Create" />

          <Button id="button2" text="Submit" />
        </div>
      </div>
    </form>
  );
};

export default Form;
