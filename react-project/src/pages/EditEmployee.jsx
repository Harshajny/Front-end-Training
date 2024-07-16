import "./styles2.css";

import Form from "../components/Form";
import { useParams } from "react-router-dom";

const EditEmployee = () => {
  const data = useParams();
  return (
    <>
      <div className="main">
        <div className="employee">
          <section>
            <h1>Edit Employee</h1>
          </section>
        </div>
        <Form id={data.emp_id} />
      </div>
    </>
  );
};
export default EditEmployee;
