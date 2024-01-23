import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Drawer, Box, Backdrop } from "@mui/material";

const Portal = ({ open, width, variant, header, children }) => {
  const history = useHistory();
  const [openState, setOpenState] = useState(false);

  const handleGoBack = () => {
    setTimeout(() => {
      history.goBack();
    }, 100);
  };

  const handleOnClose = () => {
    setOpenState(false);
    handleGoBack();
  };

  useEffect(() => {
    if (open === true) {
      setOpenState(open);
    } else if (open === false) {
      handleOnClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Backdrop open={openState} sx={{ zIndex: 1021 }}>
      <Drawer
        open={openState}
        anchor="right"
        variant={variant}
        sx={{
          width: width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: width, boxSizing: "border-box" },
        }}
        className="portal"
      >
        <Box sx={{ overflow: "auto", height: "100%" }}>
          {header && (
            <div className="d-flex align-items-center justify-content-start px-4 py-3 sticky-top portal__header">
              {header}
            </div>
          )}

          <div className="px-4 py-4 portal__content">
            {children ? children : null}
          </div>
        </Box>
      </Drawer>
    </Backdrop>
  );
};

Portal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  variant: PropTypes.oneOf(["temporary", "persistent", "permanent"]),
  header: PropTypes.any,
  open: PropTypes.bool,
};

Portal.defaultProps = {
  width: "480px",
  variant: "temporary",
  header: null,
  open: false,
};

export default Portal;
