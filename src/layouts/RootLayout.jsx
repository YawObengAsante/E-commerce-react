import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeadDisplay from "../components/HeadDisplay";
import AddInfo from "../components/AddInfo";

const RootLayout = () => {
  return (
    <>
      <Header />
      <HeadDisplay />
      <AddInfo />
      <div className="shop-display-section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
