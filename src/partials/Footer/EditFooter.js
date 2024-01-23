import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { connect } from "react-redux";
import DisplayText from "../../components/DisplayText";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import Editor from "../../components/TextEditor";
import useWindowSize from "../../hooks/UseWindowSize";
import { performUpdateFooter } from "../../redux/actionCreators/footerCreators";

const EditFooter = ({ submitting, handleEditFooter, history }) => {
  const userData = history.location.state?.data;
  const { handleSubmit } = useForm({
    defaultValues: {
      footerDescription: userData?.footerDescription,
    },
  });
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState(userData?.footerDescription);
  const [contentmssg, setContentMssg] = useState(false);
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const newData = {
      id: userData?._id,
      footerDescription: content ? content : userData?.footerDescription,
    };
    const result = await handleEditFooter(newData);
    if (result.status === 200) {
      history.push("/footer");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <>
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
            <h6 className="mb-0">Update Footer</h6>
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
                <div className="d-flex justify-content-between mb-2">
                  <div className="brandimage mb-2">Footer Content</div>
                  {content && (
                    <Button variant="primary" onClick={() => handlePreview()}>
                      <IoMdEye size={20} />
                    </Button>
                  )}
                </div>
                <Editor
                  content={content}
                  defaultValue={userData?.footerDescription}
                  setContent={setContent}
                  placeholder={"Start Typing Footer here..."}
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
    </>
  );
};

EditFooter.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditFooter.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.footer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditFooter: (payload) => dispatch(performUpdateFooter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);
