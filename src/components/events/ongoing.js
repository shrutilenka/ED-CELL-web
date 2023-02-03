import { Card } from "antd";
import "./../../styles/style.css";
import OngoingR from "./../../ongoingEvents.json";

const Ongoing = () => {
  return (
    <div className="cards">
      {OngoingR.map((records) => {
        return (
          <Card
            style={{
              width: 400,
              marginBottom: "4rem",
            }}
            cover={<img alt="example" src={records.src} />}
            key={records.id}
          >
            <p>{records.title} </p>
          </Card>
        );
      })}

      {/* <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card>
      <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card>
      <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card>
      <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card>
      <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card>
      <Card
        style={{
          width: 400,
          marginBottom: "4rem",
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <p>event 1 </p>
      </Card> */}
    </div>
  );
};
export default Ongoing;
