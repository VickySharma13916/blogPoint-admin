import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListNewsletter from "../../partials/Post/Newsletter/ListNewsletter";

const Blogs = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--newsletter" title="Newsletter">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Newsletter</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListNewsletter
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
