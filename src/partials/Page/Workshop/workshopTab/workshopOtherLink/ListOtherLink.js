import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ConfirmDialog from "../../../../../components/ConfirmDialog";
import DataTable from "../../../../../components/DataTable";
import DropdownMenu from "../../../../../components/DropdownMenu";
import IconButton from "../../../../../components/IconButton";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import { performDeleteWorkshopDetail } from "../../../../../redux/actionCreators/workshopCreators";

const ListOtherLink = ({ fetching, deleteworkshopDetail, listData, id }) => {
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const handleOnConfirm = async () => {
    const data = {
      type: "links",
      courseId: id,
      accordionId: deletingUser?.current?._id,
    };
    const result = await deleteworkshopDetail(data);
    if (result.status === 200) {
      history.push("/page");
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
              onClick={() =>
                history.push(`/page/workshops/${id}/viewWorkshop/addOtherLink`, {
                  courseId: id,
                })
              }
            >
              Add Other Link
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "workshop Other Name",
                field: "workshopOtherName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.workshopOtherName}</span>
                  </>
                ),
              },
              {
                title: "workshop Other Link",
                field: "workshopOtherLink",
                width: 250,
                render: (rowData) => (
                  <>
                    <a href={rowData?.workshopOtherLink}>
                      {rowData.workshopOtherLink}
                    </a>
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
                        <span className="d-flex align-items-center text-secondary">
                          <MdEdit size={20} className="me-2" /> Edit
                        </span>
                      ),
                      onClick: () =>
                        history.push(
                          `/page/workshops/${id}/viewWorkshop/${props.data._id}/editOtherLink`,
                          {
                            data: {
                              ...props.data,
                            },
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
            search={false}
            downloadcsv={true}
            downloadExcel={true}
            filters={true}
            resetBtn={false}
            data={listData}
            loading={fetching}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete workshop Other Link"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.workshopOtherName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteworkshopDetail: (payload) =>
    dispatch(performDeleteWorkshopDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOtherLink);
