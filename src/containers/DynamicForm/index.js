import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListDynamicForm from "../../partials/DynamicForm/ListDynamicForm";

const DynamicForm = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--DynamicForm" title="Dynamic Form ">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Dynamic Form List</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListDynamicForm
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
    </Page>
  );
};

export default DynamicForm;
