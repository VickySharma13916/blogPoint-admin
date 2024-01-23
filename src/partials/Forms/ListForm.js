import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { AiFillContacts, AiOutlineFileSearch } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ListCarrer from "./Carrer/ListCarrer";
import ListContact from "./Contact/ListContact";
import ListNewsLetterSubscription from "./NewsletterSubscription/ListNewsLetterSubscription";
import ListRequestProposal from "./RequestProposal/ListRequestProposal";
import ListCaseStudies from "./CaseStudies/ListCaseStudies";
import { FaRegNewspaper } from "react-icons/fa";
import ListWhitepaper from "./whitepaper/ListWhitepaper";
import { BiNews } from "react-icons/bi";
import ListNewsletter from "./Newsletter/ListNewsletter";
import { LuFormInput } from "react-icons/lu";
import ListDynamicRegister from "./DynamicRegister/ListDynamicRegister";

const ListForm = ({ refresh, setRefresh, history }) => {
  const [key, setKey] = useState("carrer");
  return (
    <>
      <div className="d-flex align-items-start mb-3">
        <h3 className="m-0">
          {key?.slice(0, 1)?.toLocaleUpperCase() + key?.slice(1)} - Forms
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
              eventKey="carrer"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Carrer <BsPeopleFill size={20} />
                </span>
              }
            >
              <ListCarrer
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="contact"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Contact Us <AiFillContacts size={20} />
                </span>
              }
            >
              <ListContact
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="newsletter-Subscription"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  NewsLetter Subscription <MdOutlineSubscriptions size={20} />
                </span>
              }
            >
              <ListNewsLetterSubscription
                refresh={refresh}
                setRefresh={() => setRefresh(uuidv4())}
                history={history}
              />
            </Tab>
            <Tab
              eventKey="requestProposal"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Request Proposal <GiArcheryTarget size={20} />
                </span>
              }
            >
              <ListRequestProposal
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
              <ListWhitepaper
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
            <Tab
              eventKey="dynamic Register"
              title={
                <span className="title_user d-flex align-items-center gap-2">
                  Dynamic Register <LuFormInput size={20} />
                </span>
              }
            >
              <ListDynamicRegister
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

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
