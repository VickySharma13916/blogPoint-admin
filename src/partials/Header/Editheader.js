import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { connect } from "react-redux";
import DisplayText from "../../components/DisplayText";
import Select from "../../components/Form/Select";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import Editor from "../../components/TextEditor";
import useWindowSize from "../../hooks/UseWindowSize";
import { performUpdateHeader } from "../../redux/actionCreators/headerCreators";

const EditHeader = ({ submitting, handleEditHeader, history }) => {
  const userData = history.location.state?.data;
  const { handleSubmit } = useForm({
    defaultValues: {
      headerName: userData?.headerName,
      status: userData?.status,
    },
  });
  const [preview, setPreview] = useState(false);
  const handlePreview = () => {
    setPreview(!preview);
  };
  const ActiveData = [
    {
      value: true,
      label: "Published",
    },
    {
      value: false,
      label: "Draft",
    },
  ];
  const statusOptions = ActiveData?.map((item) => ({
    value: item.value,
    label: item.label,
  }));
  const defaultStatusOption = statusOptions.find(
    (option) => option.value === userData?.status
  );
  const [selectValue, setSelectValue] = useState(
    defaultStatusOption ? [defaultStatusOption] : []
  );
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [content, setContent] = useState(userData?.headerName);
  const [contentmssg, setContentMssg] = useState(false);
  const onSubmit = async (data) => {
    if (data.content === "") {
      setContentMssg(true);
    } else {
      setContentMssg(false);
    }
    const newData = {
      headerName: content ? content : userData?.headerName,
      status: selectValue ? selectValue?.value : userData?.status,
      id: userData?._id,
    };
    const result = await handleEditHeader(newData);
    if (result.status === 200) {
      history.push("/header");
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
          <h6 className="mb-0">Edit Header</h6>
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
                <div className="brandimage mb-2">Header Content</div>
                {content.length > 0 && (
                  <Button variant="primary" onClick={() => handlePreview()}>
                    <IoMdEye size={20} />
                  </Button>
                )}
              </div>
              <Editor
                content={content}
                setContent={setContent}
                placeholder={"Start Typing Header Link here..."}
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
            <Col xs={12}>
              <div className="brandimage mb-2">Published option</div>
              <Select
                options={statusOptions}
                value={selectValue}
                onChange={setSelectValue}
                placeHolder="Select Header options"
              />
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

EditHeader.propTypes = {
  width: PropTypes.string,
  refresh: PropTypes.func,
  userData: PropTypes.object,
};

EditHeader.defaultProps = {
  width: "75%",
  refresh: () => null,
  userData: null,
};

const mapStateToProps = (state) => ({
  submitting: state.header.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleEditHeader: (payload) => dispatch(performUpdateHeader(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditHeader);
