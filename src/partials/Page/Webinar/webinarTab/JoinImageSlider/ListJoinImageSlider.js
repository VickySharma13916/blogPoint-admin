import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ConfirmDialog from "../../../../../components/ConfirmDialog";
import DataTable from "../../../../../components/DataTable";
import DropdownMenu from "../../../../../components/DropdownMenu";
import IconButton from "../../../../../components/IconButton";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import { performDeleteWebinarDetail } from "../../../../../redux/actionCreators/webinarCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const ListJoinImageSlider = ({
  fetching,
  deleteAccordionCourse,
  listData,
  id,
}) => {
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const handleOnConfirm = async () => {
    const data = {
      type: "joinImage",
      courseId: id,
      accordionId: deletingUser?.current?._id,
    };
    const result = await deleteAccordionCourse(data);
    if (result.status === 200) {
      history.push("/page");
    }
  };

  return (
    <>
      <Card
        border="light"
        className="w-100 mx-auto pt-3 px-3 mb-5 position-relative"
      >
        <Card.Body>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          >
            <IconButton
              variant="primary"
              icon={{ type: MdAdd }}
              onClick={() =>
                history.push(`/page/webinars/${id}/viewWebinar/addJoinImageSlider`, { courseId: id })
              }
            >
              Add Join Image Slider
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "join Slider Description",
                field: "joinDescription",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData.joinDescription}</span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Join Slider Image",
                field: "joinImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.joinImage}
                      name={rowData?.joinDescription}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
            ]}
            actions={[
              {
                onClick: (_, rowData) => console.log(rowData),
              },
            ]}
            components={{
              Action: (props) => (
                <DropdownMenu
                  menu={[
                    {
                      label: (
                        <span className="d-flex align-items-center text-secondary">
                          <MdEdit size={20} className="me-2" /> Edit
                        </span>
                      ),
                      onClick: () =>
                        history.push(
                          `/page/webinars/${id}/viewWebinar/${props.data._id}/editJoinSlider`,
                          {
                            data: {
                              ...props.data,
                            },
                          }
                        ),
                    },
                    {
                      label: (
                        <span className="d-flex align-items-center text-danger">
                          <MdDelete size={20} className="me-2" /> Delete
                        </span>
                      ),
                      onClick: () => {
                        setShowCDialog(true);
                        deletingUser.current = props.data;
                      },
                    },
                  ]}
                  iconSize="large"
                />
              ),
            }}
            search={false}
            downloadcsv={true}
            downloadExcel={true}
            filters={true}
            resetBtn={false}
            data={listData}
            loading={fetching}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete webinar Join Image Slider"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.joinDescription}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.webinar.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccordionCourse: (payload) =>
    dispatch(performDeleteWebinarDetail(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListJoinImageSlider);
