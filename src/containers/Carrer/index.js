import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListCarrer from "../../partials/Carrer/ListCarrer";

const CaseStudies = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Carrer" title="Carrer">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Carrer</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListCarrer
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default CaseStudies;
