/* eslint-disable react/prop-types */
import "../pages/styles2.css"
import { RiPencilLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Status from "./status";
 
const Row = (props) => {
let color="#ffbfbf"

if(props.status=="Probation")
  color="#f5ecb8"
if(props.status=="Active")
 color="#d3f4be"
const navigate = useNavigate();

const handleEdit=()=>
  {  
    //  navigate(`edit`);
     navigate(`/employee/edit/${props.employeeid}`);

  }

  const handledisplay=()=>
    {
      navigate(`/employee/details/${props.employeeid}`);
    }
  return (
  
    <div className="content-table">
   
    <div onClick={handledisplay}> {props.employeename}</div>
    <div onClick={handledisplay}> {props.employeeid}</div>
    <div onClick={handledisplay}> {props.joiningdate}</div>
    <div onClick={handledisplay}> {props.role}</div>
    <div  className="status" onClick={handledisplay}
     style={
      {
        backgroundColor:color
      }
     }
     
     > {props.status}</div>
     
    <div onClick={handledisplay}> {props.experience}</div>
    <div className="icons"> 

      <div className="trash" ><FaRegTrashCan /> </div>
         <div className="pencil" onClick={handleEdit}> <RiPencilLine /></div>
    </div>

    </div>
  );
};
export default Row;
