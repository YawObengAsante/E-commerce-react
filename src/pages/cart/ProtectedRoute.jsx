import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoading, isAuthenticated, login, register } = useKindeAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <div className="not-authenticated-container">
        <div className="not-authenticated">
          <h1>Not authenticated to E-SHOP</h1>
          <h2>
            Please create an account or log in to continue shopping with us!
          </h2>
          <div>
          <button onClick={login}>Login</button>
          <button onClick={register}>Create Account</button>
          </div>
          <Link to='/'>Go to Home page</Link>
        </div>
      </div>
    );
  }

  if (!isLoading && isAuthenticated) {
    return <Cart />;
  }
};

export default ProtectedRoute;
