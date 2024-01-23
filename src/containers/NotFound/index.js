import React from "react";
import { Card } from "react-bootstrap";

import Page from "../../components/Page";

const NotFound = () => {
  return (
    <Page id="page--no-found" title="Page Not Found">
      <Card border="light" className="w-100 mx-auto">
        <Card.Header>Page Not Found</Card.Header>
        <Card.Body></Card.Body>
      </Card>
    </Page>
  )
}

export default NotFound;