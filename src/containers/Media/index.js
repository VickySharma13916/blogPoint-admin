import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListMedia from "../../partials/Media/ListMedia";

const Media = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Media" title="Media">
      <Route
        path={`${path}/`}
        children={
          <ListMedia
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Media;
