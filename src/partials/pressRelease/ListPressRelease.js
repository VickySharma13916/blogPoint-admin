import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import DataTable from "../../components/DataTable";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performDeletePressRelease,
  performGetPressReleaseList,
} from "../../redux/actionCreators/pressReleaseCreators";
import { BACKEND_URL } from "../../services/constants";
import ConfirmDialog from "../../components/ConfirmDialog";

const ListPressRelease = ({
  fetching,
  getList,
  refresh,
  deletePressRelease,
  history,
}) => {
  const [data, setData] = useState([]);
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
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
  const handleOnConfirm = async () => {
    const result = await deletePressRelease(deletingUser.current?._id);
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
              onClick={() => history.push(`/pressRelease/addPressRelease`)}
            >
              Add Press Release
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Press Release Name",
                field: "pressReleaseName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.pressReleaseName,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>
                        {rowData.pressReleaseName
                          ? rowData.pressReleaseName
                          : "N/A"}
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Press Release Link",
                field: "pressReleaseLink",
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.pressReleaseLink
                      ? rowData.pressReleaseLink
                      : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Press Release Image",
                field: "pressReleaseImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.pressReleaseImage}
                      name={rowData?.pressReleaseName}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
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
                        history.push(`/pressRelease/${props.data._id}/edit`, {
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
        title="Delete Press Release"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.pressReleaseName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.pressRelease.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetPressReleaseList(payload)),
  deletePressRelease: (payload) => dispatch(performDeletePressRelease(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPressRelease);
