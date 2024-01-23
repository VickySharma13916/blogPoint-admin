import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListContact from "../../partials/Forms/Contact/ListContact";

const Contact = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Contact" title="Contact">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Contact</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListContact
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default Contact;
