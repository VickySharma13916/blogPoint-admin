import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import {
  performDeleteDynamicRegisterForm,
  performGetDynamicRegisterForm,
} from "../../../redux/actionCreators/dynamicRegisterCreators";
import DynamicTable from "./ViewDynamicFormTable";

const ListDynamicRegisterForm = ({
  fetching,
  deleteDynamicRegisterForm,
  getInputTypeDetail,
}) => {
  const [data, setData] = useState([]);
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);

  const fetchData = async () => {
    const result = await getInputTypeDetail();
    if (result.status === 200) {
      setData(result?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteDynamicRegisterForm(deletingUser.current?._id);
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
          <DataTable
            columns={[
              {
                title: "User Details",
                render: (rowData) => (
                  <>{rowData.data ? <DynamicTable data={rowData} /> : "N/A"}</>
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
        title="Delete Dynamic Register Form Data"
        message={`Are you sure, you want to delete <b>${deletingUser?.current?.Link}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.dynamicForm.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getInputTypeDetail: (payload) =>
    dispatch(performGetDynamicRegisterForm(payload)),
  deleteDynamicRegisterForm: (payload) =>
    dispatch(performDeleteDynamicRegisterForm(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDynamicRegisterForm);
