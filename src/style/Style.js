import "./Style.css";
import casual from "../images/casualok.png";
import formal from "../images/formal.png";

function Style() {
  return (
    <div className="style-card">
      <div className="style-card-title">
        <p className="style-card-title-text">Choose your tone 🔊</p>
      </div>
      <div className="style-card-list">
        <div className="style-card-list-item-1" tabIndex={0}>
          <img className="casual-img" src={casual} alt="casual"></img>
          <div className="list-item">
            <p>Formal</p>
          </div>
        </div>

        <div className="style-card-list-item-2" tabIndex={1}>
          <img className="formal-img" src={formal} alt="formal"></img>
          <div className="list-item-2">
            <p> Casual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;
