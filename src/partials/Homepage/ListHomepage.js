import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ImageSlider from "./ImageSlider";
import ClientSlider from "./ClientSlider";

const ListHomePage = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("Image-banner");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">Homepage {key}</h3>
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
              eventKey="Image-banner"
              title={<span className="title_user">Image Slider</span>}
            >
              <ImageSlider
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="Client"
              title={<span className="title_user">Client Slider</span>}
            >
              <ClientSlider
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

export default connect(mapStateToProps, mapDispatchToProps)(ListHomePage);
