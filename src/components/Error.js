import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    console.log({ err })
    return (
        <div className="error-wrapper">
            <h1 className="error-text">(Opps! Something Went Wrong)</h1>
            <h2 className="error-h2">{err !== null && err?.status + " " + err?.statusText}</h2>
        </div >
    )
}

export default Error;