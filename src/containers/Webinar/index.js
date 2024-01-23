import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListWebinar from "../../partials/Page/Webinar/ListWebinar";

const Webinar = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Webinar" title="Webinar">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Webinar</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListWebinar
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Webinar;
