import { Link } from "react-router-dom";
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <>
    <div className="hus-wrapper">
    <div>Now we have an error!!!</div>
      <Link className="hus-error-link" to={"/"} title="Go Home">Click me to return to Home</Link>
    </div>
      
    </>
  );
};

export default ErrorPage;
