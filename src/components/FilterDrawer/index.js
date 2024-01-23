import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Box } from '@mui/material';
import { Button, Row, Col } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';

import IconButton from '../IconButton';
import Input from '../Form/Input';
import Select from '../Form/Select';
import DateRangeInput from '../Form/DateRangeInput';

const FilterDrawer = ({ open, close, width, variant, filterOptions, applyFilters, resetFilters }) => {
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleOnChange = useCallback(
    (name, value) => {
      const temp = { ...appliedFilters };
      temp[name] = value ? value : undefined;
      setAppliedFilters({ ...temp });
    },
    [appliedFilters, setAppliedFilters]
  );

  const handleClose = () => {
    close();
  };

  const renderFilter = (filter) => {
    if (!filter) return null;
    switch (filter.type) {
      case 'text':
      case 'number':
      case 'email':
      case 'tel':
        return (
          <Input
            isClearable={true}
            onChange={(event) => handleOnChange(filter.name, event.target.value)}
            {...filter}
            value={appliedFilters[filter.name] || null}
          />
        );
      case 'select':
        return (
          <Select
            isClearable={true}
            clearValue={() => handleOnChange(filter.name, null)}
            onChange={(data) => handleOnChange(filter.name, data)}
            {...filter}
            value={appliedFilters[filter.name] || null}
          />
        );
      case 'daterange':
        return (
          <DateRangeInput
            isClearable={true}
            maxDate={true}
            onChange={(data) => handleOnChange(filter.name, data)}
            {...filter}
            value={appliedFilters[filter.name] || null}
          />
        );
      default:
        return null;
    }
  };

  const handleApplyFilters = () => {
    const temp = filterOptions.map((filter) => {
      if (appliedFilters[filter.name]) {
        filter.value = appliedFilters[filter.name];
      } else {
        filter.value = null;
      }
      return filter;
    });
    applyFilters(temp);
  };

  const handleResetFilters = () => {
    resetFilters();
  };

  useEffect(() => {
    if (!filterOptions) return null;
    const temp = {};
    for (let f of filterOptions) {
      if (f.value) {
        temp[f.name] = f.value;
      }
    }
    setAppliedFilters(temp);
  }, [filterOptions, open]);

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={() => handleClose()}
      variant={variant}
      sx={{
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' },
      }}
      className="filter-drawer"
    >
      <Box sx={{ overflow: 'auto', height: '100%' }}>
        <div className="d-flex align-items-center justify-content-start px-4 py-3 sticky-top filter-drawer__header">
          <IconButton icon={<BiArrowBack />} variant="outline-link" onClick={close} className="p-0 me-2" />
          <h6 className="mb-0">Filters</h6>
          <span className="ms-auto">
            <Button variant="outline-secondary" className={`px-3`} size="sm" onClick={() => handleResetFilters()}>
              Reset Filters
            </Button>
          </span>
        </div>

        <div className="px-4 py-4 filter-drawer__content">
          <Row>
            {filterOptions &&
              filterOptions.length > 0 &&
              filterOptions.map((filter, index) => {
                return (
                  <Col key={`filter-${index}`} xs={12}>
                    {renderFilter(filter)}
                  </Col>
                );
              })}

            <Col xs={8} className="mt-4 mb-2 mx-auto">
              <Button variant="secondary" className={`px-3 w-100`} onClick={handleApplyFilters}>
                Apply
              </Button>
            </Col>
          </Row>
        </div>
      </Box>
    </Drawer>
  );
};

FilterDrawer.propTypes = {
  filterOptions: PropTypes.array.isRequired,
  open: PropTypes.bool,
  close: PropTypes.func,
  width: PropTypes.number,
  variant: PropTypes.oneOf(['temporary', 'persistent', 'permanent']),
  applyFilters: PropTypes.func,
  resetFilters: PropTypes.func,
};

FilterDrawer.defaultProps = {
  open: false,
  close: () => null,
  width: 520,
  variant: 'temporary',
  applyFilters: () => null,
  resetFilters: () => null,
};

export default FilterDrawer;
