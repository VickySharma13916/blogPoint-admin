import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performDeleteWorkshop,
  performGetWorkshopList,
} from "../../../redux/actionCreators/workshopCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListWorkshop = ({
  fetching,
  getList,
  refresh,
  deleteCourse,
  history,
}) => {
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const [data, setData] = useState([]);
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

  const handleOnConfirm = async () => {
    const result = await deleteCourse(deletingUser.current?._id);
    if (result) {
      fetchData();
    }
  };

  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}training/workshops/${link
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
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          >
            <IconButton
              variant="primary"
              icon={{ type: MdAdd }}
              onClick={() => history.push(`/page/workshops/addWorkshop`)}
            >
              Add Workshop
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "workshopName",
                field: "workshopName",
                render: (rowData) => (
                  <>{rowData.workshopName ? rowData.workshopName : "N/A"}</>
                ),
              },
              {
                title: "workshopImage",
                field: "workshopImage",
                // customFilterAndSearch: (term, rowData) => term === rowData.workshopImage,
                render: (rowData) => (
                  <>
                    <span>
                      <>
                        <Avatar
                          src={BACKEND_URL + rowData?.workshopImage}
                          name={rowData?.workshopName}
                          size="70"
                          className="ff-primary rounded-circle me-3"
                        />
                      </>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Workshop Meta Title",
                field: "metaTitle",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.metaTitle}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Workshop Meta Description",
                field: "metaDescription",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.metaDescription}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Workshop Athor Link",
                field: "authorLink",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.authorLink}
                    </span>
                  </>
                ),
              },
              {
                title: "workshopType",
                field: "workshopType",
                render: (rowData) => (
                  <>{rowData.workshopType ? rowData.workshopType : "N/A"}</>
                ),
              },
              {
                title: "workshopLink",
                field: "workshopLink",
                render: (rowData) => (
                  <>
                    {rowData.workshopLink ? (
                      <a
                        href={`${FRONTEND_URL}training/workshops/${rowData?.workshopLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {createRelativePath(rowData?.workshopLink)}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </>
                ),
              },
              {
                title: "workshopStartingDate",
                field: "workshopStartingDate",
                render: (rowData) => (
                  <>
                    {rowData.workshopStartingDate
                      ? rowData.workshopStartingDate
                      : "N/A"}
                  </>
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
                        history.push(
                          `/page/workshops/${props.data.workshopLink}/edit`,
                          {
                            data: props.data,
                          }
                        ),
                    },
                    {
                      label: (
                        <span className="d-flex align-items-center text-secondary">
                          <BiSolidUserCircle size={20} className="me-2" />
                          Workshop Details
                        </span>
                      ),
                      onClick: () =>
                        history.push(
                          `/page/workshops/${props.data._id}/viewWorkshop`,
                          {
                            data: props.data,
                          }
                        ),
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
        title="Delete Workshop Page"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.workshopName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetWorkshopList(payload)),
  deleteCourse: (payload) => dispatch(performDeleteWorkshop(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListWorkshop);
