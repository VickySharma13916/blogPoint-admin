import moment from "moment";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { BiSolidUserCircle } from "react-icons/bi";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import { performGetCaseStudiesList } from "../../../redux/actionCreators/caseStudiesCreator";
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

  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}case-studies/${link
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
                          <BiSolidUserCircle size={20} className="me-2" /> User
                          Detail
                        </span>
                      ),
                      onClick: () =>
                        history.push(`/form/CaseStudies/userDetail`, {
                          data: props.data,
                        }),
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
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.caseStudies.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCaseStudiesList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCaseStudies);
