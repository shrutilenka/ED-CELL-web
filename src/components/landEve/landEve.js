import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./../landEve/landEve.css";

const LandEve = () => {
  return (
    <div className="eve-list">
      <div className="main">
        <div className="register">
          <h1 style={{ color: "#f15c28" }}>
            UPCOMING <span style={{ color: "#1e1e1e" }}>EVENTS</span>
          </h1>
          <div className="reg-btn">
            <Link to="/events">
              {" "}
              <button>
                REGISTER NOW{" "}
                <span className="span" style={{ fontSize: "3rem" }}>
                  <BsArrowUpRightSquareFill />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="list">
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p style={{ fontWeight: "bolder" }}>
                  Feb <br />
                  11
                </p>
                {/* <p>11</p> */}
              </div>
              <div className="info">
                <h2>Make It Big</h2>
                <h4>9.30am - 11.30am</h4>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p style={{ fontWeight: "bolder" }}>
                  Feb <br />
                  11
                </p>
                {/* <p>11</p> */}
              </div>
              <div className="info">
                <h2>Make It Big</h2>
                <h4>9.30am - 11.30am</h4>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p style={{ fontWeight: "bolder" }}>
                  Feb <br />
                  11
                </p>
                {/* <p>11</p> */}
              </div>
              <div className="info">
                <h2>Make It Big</h2>
                <h4>9.30am - 11.30am</h4>
              </div>
            </div>
          </div>
          <div className="each-card">
            <div className="blue-bg">
              <div className="date">
                <p style={{ fontWeight: "bolder" }}>
                  Feb <br />
                  11
                </p>
                {/* <p>11</p> */}
              </div>
              <div className="info">
                <h2>Make It Big</h2>
                <h4>9.30am - 11.30am</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandEve;
