import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ConfirmDialog from "../../../../../components/ConfirmDialog";
import DataTable from "../../../../../components/DataTable";
import DisplayText from "../../../../../components/DisplayText";
import DropdownMenu from "../../../../../components/DropdownMenu";
import IconButton from "../../../../../components/IconButton";
import useWindowSize from "../../../../../hooks/UseWindowSize";
import { performDeleteWorkshopDetail } from "../../../../../redux/actionCreators/workshopCreators";

const ListAccordion = ({ fetching, deleteAccordionWebinar, listData, id }) => {
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const handleOnConfirm = async () => {
    const data = {
      type: "accordion",
      courseId: id,
      accordionId: deletingUser?.current?._id,
    };
    const result = await deleteAccordionWebinar(data);
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
                history.push(`/page/workshops/${id}/viewWorkshop/addAccordion`, {
                  courseId: id,
                })
              }
            >
              Add Accordion
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "Accordion Title",
                field: "AccordionTitle",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.AccordionTitle}</span>
                  </>
                ),
              },
              {
                title: "Accordion Description",
                field: "AccordionDescription",
                width: 400,
                render: (rowData) => (
                  <div
                    style={{
                      width: "auto",
                      maxWidth: "900px",
                      minWidth: "400px",
                      height: "300px",
                      overflow: "scroll",
                    }}
                  >
                    <DisplayText htmlContent={rowData?.AccordionDescription} />
                  </div>
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
                          `/page/workshops/${id}/viewWorkshop/${props.data._id}/editAccordion`,
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
        title="Delete workshop Accordion"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.AccordionTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.workshop.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccordionWebinar: (payload) =>
    dispatch(performDeleteWorkshopDetail(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListAccordion);
