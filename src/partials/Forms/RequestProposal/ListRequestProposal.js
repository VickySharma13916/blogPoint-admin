import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performDeleteRequestProposal,
  performGetRequestProposalList,
} from "../../../redux/actionCreators/requestProposalCreators";
import { BACKEND_URL } from "../../../services/constants";

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
                field: "fullName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.fullName}</span>
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
                title: "mobileNumber",
                field: "mobileNumber",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.mobileNumber}</span>
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
                title: "RequirementDetail",
                field: "RequirementDetail",
                width: 300,
                render: (rowData) => (
                  <>
                    <span style={{ width: "300px" }}>
                      {rowData?.RequirementDetail}
                    </span>
                  </>
                ),
              },
              {
                title: "RequirementHighlight",
                field: "RequirementHighlight",
                width: 300,
                render: (rowData) => (
                  <>
                    <span style={{ width: "300px" }}>
                      {rowData?.RequirementHighlight}
                    </span>
                  </>
                ),
              },
              {
                title: "link",
                field: "link",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.link}</span>
                  </>
                ),
              },
              {
                title: "contactMode",
                field: "contactMode",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.contactMode}</span>
                  </>
                ),
              },
              {
                title: "proposalFile",
                field: "proposalFile",
                width: 400,
                render: (rowData) => (
                  <>
                    {rowData.proposalFile ? (
                      <a
                        href={BACKEND_URL + rowData?.proposalFile}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {BACKEND_URL + rowData.proposalFile}
                      </a>
                    ) : (
                      "N/A"
                    )}
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
        title="Delete Request For Proposal"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.fullName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.request.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getRequestDetail: (payload) =>
    dispatch(performGetRequestProposalList(payload)),
  deleteRequest: (payload) => dispatch(performDeleteRequestProposal(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequestProposal);
