import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DisplayText from "../../../components/DisplayText";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import useWindowSize from "../../../hooks/UseWindowSize";
import UseWindowUrl from "../../../hooks/UseWindowUrl";
import {
  performDeleteNewsletter,
  performGetNewsletterList,
} from "../../../redux/actionCreators/newsletterCrestors";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListNewsletter = ({
  fetching,
  getList,
  refresh,
  history,
  deleteNewsletter,
}) => {
  const [data, setData] = useState([]);
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
  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}newsletter/${link
      ?.toLowerCase()
      ?.replace(/\s+/g, "-")}`;
    return url;
  };
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const result = await deleteNewsletter(deletingUser.current?._id);
    if (result) {
      fetchData();
    }
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
              onClick={() => history.push(`/post/Newsletter/AddNewsletter`)}
            >
              Add ListNewsletter
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Newsletter Title",
                field: "NewsletterTitle",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.NewsletterTitle,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.NewsletterTitle
                          ? rowData.NewsletterTitle
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Newsletter Summary",
                field: "NewsletterSummary",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.NewsletterSummary,
                render: (rowData) => (
                  <div
                    style={{
                      width: "300px",
                      height: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "scroll",
                    }}
                  >
                    {rowData.NewsletterSummary
                      ? rowData.NewsletterSummary
                      : "N/A"}
                  </div>
                ),
              },
              {
                width: 300,
                title: "Newsletter Author",
                field: "NewsletterAuthor",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.NewsletterAuthor,
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.NewsletterAuthor
                      ? rowData.NewsletterAuthor
                      : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Newsletter Image",
                field: "NewsletterImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.NewsletterImage}
                      name={rowData?.NewsletterTitle}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                width: 300,
                title: "Newsletter Tags",
                field: "NewsletterTags",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.NewsletterTags?.split(",")?.map((tag) => (
                        <div
                          className="text-primary"
                          onClick={() => handleClick(tag)}
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
                title: "Newsletter Category",
                field: "NewsletterCategory",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.NewsletterCategory}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Newsletter link",
                field: "NewsletterLink",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData.NewsletterLink ? (
                        <a
                          href={`${FRONTEND_URL}newsletter/${rowData?.NewsletterLink?.toLowerCase()?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {createRelativePath(rowData?.NewsletterLink)}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Newsletter Meta Title",
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
                title: "Newsletter Meta Description",
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
                title: "Newsletter File URL",
                field: "NewsletterFile",
                width: 400,
                render: (rowData) => (
                  <>
                    {rowData.NewsletterFile ? (
                      <a
                        href={BACKEND_URL + rowData?.NewsletterFile}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {BACKEND_URL + rowData.NewsletterFile}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                width: 300,
                title: "Newsletter Athor Link",
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
                title: "Newsletter Description",
                field: "NewsletterDescription",
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
                        htmlContent={rowData?.NewsletterDescription}
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
                          `/post/newsletter/${props.data.NewsletterLink}/edit`,
                          {
                            data: props.data,
                          }
                        ),
                    },
                    // {
                    //   label: (
                    //     <span className="d-flex align-items-center text-danger">
                    //       <MdDelete size={20} className="me-2" /> Delete
                    //     </span>
                    //   ),
                    //   onClick: () => {
                    //     setShowCDialog(true);
                    //     deletingUser.current = props.data;
                    //   },
                    // },
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
        title="Delete Newsletter"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.NewsletterTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.newsletter.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetNewsletterList(payload)),
  deleteNewsletter: (payload) => dispatch(performDeleteNewsletter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListNewsletter);
