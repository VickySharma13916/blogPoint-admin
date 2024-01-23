import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Page from "../../components/Page";
import ChangePassword from "../../partials/Account/ChangePassword";
import EditProfile from "../../partials/Account/EditProfile";
import ViewProfile from "../../partials/Account/ViewProfile";

const Account = ({ user }) => {
  const location = useLocation();
  const { path } = useRouteMatch();

  return (
    <Page id="page--account" title="Account" className="h-100">
      <Row>
        <Col sm={12} md={10} lg={8} xl={6} className="mx-auto mt-5 mb-5">
          <div>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path={`${path}/`}
                    children={<ViewProfile user={user} />}
                  />
                  <Route
                    exact
                    path={`${path}/edit`}
                    children={<EditProfile user={user} />}
                  />
                  <Route
                    exact
                    path={`${path}/change-password`}
                    children={<ChangePassword />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </Col>
      </Row>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Account);
