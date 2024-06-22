import { useRouteError } from "react-router-dom";

const FakestoreError = () => {
    const error = useRouteError()

    return (  
        <div className="error-element">
            <h2>Error</h2>
            <p>{error.message}</p>
        </div>
    );
}
 
export default FakestoreError;