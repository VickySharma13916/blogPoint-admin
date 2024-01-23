import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { BiSolidUserCircle } from "react-icons/bi";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import DisplayText from "../../../components/DisplayText";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
    performGetCarrerList
} from "../../../redux/actionCreators/carrerCreators";

const ListCarrer = ({ fetching, getList, refresh, history, deleteCarrer }) => {
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
                title: "Carrer Accordion Title",
                field: "carrerAccordionTitle",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.carrerAccordionTitle
                          ? rowData.carrerAccordionTitle
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },

              {
                title: "Carrer Accordion Description",
                field: "carrerAccordionDescription",
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
                        htmlContent={rowData?.carrerAccordionDescription}
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
                        history.push(`/form/Carrer/userDetail`, {
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
  fetching: state.carrer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetCarrerList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCarrer);
