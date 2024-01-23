import { Table } from "react-bootstrap";
import { BACKEND_URL } from "../../../services/constants";
import moment from "moment";

const DynamicTable = ({ data }) => {
  const flattenData = (data) => {
    const flattenedData = {};

    if (data && typeof data === "object") {
      Object.entries(data).forEach(([key, value]) => {
        if (key === "data" && typeof value === "object" && value !== null) {
          // Flatten the nested "data" object
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            if (typeof nestedValue === "object" && nestedValue !== null) {
              // Recursively flatten nested objects
              Object.entries(nestedValue).forEach(([subKey, subValue]) => {
                flattenedData[subKey] = subValue;
              });
            } else {
              flattenedData[nestedKey] = nestedValue;
            }
          });
        } else {
          // Assign non-object values directly
          flattenedData[key] = value;
        }
      });
    }

    return flattenedData;
  };

  // Flatten the data
  const flattenedData = flattenData(data);
  // Exclude keys from the table
  const excludedKeys = ["__v", "_id", "tableData"];

  // Filter keys based on exclusion
  const filteredKeys = Object.keys(flattenedData).filter(
    (key) => !excludedKeys.includes(key)
  );

  return (
    <Table striped bordered hover responsive="lg">
      <tbody>
        {filteredKeys.map((key) => (
          <tr key={key}>
            <th>
              {key.startsWith("createdAt")
                ? "Form Filling Date"
                : key.startsWith("Link")
                ? "Page"
                : key}
            </th>
            <td>
              {key.startsWith("File") ? (
                <a
                  href={BACKEND_URL + flattenedData[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BACKEND_URL + flattenedData[key]}
                </a>
              ) : key.startsWith("createdAt") ? (
                moment(flattenedData[key]).format("DD,MM, YYYY")
              ) : flattenedData[key] === true ? (
                "Accept"
              ) : flattenedData[key] === false ? (
                "Reject"
              ) : (
                flattenedData[key]
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicTable;
