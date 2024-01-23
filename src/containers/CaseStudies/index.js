import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListCaseStudies from "../../partials/Post/CaseStudies/ListCaseStudies";

const CaseStudies = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--CaseStudies" title="CaseStudies">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Case Studies</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListCaseStudies
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
