import { Tabs } from "antd";
import Ongoing from "./ongoing";
import Upcoming from "./upcoming";
import PastEvent from "./pastEvent";

const Event = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="tabs">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.2rem",
          marginLeft: "1.4rem",
        }}
        items={[
          {
            label: `Ongoing`,
            key: "1",
            children: <Ongoing />,
          },
          {
            label: `Upcoming`,
            key: "2",
            children: <Upcoming />,
          },
          {
            label: `Past Events`,
            key: "3",
            children: <PastEvent />,
          },
        ]}
      />
    </div>
  );
};

export default Event;
