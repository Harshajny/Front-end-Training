import "../pages/styles2.css";

const Select = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, value, key, roles, name, onChange  } = props;

  return (
    <div>
    
      <label htmlFor="role">{label}</label>
      <select id="role" name="role" form="role" onChange={props.onChange}>
        {roles.map((role) => {
          return (
            <option key={role.key} value={role.rolename}>
              {role.rolename}
            </option>
          );
        })}
      </select>

    </div>
  );
};

export default Select;
