import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListHeader from "../../partials/Header/ListHeader";

const Header = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Header" title="Header">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Header</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListHeader
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Header;
