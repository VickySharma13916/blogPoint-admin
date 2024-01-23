import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListSeodata from "../../partials/seodata/ListSeodata";

const Seodata = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Seodata" title="Seodata">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">SEO Data</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListSeodata
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Seodata;
