import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import Editor from "../../components/TextEditor";
import useWindowSize from "../../hooks/UseWindowSize";
import { performUpdateCarrer } from "../../redux/actionCreators/carrerCreators";
import { IoMdEye } from "react-icons/io";
import DisplayText from "../../components/DisplayText";

const schema = yup
  .object({
    carrerAccordionTitle: yup.string().required(),
  })
  .required();

const EditCarrer = ({ submitting, handleUpdateCaseStudies, history }) => {
  const userData = history.location.state?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      carrerAccordionTitle: userData?.carrerAccordionTitle,
    },
  });
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState(userData?.carrerAccordionDescription);
  const [contentmssg, setContentMssg] = useState(false);

  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const tags = data.CaseStudiesTags;
    if (tags && tags.length > 0) {
      data.CaseStudiesTags = tags;
    } else {
      delete data.CaseStudiesTags;
    }
    const newData = {
      ...data,
      id: userData?._id,
      carrerAccordionDescription: content
        ? content
        : userData?.carrerAccordionDescription,
    };
    const result = await handleUpdateCaseStudies(newData);
    if (result.status === 200) {
      history.push("/carrer");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "75%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Update Carrer Listing</h6>
        </>
      }
    >
      {preview ? (
        <DisplayText
          htmlContent={content}
          preview={preview}
          handlePreview={handlePreview}
        />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col xs={12}>
              <Input
                type="text"
                id="carrerAccordionTitle"
                name="carrerAccordionTitle"
                label={"Carrer Accordion Title"}
                {...register("carrerAccordionTitle")}
                error={errors.carrerAccordionTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex justify-content-between mb-2">
                <div className="brandimage mb-2">Carrer Description</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                defaultValue={userData?.carrerAccordionDescription}
                setContent={setContent}
                placeholder={"Start Typing Carrer Description here..."}
              />
              {contentmssg && (
                <p
                  className="text-danger"
                  style={{ fontSize: "12px", fontWeight: "500" }}
                >
                  Text Content is Required
                </p>
              )}
            </Col>
            <Col xs={8} className="mt-4 mb-2 mx-auto">
              <Button
                type="submit"
                variant="secondary"
                className={`px-3 w-100`}
              >
                {!submitting && <span>Update</span>}
                {submitting && <Spinner animation="border" />}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Portal>
  );
};

EditCarrer.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditCarrer.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.carrer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleUpdateCaseStudies: (payload) => dispatch(performUpdateCarrer(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCarrer);
