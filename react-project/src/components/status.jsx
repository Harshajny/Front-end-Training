import "../pages/styles2.css";
const Status = (props) => {
  let color = "#ffbfbf";
  if (props.status == "Probation") color = "#f5ecb8";
  if (props.status == "Active") color = "#d3f4be";
  return (
    <div
      className="status"
      style={{
        backgroundColor: color,
      }}
    >
      {" "}
      {props.status}
    </div>
  );
};

export default Status;
