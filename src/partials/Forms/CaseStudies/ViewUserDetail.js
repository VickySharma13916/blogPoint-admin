import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import Page from "../../../components/Page";
import useWindowSize from "../../../hooks/UseWindowSize";
import { performDeleteCaseStudyUserdetail } from "../../../redux/actionCreators/caseStudiesCreator";

const ViewUserDetail = ({ fetching, deleteCaseStudyUser }) => {
  const isMobile = useWindowSize();
  const history = useHistory();
  const userData = history.location.state?.data;
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const data = {
      carrerid: userData?._id,
      userId: deletingUser.current?._id,
    };
    const result = await deleteCaseStudyUser(data);
    if (result) {
      history.push("/form");
    }
  };
  const handleOnClose = () => {
    history.goBack();
  };
  return (
    <Page id="page--CaseStudies" title="CaseStudies">
      <div className="d-flex align-items-center mb-3">
        <IconButton
          icon={<BiArrowBack />}
          variant="outline-link"
          onClick={handleOnClose}
          className="p-0 me-2"
        />
        <h4 className="m-0"> CaseStudies User Details</h4>
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
            data={userData?.CaseStudiesUserDetail}
            search={false}
            downloadcsv={true}
            downloadExcel={true}
            filters={true}
            resetBtn={false}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete CaseStudy User Detail"
        message={`Are you sure, you want to delete <b>${
          userData?.CaseStudiesTitle
        } - ${
          deletingUser.current?.firstName + " " + deletingUser.current?.lastName
        }</b>?`}
        onConfirm={handleOnConfirm}
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.caseStudies.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCaseStudyUser: (payload) =>
    dispatch(performDeleteCaseStudyUserdetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserDetail);
