import React from "react";
import { Card } from "react-bootstrap";

import Page from "../../components/Page";

const Unauthorized = () => {
  return (
    <Page id="page--no-found" title="Unauthorized">
      <Card border="light" className="w-100 mx-auto">
        <Card.Header>Unauthorized</Card.Header>
        <Card.Body>You are not authorized to view this page. Contact admin to get access.</Card.Body>
      </Card>
    </Page>
  )
}

export default Unauthorized;