import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DataTable from "../../../components/DataTable";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import useWindowSize from "../../../hooks/UseWindowSize";
import ConfirmDialog from "../../../components/ConfirmDialog";
import {
  performDeleteTuracozTeam,
  performGetTuracozTeamList,
} from "../../../redux/actionCreators/aboutCreators";
import { BACKEND_URL } from "../../../services/constants";

const ListTuracozTeam = ({ fetching, deleteTuracozTeam, getTuracozTeam }) => {
  const [data, setData] = useState([]);
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const { url } = useRouteMatch();

  const fetchData = async () => {
    const result = await getTuracozTeam();
    if (result.status === 200) {
      setData(result?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteTuracozTeam(deletingUser.current?._id);
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
              onClick={() => history.push(`${url}/Addteam`)}
            >
              Add Team Member
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "Team Member Image",
                field: "teamImage",
                width: 200,
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.teamImage}
                      name={rowData?.teamName}
                      size="50"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                title: "Team Member Name",
                field: "teamName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.teamName}</span>
                  </>
                ),
              },
              {
                title: "Team Member Designation",
                field: "teamDesignation",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.teamDesignation}</span>
                  </>
                ),
              },
              {
                title: "Team Member Designation",
                field: "teamDesignation",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.teamCategory}</span>
                  </>
                ),
              },
              {
                title: "Team Member About",
                field: "teamAbout",
                width: 200,
                render: (rowData) => (
                  <>
                    <span>{rowData?.teamAbout}</span>
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
                        history.push(`${url}/${props.data._id}/editTeam`, {
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
        title="Delete BlogPoint Team Member"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.teamName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.about.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getTuracozTeam: (payload) => dispatch(performGetTuracozTeamList(payload)),
  deleteTuracozTeam: (payload) => dispatch(performDeleteTuracozTeam(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTuracozTeam);
