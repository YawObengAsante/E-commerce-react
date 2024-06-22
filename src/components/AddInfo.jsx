import lockIcon from '../assets/icons/lock.svg'
import packageIcon from '../assets/icons/package.svg'
import smilyIcon from '../assets/icons/smiley-wink.svg'


const AddInfo = () => {
  return (
    <div className="addInfo-container">
      <div className="adInfo">
        <img src={packageIcon} alt="deliveries" />
        <h3>FAST DELIVERY</h3>
        <p>Deliveries in less than 2 days</p>
      </div>

      <div className="adInfo">
        <img src={lockIcon} alt="deliveries" />
        <h3>SAFE PAYMENT</h3>
        <p>All payment are 100% secure</p>
      </div>

      <div className="adInfo">
        <img src={smilyIcon} alt="deliveries" />
        <h3>FRIENDLY SERVICES</h3>
        <p>Best customer care services</p>
      </div>
    </div>
  );
};

export default AddInfo;
