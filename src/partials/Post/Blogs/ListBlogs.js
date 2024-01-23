import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Avatar from "react-avatar";
import { Card } from "react-bootstrap";
import { MdAdd, MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import ConfirmDialog from "../../../components/ConfirmDialog";
import DataTable from "../../../components/DataTable";
import DisplayText from "../../../components/DisplayText";
import DropdownMenu from "../../../components/DropdownMenu";
import IconButton from "../../../components/IconButton";
import useWindowSize from "../../../hooks/UseWindowSize";
import UseWindowUrl from "../../../hooks/UseWindowUrl";
import {
  performDeleteBlog,
  performGetBlogList,
} from "../../../redux/actionCreators/blogCreators";
import { BACKEND_URL, FRONTEND_URL } from "../../../services/constants";

const ListBlog = ({ fetching, getList, refresh, history, deleteBlog }) => {
  const [data, setData] = useState([]);
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
  const isMobile = useWindowSize();
  const handleClick = (tag) => {
    UseWindowUrl(tag);
  };

  const createRelativePath = (link) => {
    const url = `${FRONTEND_URL}${link?.toLowerCase()?.replace(/\s+/g, "-")}`;
    return url;
  };
  const [showCDialog, setShowCDialog] = useState(false);
  const deletingUser = useRef(null);
  const handleOnConfirm = async () => {
    const result = await deleteBlog(deletingUser.current?._id);
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
        <Card.Body className={`${isMobile && "p-0"}`}>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex justify-content-end`}
          >
            <IconButton
              variant="primary"
              icon={{ type: MdAdd }}
              onClick={() => history.push(`/post/blogs/addblogs`)}
            >
              Add Blogs
            </IconButton>
          </div>
          <DataTable
            columns={[
              {
                width: 300,
                title: "Blog Title",
                field: "blogTitle",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.blogTitle,
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      <>{rowData.blogTitle ? rowData.blogTitle : "N/A"}</>
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Blog Summary",
                field: "blogSummary",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.blogSummary,
                render: (rowData) => (
                  <div
                    style={{
                      width: "300px",
                      height: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "scroll",
                    }}
                  >
                    {rowData.blogSummary ? rowData.blogSummary : "N/A"}
                  </div>
                ),
              },
              {
                width: 300,
                title: "Blog Author",
                field: "blogAuthor",
                customFilterAndSearch: (term, rowData) =>
                  term === rowData.blogAuthor,
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.blogAuthor ? rowData.blogAuthor : "N/A"}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Blog Link",
                field: "blogLink",
                render: (rowData) => (
                  <span
                    style={{
                      width: "300px",
                    }}
                  >
                    {rowData.blogLink ? (
                      <a
                        href={`${FRONTEND_URL}${rowData?.blogLink
                          ?.toLowerCase()
                          ?.replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {createRelativePath(rowData?.blogLink)}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </span>
                ),
              },
              {
                width: 300,
                title: "Blog Image",
                field: "blogImage",
                render: (rowData) => (
                  <>
                    <Avatar
                      src={BACKEND_URL + rowData?.blogImage}
                      name={rowData?.blogTitle}
                      size="70"
                      className="ff-primary rounded-circle me-3"
                    />
                  </>
                ),
              },
              {
                width: 300,
                title: "Blog Tags",
                field: "blogtags",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.blogtags?.split(",")?.map((tag) => (
                        <div
                          className="text-primary"
                          onClick={() => handleClick(tag)}
                        >
                          {tag}
                        </div>
                      ))}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Blog Category",
                field: "blogCategory",
                render: (rowData) => (
                  <>
                    <span
                      style={{
                        width: "300px",
                      }}
                    >
                      {rowData?.blogCategory}
                    </span>
                  </>
                ),
              },
              {
                width: 300,
                title: "Blog Meta Title",
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
                title: "Blog Meta Description",
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
                title: "Blog Athor Link",
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
                title: "Blog Description",
                field: "blogDescription",
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
                      <DisplayText htmlContent={rowData?.blogDescription} />
                    </div>
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
                          `/post/blogs/${props.data.blogLink}/edit`,
                          {
                            data: props.data,
                          }
                        ),
                    },
                    // {
                    //   label: (
                    //     <span className="d-flex align-items-center text-danger">
                    //       <MdDelete size={20} className="me-2" /> Delete
                    //     </span>
                    //   ),
                    //   onClick: () => {
                    //     setShowCDialog(true);
                    //     deletingUser.current = props.data;
                    //   },
                    // },
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
        title="Delete Blog"
        message={`Are you sure, you want to delete <b>${deletingUser.current?.blogTitle}</b>?`}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.blog.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (payload) => dispatch(performGetBlogList(payload)),
  deleteBlog: (payload) => dispatch(performDeleteBlog(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBlog);
