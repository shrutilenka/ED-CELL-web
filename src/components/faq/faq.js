import "./../faq/faq.css";
import { Collapse } from "antd";

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className="accordion">
      <div className="main">
        <div className="sub-main">
          <h1>Our Ourganisation</h1>
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
          <h1>General Questions</h1>
          <div>
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
