import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

import { showSnack, resetSnack } from './redux/actions/alertActions';
// import { performGetProfileDetails } from './redux/actionCreators/authCreators';

import MasterLayout from './layouts/MasterLayout';
import { renderRoutes } from './routes';
import routeConfig from './routeConfig';

import Loader from './components/Loader';
import { validateRoutesAccess } from './utils';

import './assets/scss/style.scss';

function App({ showSnack, hideSnack, isAuthenticated, loggedInUser, getProfileDetails }) {
  const { closeSnackbar } = useSnackbar();
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const [offlineSnackId, setOfflineSnackId] = useState(new Date().valueOf());

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('offline', updateNetwork);
    window.addEventListener('online', updateNetwork);
    return () => {
      window.removeEventListener('offline', updateNetwork);
      window.removeEventListener('online', updateNetwork);
    };
  });

  // useEffect(() => {
  //   if (isAuthenticated) getProfileDetails();
  // }, [isAuthenticated, getProfileDetails]);

  const checkNetwork = useCallback(() => {
    if (!isOnline) {
      const key = new Date().valueOf();
      setOfflineSnackId(key);
      showSnack({
        message: 'No connection!',
        options: {
          persist: true,
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          key: key,
        },
      });
    }
    if (isOnline) {
      closeSnackbar(offlineSnackId);
      hideSnack();
    }
  }, [isOnline, setOfflineSnackId, offlineSnackId, showSnack, hideSnack, closeSnackbar]);

  useEffect(() => {
    checkNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return (
    <Router>
      <MasterLayout>
        <Suspense fallback={<Loader />}>
          {renderRoutes(validateRoutesAccess(routeConfig, loggedInUser ? loggedInUser.role : undefined))}
        </Suspense>
      </MasterLayout>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loggedInUser: state.auth.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  hideSnack: () => dispatch(resetSnack()),
  showSnack: (payload) => dispatch(showSnack(payload)),
  // getProfileDetails: (payload) => dispatch(performGetProfileDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
