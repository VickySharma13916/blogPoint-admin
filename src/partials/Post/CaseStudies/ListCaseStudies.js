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
  performDeleteCaseStudy,
  performGetCaseStudiesList,
} from "../../../redux/actionCreators/caseStudiesCreator";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListCaseStudies = ({
  fetching,
  getList,
  refresh,
  history,
  deleteCaseStudy,
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
    const url = `${FRONTEND_URL}case-studies/${link
      ?.toLowerCase()
      ?.replace(/\s+/g, "-")}`;
    return url;
  };

  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const result = await deleteCaseStudy(deletingUser.current?._id);
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
              onClick={() => history.push(`/post/CaseStudies/addCaseStudies`)}
            >
              Add CaseStudiess
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "CaseStudies Title",
                field: "CaseStudiesTitle",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.CaseStudiesTitle,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.CaseStudiesTitle
                          ? rowData.CaseStudiesTitle
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "CaseStudies Summary",
                field: "CaseStudiesSummary",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.CaseStudiesSummary,
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
                    {rowData.CaseStudiesSummary
                      ? rowData.CaseStudiesSummary
                      : "N/A"}
                  </div>
                ),
              },
              {
                width: 300,
                title: "CaseStudies Author",
                field: "CaseStudiesAuthor",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.CaseStudiesAuthor,
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.CaseStudiesAuthor
                      ? rowData.CaseStudiesAuthor
                      : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "CaseStudies Image",
                field: "CaseStudiesImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.CaseStudiesImage}
                      name={rowData?.CaseStudiesTitle}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                title: "CaseStudies File URL",
                field: "CaseStudiesFile",
                width: 400,
                render: (rowData) => (
                  <>
                    {rowData.CaseStudiesFile ? (
                      <a
                        href={BACKEND_URL + rowData?.CaseStudiesFile}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {BACKEND_URL + rowData.CaseStudiesFile}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                width: 300,
                title: "CaseStudies Tags",
                field: "CaseStudiesTags",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.CaseStudiesTags?.split(",")?.map((tag) => (
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
                title: "CaseStudies Category",
                field: "CaseStudiesCategory",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.CaseStudiesCategory}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "CaseStudies Meta Title",
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
                title: "CaseStudies Meta Description",
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
                title: "CaseStudies Link",
                field: "CaseStudiesLink",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData.CaseStudiesLink ? (
                        <a
                          href={`${FRONTEND_URL}case-studies/${rowData?.CaseStudiesLink?.toLowerCase()?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {createRelativePath(rowData?.CaseStudiesLink)}
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
                title: "CaseStudies Athor Link",
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
                title: "CaseStudies Description",
                field: "CaseStudiesDescription",
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
                        htmlContent={rowData?.CaseStudiesDescription}
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
                          `/post/CaseStudies/${props.data.CaseStudiesLink}/edit`,
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
        title="Delete CaseStudy"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.CaseStudiesTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.caseStudies.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCaseStudiesList(payload)),
  deleteCaseStudy: (payload) => dispatch(performDeleteCaseStudy(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCaseStudies);
