import React from "react";
import Page from "../../components/Page";
import DashboardView from "../../partials/Dashboard/DashboardView";

const Dashboard = () => {
  return (
    <Page id="page--dashboard" title="Dashboard">
      <DashboardView />
    </Page>
  );
};

export default Dashboard;