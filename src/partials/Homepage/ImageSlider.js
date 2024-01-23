import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ConfirmDialog from "../../components/ConfirmDialog";
import DataTable from "../../components/DataTable";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton";
import useWindowSize from "../../hooks/UseWindowSize";
import {
  performDeleteHomepage,
  performGetHomepageList,
} from "../../redux/actionCreators/homepageCreators";
import UseWindowUrl from "../../hooks/UseWindowUrl";
import { BACKEND_URL } from "../../services/constants";

const ImageSlider = ({ fetching, deleteHomepage, getHomepageDetail }) => {
  const [data, setData] = useState([]);
  const isMobile = useWindowSize();
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const history = useHistory();
  const { url } = useRouteMatch();

  const fetchData = async () => {
    const result = await getHomepageDetail();
    if (result.status === 200) {
      setData(result?.data);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnConfirm = async () => {
    const result = await deleteHomepage(deletingUser.current?._id);
    if (result) {
      fetchData();
    }
  };

  const handleClick = (tag) => {
    UseWindowUrl(tag);
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
              onClick={() => history.push(`${url}/AddHomepage`)}
            >
              Add imageSlider
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                title: "Banner Image",
                field: "bannerImage",
                width: 200,
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.bannerImage}
                      name={rowData?.bannerName}
                      size="50"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                title: "Banner Name",
                field: "bannerName",
                width: 250,
                render: (rowData) => (
                  <>
                    <span>{rowData.bannerName}</span>
                  </>
                ),
              },
              {
                title: "Banner Description",
                field: "bannerDescription",
                width: 400,
                render: (rowData) => (
                  <>
                    <span>{rowData?.bannerDescription}</span>
                  </>
                ),
              },
              {
                title: "Banner Tags",
                field: "bannerTags",
                width: 200,
                render: (rowData) => (
                  <>
                    {rowData?.bannerTags?.split(",")?.map((tag) => (
                      <div
                        className="text-primary"
                        onClick={() => handleClick(tag)}
                      >
                        {tag}
                      </div>
                    ))}
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
            onRowClick={(_, rowData) => null}
            filters={true}
            downloadcsv={true}
            downloadExcel={true}
            resetBtn={false}
            data={data}
            loading={fetching}
          />
        </Card.Body>
      </Card>
      <ConfirmDialog
        show={showCDialog}
        setShow={setShowCDialog}
        title="Delete Homepage Image Slider"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.bannerName}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.homepage.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getHomepageDetail: (payload) => dispatch(performGetHomepageList(payload)),
  deleteHomepage: (payload) => dispatch(performDeleteHomepage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);
