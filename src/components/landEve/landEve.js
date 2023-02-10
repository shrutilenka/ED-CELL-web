import { BsArrowUpRightSquareFill } from "react-icons/bs";
import "./../landEve/landEve.css";

const LandEve = () => {
  return (
    <div className="eve-list">
      <div className="main">
        <div className="register">
          <h1>UPCOMING EVENTS</h1>
          <div className="reg-btn">
            <button>
              REGISTER NOW{" "}
              <span>
                <BsArrowUpRightSquareFill />
              </span>
            </button>
          </div>
        </div>
        <div className="list">
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p>Feb</p>
                <p>11</p>
              </div>
              <div className="info">
                <h3>Make It Big</h3>
                <p>9.30am - 11.30am</p>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p>Feb</p>
                <p>11</p>
              </div>
              <div className="info">
                <h3>Make It Big</h3>
                <p>9.30am - 11.30am</p>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p>Feb</p>
                <p>11</p>
              </div>
              <div className="info">
                <h3>Make It Big</h3>
                <p>9.30am - 11.30am</p>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p>Feb</p>
                <p>11</p>
              </div>
              <div className="info">
                <h3>Make It Big</h3>
                <p>9.30am - 11.30am</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandEve;
