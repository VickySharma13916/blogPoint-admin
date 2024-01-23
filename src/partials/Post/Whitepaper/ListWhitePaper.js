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
  performDeleteWhitepaper,
  performGetWhitepaperList,
} from "../../../redux/actionCreators/whitepaperCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListWhitepaper = ({
  fetching,
  getList,
  filters,
  setFilters,
  resetFilters,
  refresh,
  deleteWhitepaper,
  history,
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
    const url = `${FRONTEND_URL}whitepapers/${link
      ?.toLowerCase()
      ?.replace(/\s+/g, "-")}`;
    return url;
  };
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const result = await deleteWhitepaper(deletingUser.current?._id);
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
              onClick={() => history.push(`/post/whitepapers/addwhitepaper`)}
            >
              Add Whitepaper
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "whitepaper Title",
                field: "whitepaperTitle",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.whitepaperTitle,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.whitepaperTitle
                          ? rowData.whitepaperTitle
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "whitepaper Summary",
                field: "whitepaperSummary",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.whitepaperSummary,
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
                    {rowData.whitepaperSummary
                      ? rowData.whitepaperSummary
                      : "N/A"}
                  </div>
                ),
              },
              {
                width: 300,
                title: "whitepaper Author",
                field: "whitepaperAuthor",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.whitepaperAuthor,
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.whitepaperAuthor
                      ? rowData.whitepaperAuthor
                      : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "whitepaper Image",
                field: "whitepaperImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.whitepaperImage}
                      name={rowData?.whitepaperTitle}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                width: 300,
                title: "Whitepaper Meta Title",
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
                title: "Whitepaper Meta Description",
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
                title: "Whitepaper Athor Link",
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
                width: 300,
                title: "whitepaper Tags",
                field: "whitepaperTags",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.whitepaperTags?.split(",")?.map((tag) => (
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
                title: "whitepaper Category",
                field: "whitepaperCategory",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.whitepaperCategory}
                    </span>
                  </>
                ),
              },
              {
                title: "whitepaper File URL",
                field: "whitepaperFile",
                width: 400,
                render: (rowData) => (
                  <>
                    {rowData.whitepaperFile ? (
                      <a
                        href={BACKEND_URL + rowData?.whitepaperFile}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {BACKEND_URL + rowData.whitepaperFile}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                width: 300,
                title: "whitepaper link",
                field: "whitepaperLink",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData.whitepaperLink ? (
                        <a
                          href={`${FRONTEND_URL}whitepapers/${rowData?.whitepaperLink
                            ?.toLowerCase()
                            ?.replace(/\s+/g, "-")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {createRelativePath(rowData?.whitepaperLink)}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </span>
                  </>
                ),
              },
              {
                title: "whitepaper Description",
                field: "whitepaperDescription",
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
                        htmlContent={rowData?.whitepaperDescription}
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
                          `/post/whitepapers/${props.data.whitepaperLink}/edit`,
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
            filterOptions={filters}
            setFilters={(data) => setFilters(data)}
            resetFilters={resetFilters}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete Newsletter"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.whitepaperTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.whitepaper.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetWhitepaperList(payload)),
  deleteWhitepaper: (payload) => dispatch(performDeleteWhitepaper(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWhitepaper);
