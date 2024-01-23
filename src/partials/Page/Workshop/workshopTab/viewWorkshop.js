import React, { useState } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import IconButton from "../../../../components/IconButton";
import Page from "../../../../components/Page";
import useWindowSize from "../../../../hooks/UseWindowSize";
import ListAccordion from "./AccordionSection/ListAccordion";
import ListOtherLink from "./workshopOtherLink/ListOtherLink";
import ListBriefAbout from "./briefAbout/ListBriefAbout";
import ListTestimonial from "./testimonial/ListTestimonial";
import ListJoinImageSlider from "./JoinImageSlider/ListJoinImageSlider";
import ListTrainingProfile from "./trainerProfile/ListTrainerProfile";
const ViewWebinar = ({ fetching }) => {
  const isMobile = useWindowSize();
  const history = useHistory();
  const [key, setKey] = useState("accordion");
  const userData = history.location.state?.data;
  const handleOnClose = () => {
    history.goBack();
  };
  return (
    <Page id="page--Workshop" title="Workshop">
      <div className="d-flex align-items-center mb-3">
        <IconButton
          icon={<BiArrowBack />}
          variant="outline-link"
          onClick={handleOnClose}
          className="p-0 me-2"
        />
        <h4 className="m-0">Workshop Details</h4>
      </div>
      <Card
        border="light"
        className="w-100 mx-auto pt-3 px-3 mb-5 position-relative"
      >
        <Card.Body className={`${isMobile && "p-0"}`}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab
              eventKey="accordion"
              title={<span className="title_user">Accordion Details</span>}
            >
              <ListAccordion
                history={history}
                id={userData?._id}
                listData={userData?.accordionSections}
              />
            </Tab>
            <Tab
              eventKey="trainingProfile"
              title={
                <span className="title_user">Trainer Profile Details</span>
              }
            >
              <ListTrainingProfile
                history={history}
                id={userData?._id}
                listData={userData?.trainerProfiles}
              />
            </Tab>
            <Tab
              eventKey="otherLink"
              title={<span className="title_user">Other Links Detail</span>}
            >
              <ListOtherLink
                history={history}
                id={userData?._id}
                listData={userData?.workshopOtherLinks}
              />
            </Tab>
            <Tab
              eventKey="briefAbout"
              title={<span className="title_user">Brief About Detail</span>}
            >
              <ListBriefAbout
                history={history}
                id={userData?._id}
                listData={userData?.briefAbout}
              />
            </Tab>
            <Tab
              eventKey="testimonial"
              title={<span className="title_user">Testimonial Details</span>}
            >
              <ListTestimonial
                history={history}
                id={userData?._id}
                listData={userData?.testimonials}
              />
            </Tab>
            <Tab
              eventKey="joinImageSlider"
              title={
                <span className="title_user">Join Image Slider Details</span>
              }
            >
              <ListJoinImageSlider
                history={history}
                id={userData?._id}
                listData={userData?.joinworkshopImageSlider}
              />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.homepage.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  // getList: (payload) => dispatch(performGetCaseStudiesById(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewWebinar);
