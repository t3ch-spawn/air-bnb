import Airbnb from "../../public/images/airbnb.svg";

function Navbar() {
  return (
    <div className="nav">
      <img src={Airbnb} alt="logo" className="nav--logo" />
    </div>
  );
}

export default Navbar;
