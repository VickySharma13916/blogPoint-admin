import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListEventConference from "./eventConference/ListEventConference";
import ListWebinarConference from "./webinarConference/ListWebinarConference";

const ListEvent = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("conference");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">
          {key?.slice(0, 1)?.toLocaleUpperCase() + key?.slice(1)} - Events
        </h3>
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
              eventKey="conference"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Conference Events <MdEventAvailable size={24} />
                </span>
              }
            >
              <ListEventConference
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="Hosting Webinar"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                 Hosting Webinar Events <FaPeopleGroup size={20} />
                </span>
              }
            >
              <ListWebinarConference
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListEvent);
