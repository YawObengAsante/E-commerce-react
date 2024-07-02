import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadDisplay from "../components/HeadDisplay";
import AddInfo from "../components/AddInfo";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <HeadDisplay />
      <AddInfo />
      <div className="container">
        <div className="shop-display-section">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
