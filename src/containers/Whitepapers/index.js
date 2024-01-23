import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListWhitePaper from "../../partials/Post/Whitepaper/ListWhitePaper";

const Whitepapers = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Whitepapers" title="Whitepapers">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Whitepapers</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListWhitePaper
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Whitepapers;
