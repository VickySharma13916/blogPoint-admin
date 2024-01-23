import MaterialTable from "@material-table/core";
import exportFromJSON from "export-from-json";
import PropTypes from "prop-types";
import React, { createRef, forwardRef, useEffect, useState } from "react";
import {
  MdArrowUpward,
  MdChevronLeft,
  MdChevronRight,
  MdDownload,
  MdFilterAlt,
  MdFirstPage,
  MdLastPage,
  MdRefresh,
} from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { getDataTableQueryParams } from "../../utils/index";
import IconButton from "../IconButton";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <MdFirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <MdLastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <MdChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <MdChevronLeft {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => <MdArrowUpward {...props} ref={ref} />),
};

const DataTable = ({
  loading,
  columns,
  actions,
  components,
  onRowClick,
  options,
  selectedRow,
  getList,
  search,
  downloadcsv,
  downloadExcel,
  filters,
  filterOptions,
  data,
  setFilters,
  resetFilters,
  refresh,
  resetBtn,
}) => {
  const tableRef = createRef();
  const [reset, setReset] = useState(uuidv4());
  const [openFilters, setOpenFilters] = useState(false);
  const tableProps = {
    isLoading: loading,
    icons: tableIcons,
    style: {
      boxShadow: "none",
    },
    localization: {
      toolbar: {
        searchTooltip: "Search",
        searchPlaceholder: "Search",
      },
    },
    options: {
      showTitle: false,
      search: true,
      toolbar: true,
      filtering: openFilters,
      draggable: false,
      actionsColumnIndex: -1,
      pageSize: 10,
      emptyRowsWhenPaging: false, // To avoid of having empty rows
      pageSizeOptions: [10, 30, 50, 100, 500],
      ...options,
    },
    columns: columns,
    data: data
      ? data
      : (query) =>
          new Promise(async (resolve, reject) => {
            try {
              let result = await getList(getDataTableQueryParams(query));
              if (!result.data) {
                return reject();
              }
              return resolve({
                data:
                  result.data.docs !== undefined
                    ? result.data.docs
                    : result.data,
                page: result.data.page !== undefined ? result.data.page - 1 : 0,
                totalCount:
                  result.data.totalDocs !== undefined
                    ? result.data.totalDocs
                    : 0, // this is the total count of rows or documents
              });
            } catch (err) {
              return reject(err);
            }
          }),
    actions: actions,
    onRowClick: onRowClick,
  };

  if (components) {
    tableProps.components = components;
  }

  if (onRowClick) {
    tableProps.options = {
      ...tableProps.options,
      rowStyle: (rowData) => ({
        backgroundColor:
          selectedRow && selectedRow === rowData.id ? "#f5f5f5" : "#FFF",
      }),
      onRowClick: onRowClick,
    };
  }

  const handleDownloadCSV = () => {
    const fileName = "CSVformat";
    const exportType = exportFromJSON.types.csv;
    const newData = data.map(({ data, ...rest }) => {
      const transformedData = data
        ? Object.values(data).reduce((acc, obj) => ({ ...acc, ...obj }), {})
        : {};
      const transformedObject = {
        _id: rest._id,
        Link: rest.Link,
        ...transformedData,
      };
      return data ? transformedObject : rest;
    });
    exportFromJSON({ data: newData, fileName, exportType });
  };

  const handleDownloadXLS = () => {
    const fileName = "ExcelFormat";
    const exportType = exportFromJSON.types.xls;
    const newData = data.map(({ data, ...rest }) => {
      const transformedData = data
        ? Object.values(data).reduce((acc, obj) => ({ ...acc, ...obj }), {})
        : {};
      const transformedObject = {
        _id: rest._id,
        Link: rest.Link,
        ...transformedData,
      };
      return data ? transformedObject : rest;
    });
    exportFromJSON({ data: newData, fileName, exportType });
  };

  const handleReset = () => {
    if (onRowClick) {
      onRowClick(null);
    }
    resetFilters();
    setReset(uuidv4());
  };

  useEffect(() => {
    if (refresh) {
      handleReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <>
      <div className="mb-3 d-flex flex-lg-row flex-column position-relative table-toolbar">
        <span className="d-flex flex-wrap zindex-dropdown end-0 gap-2 gap-lg-3 align-items-center justify-content-end ms-auto">
          {filters && (
            <IconButton
              icon={<MdFilterAlt />}
              variant="outline-default"
              size="sm"
              onClick={() => setOpenFilters(!openFilters)}
              disabled={loading}
            >
              Filters
            </IconButton>
          )}

          {resetBtn && (
            <IconButton
              icon={<MdRefresh />}
              variant="outline-default"
              size="sm"
              onClick={handleReset}
              disabled={loading}
            >
              Reset
            </IconButton>
          )}
          {downloadcsv && (
            <IconButton
              icon={<MdDownload />}
              variant="outline-default"
              size="sm"
              onClick={handleDownloadCSV}
              disabled={loading}
            >
              CSV
            </IconButton>
          )}
          {downloadExcel && (
            <IconButton
              icon={<MdDownload />}
              variant="outline-default"
              size="sm"
              onClick={handleDownloadXLS}
              disabled={loading}
            >
              Excel
            </IconButton>
          )}
        </span>
      </div>

      <MaterialTable
        key={`data-table-${reset}`}
        tableRef={tableRef}
        {...tableProps}
      />
    </>
  );
};

DataTable.propTypes = {
  loading: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  components: PropTypes.any,
  onRowClick: PropTypes.any,
  options: PropTypes.object,
  selectedRow: PropTypes.string,
  getList: PropTypes.func.isRequired,
  search: PropTypes.bool,
  filters: PropTypes.bool,
  filterOptions: PropTypes.array,
  setFilters: PropTypes.func,
  resetFilters: PropTypes.func,
  refresh: PropTypes.string,
  resetBtn: PropTypes.bool,
};

DataTable.defaultProps = {
  loading: false,
  actions: [],
  components: null,
  onRowClick: null,
  options: {},
  selectedRow: null,
  search: true,
  filters: false,
  filterOptions: [],
  setFilters: () => null,
  resetFilters: () => null,
  refresh: null,
  resetBtn: true,
};

export default DataTable;
