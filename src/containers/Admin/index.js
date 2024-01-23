import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListAdmin from "../../partials/Admin/ListAdmin";

const Admin = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--admin" title="Admin">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Admin</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListAdmin
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Admin;
