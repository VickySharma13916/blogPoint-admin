import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListBlogs from "../../partials/Post/Blogs/ListBlogs";

const Blogs = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--blogs" title="Blogs">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Blogs</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListBlogs
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Blogs;
