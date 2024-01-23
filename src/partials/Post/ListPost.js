import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListBlogs from "./Blogs/ListBlogs";
import ListCaseStudies from "./CaseStudies/ListCaseStudies";
import ListWhitePaper from "./Whitepaper/ListWhitePaper";
import ListNewsletter from "./Newsletter/ListNewsletter";
import { FaBloggerB, FaRegNewspaper } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiNews } from "react-icons/bi";

const ListPostPage = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("blogs");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">
          {key?.slice(0, 1)?.toLocaleUpperCase() + key?.slice(1)} - Post
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
              eventKey="blogs"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Blogs <FaBloggerB />
                </span>
              }
            >
              <ListBlogs
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="casestudies"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Case Study <AiOutlineFileSearch size={20} />
                </span>
              }
            >
              <ListCaseStudies
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="whitepapers"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  WhitePaper <FaRegNewspaper size={20} />
                </span>
              }
            >
              <ListWhitePaper
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="Newsletter"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Newsletter <BiNews size={20} />
                </span>
              }
            >
              <ListNewsletter
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPostPage);
