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
import { performDeleteAccordionCourse } from "../../../../../redux/actionCreators/courseCreators";
import { BACKEND_URL } from "../../../../../services/constants";

const ListTrainingProfile = ({
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
      type: "trainingProfile",
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
                history.push(
                  `/page/courses/${id}/viewCourse/addTrainerProfile`,
                  {
                    courseId: id,
                  }
                )
              }
            >
              Add Trainer Profile
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "Trainer Name",
                field: "trainerName",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData.trainerName}</span>
                  </>
                ),
              },
              {
                title: "Trainer Designation",
                field: "trainerDesignation",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.trainerDesignation}</span>
                  </>
                ),
              },
              {
                title: "Trainer Company",
                field: "trainerCompany",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.trainerCompany}</span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Trainer Image",
                field: "trainerImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.trainerImage}
                      name={rowData?.trainerName}
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
                          `/page/courses/${id}/viewCourse/${props.data._id}/editTrainerProfile`,
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
        title="Delete Course Accordion"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.trainerName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccordionCourse: (payload) =>
    dispatch(performDeleteAccordionCourse(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTrainingProfile);
