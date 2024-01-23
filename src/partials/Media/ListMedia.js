import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../components/ConfirmDialog";
import DataTable from "../../components/DataTable";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performDeleteMedia,
  performGetMediaList,
} from "../../redux/actionCreators/mediaCreators";
import { BACKEND_URL } from "../../services/constants";

const ListMedia = ({ fetching, getList, refresh, deleteMedia, history }) => {
  const [data, setData] = useState([]);
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const fetchData = async () => {
    const result = await getList();
    if (result.status === 200) {
      const transformedData = result?.data?.docs?.data.map(
        (filePath, index) => ({
          id: index, // You can use a more meaningful identifier if available
          image: filePath,
        })
      );
      setData(transformedData);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isMobile = useWindowSize();
  const handleOnConfirm = async () => {
    const result = await deleteMedia(deletingUser.current?.image);
    if (result?.status === 200) {
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
              onClick={() => history.push(`/media/addMedia`)}
            >
              Add Media
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Media Image",
                field: "image",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.image}
                      name={"Images"}
                      size="80"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                title: "Media URL",
                width: 400,
                render: (rowData) => (
                  <>
                    {rowData.image ? (
                      <a
                        href={BACKEND_URL + rowData?.image}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {BACKEND_URL + rowData.image}
                      </a>
                    ) : (
                      "N/A"
                    )}
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
        title="Delete Media File"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.image}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.media.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetMediaList(payload)),
  deleteMedia: (payload) => dispatch(performDeleteMedia(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMedia);
