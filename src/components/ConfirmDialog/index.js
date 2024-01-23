import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';

import PropTypes from 'prop-types';
import Input from '../Form/Input';

const ConfirmDialog = ({ show, setShow, title, message, onConfirm, getReason, bodyHtml, loadingBtnText, footer }) => {
  const [submitting, setSubmitting] = useState(false);
  const [reason, setReason] = useState('');

  const handleClose = () => {
    setShow(false);
  };

  const handleOnConfirm = async () => {
    setSubmitting(true);
    await onConfirm(reason);
    setSubmitting(false);
    setShow(false);
    setReason('');
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: message }}></div>
        {bodyHtml}
        {getReason && (
          <div>
            <Input id="reason" name="reason" label="Reason" value={reason} onChange={(e) => setReason(e.target.value)} />
          </div>
        )}
      </Modal.Body>
      {footer && (
        <Modal.Footer>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
          {!getReason && (
            <Button variant="danger" onClick={handleOnConfirm}>
              {!submitting && <span>Confirm</span>}
              {submitting && (
                <span>
                  {loadingBtnText} <Spinner size="sm" animation="border" />
                </span>
              )}
            </Button>
          )}
          {getReason && (
            <Button disabled={reason === '' || reason.length <= 3} variant="danger" onClick={handleOnConfirm}>
              {!submitting && <span>Confirm</span>}
              {submitting && (
                <span>
                  {loadingBtnText} <Spinner size="sm" animation="border" />
                </span>
              )}
            </Button>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
};

ConfirmDialog.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  getReason: PropTypes.bool,
  bodyHtml: PropTypes.node,
  loadingBtnText: PropTypes.string,
  footer: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
  show: false,
  setShow: () => null,
  title: 'Give a title',
  message: 'Your message here',
  onConfirm: () => null,
  getReason: false,
  bodyHtml: <></>,
  loadingBtnText: 'Deleting',
  footer: true,
};

export default ConfirmDialog;
