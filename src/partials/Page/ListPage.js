import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { TiTabsOutline } from "react-icons/ti";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListCourses from "./Courses/ListCourses";
import { SiPolywork } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import ListWebinar from "./Webinar/ListWebinar";
import ListWorkshop from "./Workshop/ListWorkshop";

const ListPage = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("courses");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">
          {key?.slice(0, 1)?.toLocaleUpperCase() + key?.slice(1)} - Page
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
              eventKey="courses"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Courses <TiTabsOutline size={24} />
                </span>
              }
            >
              <ListCourses
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="webinars"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Webinar <SiPolywork size={20} />
                </span>
              }
            >
              <ListWebinar
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="workshops"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Workshops <GiTeacher size={20} />
                </span>
              }
            >
              <ListWorkshop
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
