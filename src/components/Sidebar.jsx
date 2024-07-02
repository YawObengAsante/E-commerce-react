import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { register, logout, isAuthenticated } = useKindeAuth();

  return (
    <div className="container">
      {isOpen ? (
        <div className="sidebar">
          <div className="sidebar-header">
            <div>Menu</div>
            <div className="sidebar-closeBtn" onClick={() => handleClose()}>
              &rarr;
            </div>
          </div>
          <nav className="sidebar-links">
            <Link to="/">Deals</Link>
            <Link to="whatsnew">What's new</Link>
            <Link to="cart">Delivery</Link>
            {isAuthenticated ? (
              <div onClick={()=>logout()} className="sidebar-auth-btn">Logout</div>
            ) : (
              <div onClick={()=>register()} className="sidebar-auth-btn">Register/Login</div>
            )}
          </nav>
        </div>
      ) : (
        <div className="sidebar closed">sidebar</div>
      )}
    </div>
  );
};

export default Sidebar;
