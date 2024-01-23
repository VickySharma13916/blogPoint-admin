import moment from "moment";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { BiSolidUserCircle } from "react-icons/bi";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import { performGetWhitepaperList } from "../../../redux/actionCreators/whitepaperCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListWhitepaper = ({
  fetching,
  getList,
  filters,
  setFilters,
  resetFilters,
  refresh,
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

  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}whitepapers/${link
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
                        history.push(`/form/whitepapers/userDetail`, {
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
            filterOptions={filters}
            setFilters={(data) => setFilters(data)}
            resetFilters={resetFilters}
          />
        </Card.Body>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.whitepaper.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetWhitepaperList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWhitepaper);
