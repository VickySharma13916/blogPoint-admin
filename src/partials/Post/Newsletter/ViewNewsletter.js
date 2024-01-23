import React from "react";
import { Card } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DataTable from "../../../components/DataTable";
import IconButton from "../../../components/IconButton";
import Page from "../../../components/Page";
import useWindowSize from "../../../hooks/UseWindowSize";

const ViewUserDetail = ({ fetching }) => {
  const isMobile = useWindowSize();
  const history = useHistory();
  const userData = history.location.state?.data;
  const handleOnClose = () => {
    history.goBack();
  };
  return (
    <Page id="page--newsletter" title="NewsLetter">
      <div className="d-flex align-items-center mb-3">
        <IconButton
          icon={<BiArrowBack />}
          variant="outline-link"
          onClick={handleOnClose}
          className="p-0 me-2"
        />
        <h4 className="m-0"> Newsletter User Details</h4>
      </div>
      <Card
        border="light"
        className="w-100 mx-auto pt-3 px-3 mb-5 position-relative"
      >
        <Card.Body className={`${isMobile && "p-0"}`}>
          <DataTable
            columns={[
              {
                width: 300,
                title: "First Name",
                field: "firstName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.firstName,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>{rowData.firstName ? rowData.firstName : "N/A"}</>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Last name",
                field: "lastName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.lastName,
                render: (rowData) => (
                  <div
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.lastName ? rowData.lastName : "N/A"}
                  </div>
                ),
              },
              {
                width: 300,
                title: "Email",
                field: "email",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.email,
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.email ? rowData.email : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Message",
                field: "message",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.message}
                    </span>
                  </>
                ),
              },
            ]}
            onRowClick={(_, rowData) => null}
            loading={fetching}
            data={userData?.NewsletterUserDetail}
            search={false}
            downloadcsv={true}
            downloadExcel={true}
            filters={true}
            resetBtn={false}
          />
        </Card.Body>
      </Card>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.newsletter.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  // getList: (payload) => dispatch(performGetCaseStudiesById(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserDetail);
