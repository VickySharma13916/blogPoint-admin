import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListForm from "../../partials/Forms/ListForm";

const PressRelease = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--form" title="Form">
      <Route
        path={`${path}/`}
        children={
          <ListForm
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default PressRelease;
