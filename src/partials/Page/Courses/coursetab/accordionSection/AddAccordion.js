import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import DisplayText from "../../../../../components/DisplayText";
import Input from "../../../../../components/Form/Input";
import IconButton from "../../../../../components/IconButton";
import Portal from "../../../../../components/Portal";
import Editor from "../../../../../components/TextEditor";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import { performPostAccordionCourse } from "../../../../../redux/actionCreators/courseCreators";

const schema = yup
  .object({
    AccordionTitle: yup.string().required(),
  })
  .required();

const AddAccordion = ({ submitting, handleAddAccordion, history }) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const [content, setContent] = useState("");
  const [contentmssg, setContentMssg] = useState(false);
  const isMobile = useWindowSize();
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const newData = {
      ...data,
      type: "accordion",
      courseId: id,
      AccordionDescription: content,
    };
    const result = await handleAddAccordion(newData);
    if (result.status === 200) {
      history.push(`/page`);
    }
  };

  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "60%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Add Accordion</h6>
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
                id="AccordionTitle"
                name="AccordionTitle"
                label={"course Accordion Title"}
                {...register("AccordionTitle")}
                error={errors.AccordionTitle?.message}
              />
            </Col>
            <Col xs={12}>
              <div className="d-flex justify-content-between mb-2">
                <div className="brandimage mb-2">Accordion Description</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing Accordion Details here..."}
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
                {!submitting && <span>Add</span>}
                {submitting && <Spinner animation="border" />}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Portal>
  );
};

AddAccordion.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

AddAccordion.defaultProps = {
  width: "100%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddAccordion: (payload) =>
    dispatch(performPostAccordionCourse(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAccordion);
