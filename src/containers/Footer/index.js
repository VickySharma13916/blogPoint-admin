import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListFooter from "../../partials/Footer/ListFooter";

const Footer = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--footer" title="Footer">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Footer</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListFooter
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Footer;
