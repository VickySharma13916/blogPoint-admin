import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performDeleteContact,
  performGetContactList,
} from "../../../redux/actionCreators/contactCreators";

const ListRequestProposal = ({ fetching, deleteRequest, getRequestDetail }) => {
  const [data, setData] = useState([]);
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const fetchData = async () => {
    const result = await getRequestDetail();
    if (result.status === 200) {
      setData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteRequest(deletingUser.current?._id);
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
        <Card.Body>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          ></div>
          <DataTable
            columns={[
              {
                title: "Full Name",
                field: "firstName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>
                      {rowData?.title +
                        " " +
                        rowData.firstName +
                        " " +
                        rowData?.lastName}
                    </span>
                  </>
                ),
              },
              {
                title: "Email",
                field: "email",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.email}</span>
                  </>
                ),
              },
              {
                title: "Company",
                field: "company",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.company}</span>
                  </>
                ),
              },
              {
                title: "Full Address",
                field: "addressLine1",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>
                      {rowData?.addressLine1 +
                        " " +
                        rowData?.addressLine2 +
                        " " +
                        rowData?.city +
                        " " +
                        rowData?.state +
                        " " +
                        rowData?.zip}
                    </span>
                  </>
                ),
              },
              {
                title: "Mobile Number",
                field: "phone",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.phone}</span>
                  </>
                ),
              },
              {
                title: "country",
                field: "country",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.country}</span>
                  </>
                ),
              },
              {
                title: "Details",
                field: "message",
                width: 300,
                render: (rowData) => (
                  <>
                    <span style={{ width: "300px" }}>{rowData?.message}</span>
                  </>
                ),
              },
              {
                title: "Outsourcing Timeline",
                field: "outsourcingTimeline",
                width: 300,
                render: (rowData) => (
                  <>
                    <span style={{ width: "300px" }}>
                      {rowData?.outsourcingTimeline}
                    </span>
                  </>
                ),
              },
              {
                title: "Referal Interest",
                field: "referalInterest",
                width: 300,
                render: (rowData) => (
                  <>
                    <span style={{ width: "300px" }}>
                      {rowData?.referalInterest}
                    </span>
                  </>
                ),
              },
              {
                title: "Service Interest",
                field: "serviceInterest",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.serviceInterest}</span>
                  </>
                ),
              },
              {
                title: "Therapy Interest",
                field: "therapyInterest",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.therapyInterest}</span>
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
            search={false}
            resetBtn={false}
            data={data}
            loading={fetching}
            onRowClick={(_, rowData) => null}
            filters={true}
            downloadcsv={true}
            downloadExcel={true}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete Contact Us Form Detail"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.firstName}  ${deletingUser.current?.lastName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.contact.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteRequest: (payload) => dispatch(performDeleteContact(payload)),
  getRequestDetail: (payload) => dispatch(performGetContactList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestProposal);
