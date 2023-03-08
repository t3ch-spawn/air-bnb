import Star from "../../public/images/Star 1.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}

      <div className="card__picContainer">
        <div className="card__status"></div>
        <img src={`./images/${props.image}`} alt="" className="card__pic" />
      </div>

      <div className="card__typography">
        <div className="card__rating">
          <div>
            <img className="card__star" src={Star} alt="" />
          </div>
          <p>
            <span>{props.rating}</span>
            <span>({props.reviewCount}) •</span>
            <span>{props.location}</span>
          </p>
        </div>

        <p>{props.title}</p>
        <p className="card__price">
          <span>From ${props.price}</span>/ person
        </p>
      </div>
    </div>
  );
}

export default Card;
