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
import { performDeleteNewsLetterUserdetail } from "../../../redux/actionCreators/newsletterCrestors";

const ViewUserDetail = ({ fetching, deleteNewsletterUserDetail }) => {
  const isMobile = useWindowSize();
  const history = useHistory();
  const userData = history.location.state?.data;
  const handleOnClose = () => {
    history.goBack();
  };
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const data = {
      carrerid: userData?._id,
      userId: deletingUser.current?._id,
    };
    const result = await deleteNewsletterUserDetail(data);
    if (result) {
      history.push("/form");
    }
  };
  return (
    <Page id="page--Carrer" title="Carrer">
      <div className="d-flex align-items-center mb-3">
        <IconButton
          icon={<BiArrowBack />}
          variant="outline-link"
          onClick={handleOnClose}
          className="p-0 me-2"
        />
        <h4 className="m-0">Newsletter User Details</h4>
      </div>
      <Card
        border="light"
        className="w-100 mx-auto pt-3 px-3 mb-5 position-relative"
      >
        <Card.Body className={`${isMobile && "p-0"}`}>
          <DataTable
            columns={[
              {
                title: "First Name",
                field: "firstName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.firstName,
                render: (rowData) => (
                  <>
                    <span>
                      <>{rowData.firstName ? rowData.firstName : "N/A"}</>
                    </span>
                  </>
                ),
              },
              {
                title: "Last name",
                field: "lastName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.lastName,
                render: (rowData) => (
                  <div>{rowData.lastName ? rowData.lastName : "N/A"}</div>
                ),
              },
              {
                title: "Email",
                field: "email",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.email,
                render: (rowData) => (
                  <span>{rowData.email ? rowData.email : "N/A"}</span>
                ),
              },
              {
                width: 600,
                title: "Message",
                field: "message",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "600px",
                        height: "300px",
                        overflow: "scroll",
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
            data={userData?.NewsletterUserDetail}
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
        title="Delete Newsletter User Details"
        message={`Are you sure, you want to delete <b>${
          userData?.NewsletterTitle
        } - ${
          deletingUser.current?.firstName + " " + deletingUser.current?.lastName
        }</b>?`}
        onConfirm={handleOnConfirm}
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.newsletter.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteNewsletterUserDetail: (payload) =>
    dispatch(performDeleteNewsLetterUserdetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserDetail);
