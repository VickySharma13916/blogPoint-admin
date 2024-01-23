import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performDeleteCourse,
  performGetCourseList,
} from "../../../redux/actionCreators/courseCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListCourses = ({ fetching, getList, refresh, deleteCourse, history }) => {
  const [showCDialog, setShowCDialog] = useState(false);
  const [data, setData] = useState([]);
  const deletingUser = useRef(null);
  const fetchData = async () => {
    const result = await getList();
    if (result.status === 200) {
      setData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isMobile = useWindowSize();

  const handleOnConfirm = async () => {
    const result = await deleteCourse(deletingUser.current?._id);
    if (result) {
      fetchData();
    }
  };
  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}training/courses/${link
      ?.toLowerCase()
      ?.replace(/\s+/g, "-")}`;
    return url;
  };
  return (
    <>
      <Card
        border="light"
        className="w-100 mx-auto pt-3 px-3 mb-5 position-relative"
      >
        <Card.Body className={`${isMobile && "p-0"}`}>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          >
            <IconButton
              variant="primary"
              icon={{ type: MdAdd }}
              onClick={() => history.push(`/page/courses/addcourses`)}
            >
              Add Courses
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "courseImage",
                field: "courseImage",
                // customFilterAndSearch: (term, rowData) => term === rowData.courseImage,
                render: (rowData) => (
                  <>
                    <span>
                      <>
                        <Avatar
                          src={BACKEND_URL + rowData?.courseImage}
                          name={rowData?.courseName}
                          size="50"
                          className="ff-primary rounded-circle me-3"
                        />
                      </>
                    </span>
                  </>
                ),
              },
              {
                title: "course Meta Title",
                field: "metaTitle",
                render: (rowData) => (
                  <>{rowData.metaTitle ? rowData.metaTitle : "N/A"}</>
                ),
              },
              {
                title: "course Meta Description",
                field: "metaDescription",
                render: (rowData) => (
                  <>
                    {rowData.metaDescription ? rowData.metaDescription : "N/A"}
                  </>
                ),
              },
              {
                title: "course Author Link",
                field: "authorLink",
                render: (rowData) => (
                  <>{rowData.authorLink ? rowData.authorLink : "N/A"}</>
                ),
              },
              {
                title: "coursesType",
                field: "coursesType",
                render: (rowData) => (
                  <>{rowData.coursesType ? rowData.coursesType : "N/A"}</>
                ),
              },
              {
                title: "coursesLink",
                field: "coursesLink",
                render: (rowData) => (
                  <>
                    {rowData.coursesLink ? (
                      <a
                        href={`${FRONTEND_URL}training/courses/${rowData?.coursesLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {createRelativePath(rowData?.coursesLink)}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                title: "courseName",
                field: "courseName",
                render: (rowData) => (
                  <>{rowData.courseName ? rowData.courseName : "N/A"}</>
                ),
              },
              {
                title: "courseStartingDate",
                field: "courseStartingDate",
                render: (rowData) => (
                  <>
                    {rowData.courseStartingDate
                      ? rowData.courseStartingDate
                      : "N/A"}
                  </>
                ),
              },
              {
                width: 300,
                title: "Status",
                field: "status",
                filtering: false,
                render: (rowData) => {
                  let statusColor = "success";
                  let statusText = "Published";
                  if (rowData.status === false) {
                    statusColor = "warning";
                    statusText = "Draft";
                  }
                  return (
                    <span className={`text-${statusColor}`}>{statusText}</span>
                  );
                },
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
                          `/page/courses/${props.data.coursesLink}/edit`,
                          {
                            data: props.data,
                          }
                        ),
                    },
                    {
                      label: (
                        <span className="d-flex align-items-center text-secondary">
                          <BiSolidUserCircle size={20} className="me-2" />
                          Course Detail
                        </span>
                      ),
                      onClick: () =>
                        history.push(
                          `/page/courses/${props.data._id}/viewCourse`,
                          {
                            data: props.data,
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
            onRowClick={(_, rowData) => null}
            loading={fetching}
            data={data}
            search={false}
            downloadcsv={true}
            downloadExcel={true}
            filters={true}
            resetBtn={false}
            refresh={refresh}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete Course"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.courseName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCourseList(payload)),
  deleteCourse: (payload) => dispatch(performDeleteCourse(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
