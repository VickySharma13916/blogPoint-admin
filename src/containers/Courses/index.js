import React, { useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Page from "../../components/Page";
import ListCourses from "../../partials/Page/Courses/ListCourses";
import ViewCourse from "../../partials/Page/Courses/coursetab/viewCourse";

const Courses = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [refresh, setRefresh] = useState("");

  return (
    <Page id="page--Courses" title="Courses">
      <div className="d-flex align-items-start mb-3">
        <h1 className="m-0">Courses</h1>
      </div>
      <Route
        path={`${path}/`}
        children={
          <ListCourses
            refresh={refresh}
            setRefresh={() => setRefresh(uuidv4())}
            history={history}
          />
        }
      />
      <Route
        exact
        path={`${path}/:id/viewCourse`}
        children={
          <ViewCourse refresh={() => setRefresh(uuidv4())} history={history} />
        }
      />
    </Page>
  );
};

export default Courses;
