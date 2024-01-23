import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListLifeAtTuracoz from "./lifeAtTuracoz/ListLifeAtTuracoz";
import ListTuracozTeam from "./turacozteam/ListTuracozTeam";
import ListImageTuracoz from "./imageTuracoz/ListImageTuracoz";

const ListAbout = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("team");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">About {key}</h3>
      </div>
      <Card>
        <Card.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab
              eventKey="team"
              title={<span className="title_user">BlogPoint Team</span>}
            >
              <ListTuracozTeam
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="life-at-turacoz"
              title={<span className="title_user">Life At BlogPoint</span>}
            >
              <ListLifeAtTuracoz
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="image-turacoz"
              title={<span className="title_user">Image Slider BlogPoint</span>}
            >
              <ListImageTuracoz
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  updating: state.user.updating,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListAbout);
