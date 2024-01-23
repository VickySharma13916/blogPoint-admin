import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import DataTable from "../../components/DataTable";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performDeleteUser,
  performGetList,
} from "../../redux/actionCreators/userCreators";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useRef } from "react";

const ListUser = ({ fetching, getList, deleteUser, refresh, history }) => {
  const { url } = useRouteMatch();
  const [data, setData] = useState([]);
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const fetchData = async () => {
    const result = await getList();
    if (result?.status === 200) {
      setData(result?.data?.users);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isMobile = useWindowSize();
  const handleOnConfirm = async () => {
    const result = await deleteUser(deletingUser.current?._id);
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
              onClick={() => history.push(`${url}/adduser`)}
            >
              Add User
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "Name",
                field: "Name",
                customFilterAndSearch: (term, rowData) => term === rowData.name,
                render: (rowData) => (
                  <>
                    <span>
                      <>{rowData.name ? rowData.name : "N/A"}</>
                    </span>
                  </>
                ),
              },
              {
                title: "Email",
                field: "email",
                render: (rowData) => (
                  <>{rowData.email ? rowData.email : "N/A"}</>
                ),
              },
              {
                title: "mobileNumber",
                field: "mobileNumber",
                render: (rowData) => (
                  <>{rowData.mobileNumber ? rowData.mobileNumber : "N/A"}</>
                ),
              },
              {
                title: "Type",
                field: "Type",
                customFilterAndSearch: (term, rowData) => term === rowData.type,
                render: (rowData) => {
                  let statusColor = "success";
                  let statusText = "Admin";
                  if (rowData.type === "admin") {
                    statusColor = "success";
                    statusText = "Admin";
                  }
                  if (rowData.type === "author") {
                    statusColor = "warning";
                    statusText = "Author";
                  }
                  if (rowData.type === "viewer") {
                    statusColor = "primary";
                    statusText = "Viewer";
                  }
                  return (
                    <span className={`text-${statusColor}`}>{statusText}</span>
                  );
                },
              },
              {
                title: "Proposal Request",
                field: "isProposalRequest",
                render: (rowData) => {
                  let statusColor = "success";
                  let statusText = "Request For Proposal Active";
                  if (rowData.isProposalRequest) {
                    statusColor = "success";
                    statusText = "Request For Proposal Active";
                  } else {
                    statusColor = "danger";
                    statusText = "Request For Proposal Inactive";
                  }
                  return (
                    <span className={`text-${statusColor}`}>{statusText}</span>
                  );
                },
              },
              {
                title: "Contact Mail",
                field: "isContact",
                render: (rowData) => {
                  let statusColor = "success";
                  let statusText = "Contact Mail Active";
                  if (rowData.isProposalRequest) {
                    statusColor = "success";
                    statusText = "Contact Mail Active";
                  } else {
                    statusColor = "danger";
                    statusText = "Contact Mail Inactive";
                  }
                  return (
                    <span className={`text-${statusColor}`}>{statusText}</span>
                  );
                },
              },
              {
                title: "Status",
                field: "status",
                filtering: false,
                render: (rowData) => {
                  let statusColor = "success";
                  let statusText = "Active";

                  if (rowData.status === false) {
                    statusColor = "warning";
                    statusText = "InActive";
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
                        history.push(`${url}/${props.data._id}/edit`, {
                          data: props.data,
                        }),
                    },
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
        title="Delete User"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.name}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.user.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetList(payload)),
  deleteUser: (payload) => dispatch(performDeleteUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
