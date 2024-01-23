import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ConfirmDialog from "../../components/ConfirmDialog";
import DataTable from "../../components/DataTable";
import DisplayText from "../../components/DisplayText";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performDeleteService,
  performGetService,
} from "../../redux/actionCreators/serviceCreators";

const ListService = ({ fetching, deleteFooter, getServiceDetail }) => {
  const [data, setData] = useState([]);
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const { url } = useRouteMatch();

  const fetchData = async () => {
    const result = await getServiceDetail();
    if (result.status === 200) {
      setData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteFooter(deletingUser.current?._id);
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
          >
            <IconButton
              variant="primary"
              icon={{ type: MdAdd }}
              onClick={() => history.push(`${url}/Addservice`)}
            >
              Add Service
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Service Name",
                field: "serviceName",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.serviceName,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>{rowData.serviceName ? rowData.serviceName : "N/A"}</>
                    </span>
                  </>
                ),
              },
              {
                title: "Service Description",
                field: "serviceDescription",
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
                      <DisplayText htmlContent={rowData?.serviceDescription} />
                    </div>
                  </>
                ),
              },
              {
                width: 300,
                title: "Service Link",
                field: "serviceLink",
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.serviceLink ? (
                      <a
                        href={rowData?.serviceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {rowData?.serviceLink}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </span>
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
        title="Delete Service"
        message={`Are you sure, you want to delete <b>${deletingUser?.current?.serviceName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.service.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getServiceDetail: (payload) => dispatch(performGetService(payload)),
  deleteFooter: (payload) => dispatch(performDeleteService(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListService);
