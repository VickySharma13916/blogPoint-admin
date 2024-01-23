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
import { performDeleteWebinarDetail } from "../../../../../redux/actionCreators/webinarCreators";

const ListOtherLink = ({ fetching, deleteWebinarDetail, listData, id }) => {
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
    const result = await deleteWebinarDetail(data);
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
                history.push(`/page/webinars/${id}/viewWebinar/addOtherLink`, {
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
                title: "Webinar Other Name",
                field: "webinarOtherName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.webinarOtherName}</span>
                  </>
                ),
              },
              {
                title: "Webinar Other Link",
                field: "webinarOtherLink",
                width: 250,
                render: (rowData) => (
                  <>
                    <a href={rowData?.webinarOtherLink}>
                      {rowData.webinarOtherLink}
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
                          `/page/webinars/${id}/viewWebinar/${props.data._id}/editOtherLink`,
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
        title="Delete Webinar Other Link"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.webinarOtherName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.webinar.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteWebinarDetail: (payload) =>
    dispatch(performDeleteWebinarDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOtherLink);
