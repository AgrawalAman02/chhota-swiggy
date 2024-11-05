import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();

    return (
        <div className="errorDiv">
            <h1>OOps!...</h1>
            <h2>{err.status} : {err.statusText}</h2>
            <h3>Something Went Wrong!...</h3>
        </div>
    );
}
export default Error;