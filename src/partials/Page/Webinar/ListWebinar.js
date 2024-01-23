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
  performDeleteWebinar,
  performGetWebinarList,
} from "../../../redux/actionCreators/webinarCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListWebinar = ({ fetching, getList, refresh, deleteCourse, history }) => {
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
    const url = `${FRONTEND_URL}training/webinars/${link
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
              onClick={() => history.push(`/page/webinars/addWebinar`)}
            >
              Add Webinar
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "webinarName",
                field: "webinarName",
                render: (rowData) => (
                  <>{rowData.webinarName ? rowData.webinarName : "N/A"}</>
                ),
              },
              {
                title: "webinarImage",
                field: "webinarImage",
                // customFilterAndSearch: (term, rowData) => term === rowData.webinarImage,
                render: (rowData) => (
                  <>
                    <span>
                      <>
                        <Avatar
                          src={BACKEND_URL + rowData?.webinarImage}
                          name={rowData?.webinarName}
                          size="70"
                          className="ff-primary rounded-circle me-3"
                        />
                      </>
                    </span>
                  </>
                ),
              },
              {
                title: "WebinarYoutubeLink",
                field: "WebinarYoutubeLink",
                render: (rowData) => (
                  <>
                    <a href={rowData?.WebinarYoutubeLink}>
                      {rowData.WebinarYoutubeLink
                        ? rowData?.WebinarYoutubeLink
                        : "N/A"}
                    </a>
                  </>
                ),
              },
              {
                title: "WebinarType",
                field: "WebinarType",
                render: (rowData) => (
                  <>{rowData.WebinarType ? rowData.WebinarType : "N/A"}</>
                ),
              },
              {
                title: "webinarLink",
                field: "webinarLink",
                render: (rowData) => (
                  <>
                    {rowData.webinarLink ? (
                      <a
                        href={`${FRONTEND_URL}training/webinars/${rowData?.webinarLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {createRelativePath(rowData?.webinarLink)}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                width: 300,
                title: "Webinar Meta Title",
                field: "metaTitle",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.metaTitle}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Webinar Meta Description",
                field: "metaDescription",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.metaDescription}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Webinar Athor Link",
                field: "authorLink",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.authorLink}
                    </span>
                  </>
                ),
              },
              {
                title: "webinarStartingDate",
                field: "webinarStartingDate",
                render: (rowData) => (
                  <>
                    {rowData.webinarStartingDate
                      ? rowData.webinarStartingDate
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
                          `/page/webinars/${props.data.webinarLink}/edit`,
                          {
                            data: props.data,
                          }
                        ),
                    },
                    {
                      label: (
                        <span className="d-flex align-items-center text-secondary">
                          <BiSolidUserCircle size={20} className="me-2" />
                          Webinar Details
                        </span>
                      ),
                      onClick: () =>
                        history.push(
                          `/page/webinars/${props.data._id}/viewWebinar`,
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
        title="Delete Webinar Page"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.webinarName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.course.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetWebinarList(payload)),
  deleteCourse: (payload) => dispatch(performDeleteWebinar(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWebinar);
