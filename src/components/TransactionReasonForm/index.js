import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import Input from '../Form/Input';

const TransactionReasonForm = ({ reason, setReason, handleReasonSubmit }) => {
  const handleOnCancel = () => {
    setReason({ show: false, reason: null });
  };

  const handleOnChangeReason = (event) => {
    setReason((preValue) => {
      return {
        ...preValue,
        reason: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    setReason((preValue) => {
      return {
        ...preValue,
        show: false,
      };
    });

    handleReasonSubmit();
  };

  return (
    <Row>
      <Col xs={12}>
        <Input id="reason" name="reason" label="Reason" onChange={handleOnChangeReason} />
      </Col>

      <Col xs={12}>
        <div style={{ display: 'inline-flex', justifyContent: 'right', width: '100%' }}>
          <Button
            type="button"
            variant="outline-secondary"
            style={{ marginRight: '1rem' }}
            size="sm"
            onClick={handleOnCancel}
          >
            Cancel
          </Button>

          <Button type="button" variant="primary" size="sm" disabled={!reason.reason} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Col>
    </Row>
  );
};

TransactionReasonForm.propTypes = {
  reason: PropTypes.any,
  setReason: PropTypes.func,
  handleReasonSubmit: PropTypes.func,
};

TransactionReasonForm.defaultProps = {
  reason: { show: false, reason: null },
  setReason: () => null,
  handleReasonSubmit: () => null,
};

export default TransactionReasonForm;
