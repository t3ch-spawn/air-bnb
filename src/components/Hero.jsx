import grid from "../../public/images/Group 77.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__gridContainer">
        <img src={grid} alt="" className="hero__grid" />
      </div>

      <div className="hero__typography">
        <h1 className="hero__header">Online Experiences</h1>
        <p className="hero__paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
