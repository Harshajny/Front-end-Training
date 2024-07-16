import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>Not found</div>
      <Link to={"/"}>Go back</Link>
    </>
  );
};

export default NotFound;
