import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import { BACKEND_URL } from "../../services/constants";
import { performAddMediaImage } from "../../redux/actionCreators/mediaCreators";
const AddMedia = ({ submitting, handleAddMetaImage, history }) => {
  const { handleSubmit } = useForm({});
  const [openCategoryState, setOpenCategoryState] = useState(true);
  const isMobile = useWindowSize();
  const [metaImage, setMetaImage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };
  const PostMetaImages = async (e) => {
    const file = e.target.files[0];
    setMetaImage(file);
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", metaImage, metaImage?.name);
    const result = await handleAddMetaImage(formData);
    if (result.status === 200) {
      history.push("/media");
    }
  };
  const handleOnClose = () => {
    setOpenCategoryState(false);
  };

  return (
    <Portal
      open={openCategoryState}
      width={isMobile ? "100%" : "50%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Add Media File</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage mb-2">Media Image</div>
              <div className="image-container">
                {metaImage ? (
                  <img
                    src={URL.createObjectURL(metaImage)}
                    alt="uploaded-item"
                  />
                ) : (
                  <Avatar
                    src={BACKEND_URL + metaImage}
                    name={"Meta Image"}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="metaImage"
                  type="file"
                  ref={fileInputImageRef}
                  onChange={(e) => PostMetaImages(e)}
                  style={{ display: "none" }}
                />
              </div>
              <IconButton
                className={"add-image-icon"}
                variant="primary"
                icon={{ type: MdAddAPhoto }}
                onClick={() => handleBrandImageClick()}
              />
            </div>
          </Col>
          <Col xs={8} className="mt-4 mb-2 mx-auto">
            <Button type="submit" variant="secondary" className={`px-3 w-100`}>
              {!submitting && <span>Add</span>}
              {submitting && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.media.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddMetaImage: (payload) => dispatch(performAddMediaImage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMedia);
