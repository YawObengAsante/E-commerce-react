import illustrationImg from "../assets/images/undraw_undraw_shopping_bags_2ude_-1-_mnw3.svg";

const HeadDisplay = () => {
  return (
    <>
    <div className="welcome-container">
      <div className="welcome-section">
        <h3>Discover Unique Finds</h3>
        <p>Welcome to E-Shop - Where Quality Meets Uniqueness</p>
        <button className="shopNowBtn">Shop now</button>
      </div>
      <div className="shopping-illustration">
        <img src={illustrationImg} alt="" />
      </div>
    </div>
    </>
  );
};

export default HeadDisplay;
