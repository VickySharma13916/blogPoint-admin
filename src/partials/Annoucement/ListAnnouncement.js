import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../components/ConfirmDialog";
import DataTable from "../../components/DataTable";
import DisplayText from "../../components/DisplayText";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import UseWindowUrl from "../../hooks/UseWindowUrl";
import {
  performDeleteAnnouncement,
  performGetAnnouncementList,
} from "../../redux/actionCreators/announcementCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../services/constants";

const ListAnnouncement = ({
  fetching,
  getList,
  refresh,
  deleteAnnouncement,
  history,
}) => {
  const [data, setData] = useState([]);
  const [showCDialog, setShowCDialog] = useState(false);
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
  const handleClick = (tag) => {
    UseWindowUrl(tag);
  };

  const handleOnConfirm = async () => {
    const result = await deleteAnnouncement(deletingUser.current?._id);
    if (result) {
      fetchData();
    }
  };

  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}news-media/${link
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
              onClick={() => history.push(`/announcement/addAnnouncement`)}
            >
              Add Announcement and News
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Announcement Title",
                field: "announcementTitle",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.announcementTitle,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.announcementTitle
                          ? rowData.announcementTitle
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Announcement Link",
                field: "announcementLink",
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.announcementLink ? (
                      <a
                        href={`${FRONTEND_URL}news-media/${rowData?.announcementLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {createRelativePath(rowData?.announcementLink)}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Announcement Image",
                field: "announcementImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.announcementImage}
                      name={rowData?.announcementTitle}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                width: 300,
                title: "Announcement Tags",
                field: "announcementTags",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.announcementTags
                        ?.split(",")
                        ?.map((tag, index) => (
                          <div
                            className="text-primary"
                            onClick={() => handleClick(tag)}
                            key={index}
                          >
                            {tag}
                          </div>
                        ))}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: " Meta Title",
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
                title: " Meta Description",
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
                title: "Announcement Description",
                field: "announcementDescription",
                render: (rowData) => (
                  <>
                    <div
                      style={{
                        width: "auto",
                        maxWidth: "900px",
                        minWidth: "400px",
                        height: "300px",
                        overflow: "scroll",
                      }}
                    >
                      <DisplayText
                        htmlContent={rowData?.announcementDescription}
                      />
                    </div>
                  </>
                ),
              },
              {
                width: 500,
                title: "Date",
                field: "createdAt",
                render: (rowData) => (
                  <span
                    style={{
                      width: "500px",
                    }}
                  >
                    {rowData.createdAt
                      ? moment(rowData.createdAt).format("DD,MM, YYYY")
                      : "N/A"}
                  </span>
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
                          `/announcement/${props.data.announcementLink}/edit`,
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
        title="Delete Annoncement And News"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.announcementTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.announcement.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetAnnouncementList(payload)),
  deleteAnnouncement: (payload) => dispatch(performDeleteAnnouncement(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAnnouncement);
