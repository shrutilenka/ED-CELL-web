import "./../faq/faq.css";
import faq from "./faq.json";
import { Collapse } from "antd";

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  return (
    <div className="accordion">
      <div className="main">
        <div className="sub-main">
          <h1 style={{ fontSize: "2rem" }}>Our Ourganisation</h1>
          <p>
            We believe that emerging economies like India need the drive of the
            new and young breed of worthy entrepreneurs who target their efforts
            on innovative ways to technologically address the genuine needs of
            millions of people.
          </p>
          <p>
            What initially was just a day dream became reality on 5 April 2013
            when KIIT E-Cell organized its first session and opened the gates
            for the immensely talented students of the University. Since that
            day the KIIT E-Cell has been providing huge opportunities for the
            masses. KIIT E-Cell owes it all to those revolutionaries like Tanmay
            Dayal, Sreejit Bakshi, Mohit Dayal and Pratik Basu.
          </p>
        </div>
        <div className="sub-main">
          <h1 style={{ fontSize: "2rem" }}>General Questions</h1>
          <div className="collapse">
            {faq.map((data) => {
              return (
                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel header={data.header} key={data.key}>
                    <p>{data.body}</p>
                  </Panel>
                </Collapse>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
