import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import useWindowSize from "../../../hooks/UseWindowSize";
import {
  performDeleteNewsletterSubscription,
  performGetNewsletterSubscriptionList,
} from "../../../redux/actionCreators/newsletterSubscriptionCreators";

const ListNewsLetterSubscription = ({
  fetching,
  deleteNewsletterSubscription,
  getnewsletterSubscriptionDetail,
}) => {
  const [data, setData] = useState([]);
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);

  const fetchData = async () => {
    const result = await getnewsletterSubscriptionDetail();
    if (result.status === 200) {
      setData(result?.data?.docs?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteNewsletterSubscription(
      deletingUser.current?._id
    );
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
                title: "First Name",
                field: "firstName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.firstName}</span>
                  </>
                ),
              },
              {
                title: "Last Name",
                field: "lastName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.lastName}</span>
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
            search={false}
            resetBtn={false}
            data={data}
            loading={fetching}
            filters={true}
            downloadcsv={true}
            downloadExcel={true}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete Subscription for Newsletter"
        message={`Are you sure, you want to delete <b>${
          deletingUser.current?.firstName + " " + deletingUser.current?.lastName
        }</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.subscription.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getnewsletterSubscriptionDetail: (payload) =>
    dispatch(performGetNewsletterSubscriptionList(payload)),
  deleteNewsletterSubscription: (payload) =>
    dispatch(performDeleteNewsletterSubscription(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNewsLetterSubscription);
