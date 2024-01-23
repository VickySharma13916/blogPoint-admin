import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { connect } from "react-redux";
import * as yup from "yup";
import Input from "../../components/Form/Input";
import IconButton from "../../components/IconButton";
import Portal from "../../components/Portal";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performImagePostHomepage,
  performPostHomepage,
} from "../../redux/actionCreators/homepageCreators";
import { BACKEND_URL } from "../../services/constants";

const schema = yup
  .object({
    bannerName: yup.string().required(),
  })
  .required();

const AddHomepage = ({
  updating,
  performImageUpdate,
  addHomepage,
  history,
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      bannerName: "",
      bannerDescription: [{ description: "" }],
      bannerTags: "",
      bannerImage: "",
    },
  });
  const {
    fields: descriptionField,
    append: descriptionAppend,
    remove: descriptionRemove,
  } = useFieldArray({
    control,
    name: "bannerDescription",
  });
  const [openState, setOpenState] = useState(true);
  const handleOnClose = () => {
    setOpenState(false);
  };
  const isMobile = useWindowSize();
  const [brandimage, setBrandimage] = useState(null);
  const fileInputImageRef = useRef(null);
  const handleBrandImageClick = () => {
    fileInputImageRef.current.click();
  };

  const Postbrandlogoimages = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("resourceType", "bannerSlider");
    formData.append("bannerImage", file, file.name);
    const result = await performImageUpdate(formData);
    if (result.status === 200) {
      setBrandimage(result?.data?.imageUrl);
    }
  };

  const onSubmit = async (data) => {
    const tags = data.bannerTags;
    if (tags && tags.length > 0) {
      data.bannerTags = tags;
    } else {
      delete data.bannerTags;
    }
    const newData = {
      ...data,
      resourceType: "bannerSlider",
      bannerImage: brandimage,
    };
    const result = await addHomepage(newData);
    if (result.status === 200) {
      history.push("/homepage");
    }
  };

  return (
    <Portal
      open={openState}
      width={isMobile ? "100%" : "60%"}
      header={
        <>
          <IconButton
            icon={<BiArrowBack />}
            variant="outline-link"
            onClick={handleOnClose}
            className="p-0 me-2"
          />
          <h6 className="mb-0">Add Homepage Image Slider</h6>
        </>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12}>
            <Input
              id="bannerName"
              name="bannerName"
              label="Banner Name"
              {...register("bannerName")}
              error={errors.bannerName?.message}
            />
          </Col>
          <Col xs={12}>
            <label>Banner Description</label>
            {descriptionField?.map((description, index) => (
              <div key={description.id} className="border p-2 my-2">
                <div className="d-flex justify-content-between mb-2">
                  <div>Banner Description</div>
                  <Button
                    type="button"
                    onClick={() => descriptionRemove(index)}
                    className="border-0 bg-danger"
                  >
                    <AiOutlineClose size={20} />
                  </Button>
                </div>
                <input
                  type="text"
                  {...register(`bannerDescription.${index}.description`)}
                  className="pe-5"
                  placeholder="Start Typing Description"
                  defaultValue={description}
                />
              </div>
            ))}
            <Button
              type="button"
              className="mb-3"
              onClick={() => descriptionAppend({ description: "" })}
            >
              <AiOutlinePlus className="me-1" /> Banner Description
            </Button>
          </Col>
          <Col xs={12}>
            <Input
              id="bannerTags"
              name="bannerTags"
              label="Banner Tags"
              {...register("bannerTags")}
            />
          </Col>
          <Col xs={12}>
            <div className="image-uploader-container">
              <div className="brandimage">Banner Image</div>
              <div className="image-container">
                {brandimage ? (
                  <img src={BACKEND_URL + brandimage} alt="uploaded-item" />
                ) : (
                  <Avatar
                    src={BACKEND_URL + brandimage}
                    name={`bannerName`}
                    size="100"
                    className="ff-primary rounded-circle me-3"
                  />
                )}
                <input
                  id="brandImage"
                  type="file"
                  ref={fileInputImageRef}
                  onChange={(e) => Postbrandlogoimages(e)}
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
            <Button
              type="submit"
              variant="secondary"
              className={`px-3 mx-auto w-100 w-md-75`}
            >
              {!updating && <span>Add</span>}
              {updating && <Spinner animation="border" />}
            </Button>
          </Col>
        </Row>
      </Form>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  updating: state.homepage.updating,
});

const mapDispatchToProps = (dispatch) => ({
  addHomepage: (payload) => dispatch(performPostHomepage(payload)),
  performImageUpdate: (payload) => dispatch(performImagePostHomepage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddHomepage);
