import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListUser from "../../partials/User/ListUser";

const User = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--user" title="User">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Users</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListUser
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default User;
