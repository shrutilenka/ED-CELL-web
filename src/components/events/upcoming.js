import { Card } from "antd";
import "./../../styles/style.css";
import UpcomingR from "./../../json/upcomingEvents.json";

const Upcoming = () => {
  return (
    <div className="cards">
      {UpcomingR.map((records) => {
        return (
          <Card
            style={{
              width: 400,
              marginBottom: "4rem",
            }}
            cover={<img alt="example" src={records.src} />}
            key={records.id}
          >
            {/* <p>{records.title} </p> */}
            <div className="card-content">
              <h3>Rocketopedia</h3>
              <p>Nov 14th</p>
            </div>
            <div className="card-content">
              <p>Udaan</p>
              <p>5:30 am</p>
            </div>
            <div className="card-timer">
              <p>
                ENDS IN <span>27.14.2</span>
              </p>
            </div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Register</span>
            </button>
          </Card>
        );
      })}
    </div>
  );
};
export default Upcoming;
