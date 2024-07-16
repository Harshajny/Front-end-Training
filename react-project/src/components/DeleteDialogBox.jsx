import "../pages/styles2.css"
import Button from "./Button"
const DeleteDialogBox =()=>
    {  return(
        <div className="dialogbox">

            <div className="text1">
                <div> Are you sure? </div>
            </div>
            
            <div className="buttons">
            <Button text="Yes"/>
            <Button text="Cancel"/>
            </div>
        </div>
        )

    }

    export default DeleteDialogBox