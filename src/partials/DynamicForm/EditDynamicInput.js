import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useFieldArray } from "react-hook-form";
import Input from "../../components/Form/Input";
import Select from "../../components/Form/Select";

const EditDynamicInput = ({
  register,
  control,
  setValue,
  userData,
  reset,
  getInputTypeDetail,
}) => {
  const [inputType, setInputType] = useState(null);
  const InputTypeOptions = inputType?.map((item) => ({
    value: item.type,
    label: item.type,
  }));
  const [selectActiveValues, setSelectActiveValues] = useState([]);

  const fetchInputField = async () => {
    const result = await getInputTypeDetail();
    const inputTypeData = result?.data?.docs?.data;

    if (inputTypeData && userData) {
      // If userData exists, set the default values based on userData.type initially
      const defaultSelectValues = userData.map((item) => ({
        value: item.type,
        label: item.type,
      }));

      setSelectActiveValues(defaultSelectValues);
    } else {
      // If no userData, initialize with null values
      setSelectActiveValues(new Array(inputTypeData?.length || 0).fill(null));
    }

    // Set inputTypeData
    setInputType(inputTypeData);
  };

  useEffect(() => {
    fetchInputField();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "inputField",
  });

  const handleAddField = () => {
    append({
      type: "",
      label: "",
      placeholder: "",
      name: "",
      options: "",
    });
    // Initialize the selectActiveValue for the new field
    setSelectActiveValues((prevValues) => [...prevValues, null]);
  };

  const handleRemoveField = (index) => {
    remove(index);
    setSelectActiveValues((prevValues) => {
      const newValues = [...prevValues];
      newValues.splice(index, 1);
      return newValues;
    });
  };

  const handleChange = (value, index) => {
    setSelectActiveValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
    setValue(`inputField[${index}].type`, value?.value);
  };

  const handleOptionsChange = (event, index) => {
    const optionsString = event.target.value;
    setValue(
      `inputField[${index}].options`,
      optionsString.split(",").map((item) => item.trim())
    );
  };

  useEffect(() => {
    if (userData) {
      // Set initial values for fields and selectActiveValues based on userData
      const initialFields = userData.map((item) => ({
        type: item.type,
        label: item.label,
        placeholder: item.placeholder,
        name: item.name,
        options: item.options.join(","), // Convert options array to comma-separated string
      }));
      reset({
        inputField: initialFields,
      });
      setSelectActiveValues(new Array(initialFields.length).fill(null));
      // Set default values for Select based on userData
      initialFields.forEach((field, index) => {
        if (InputTypeOptions) {
          const selectedOption = InputTypeOptions.find(
            (option) => option.value === field.type
          );

          if (selectedOption) {
            setSelectActiveValues((prevValues) => {
              const newValues = [...prevValues];
              newValues[index] = selectedOption;
              return newValues;
            });
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Card>
      <Card.Header>Select Input Field</Card.Header>
      <Card.Body>
        {fields.map((field, index) => (
          <Row key={field.id}>
            <Col xs={12}>
              <div className="brandimage mb-2">Input Field Type</div>
              <Select
                options={InputTypeOptions}
                value={selectActiveValues[index]}
                onChange={(value) => handleChange(value, index)}
                placeHolder="Select Input Field Type"
              />
            </Col>
            <Col xs={12}>
              <Input
                type="text"
                id={`label-${index}`}
                name={`label[${index}]`}
                label={`${
                  selectActiveValues[index]?.value === "options"
                    ? "Select"
                    : "Input"
                } Field label`}
                defaultValue={userData[index]?.label || ""}
                {...register(`inputField[${index}].label`)}
              />
            </Col>
            {selectActiveValues[index]?.value !== "radio" &&
              selectActiveValues[index]?.value !== "options" &&
              selectActiveValues[index]?.value !== "checkbox" && (
                <Col xs={12}>
                  <Input
                    type="text"
                    id={`placeholder-${index}`}
                    name={`placeholder[${index}]`}
                    label={"Input Field Placeholder"}
                    defaultValue={userData[index]?.placeholder || ""}
                    {...register(`inputField[${index}].placeholder`)}
                  />
                </Col>
              )}
            <Col xs={12}>
              <Input
                type="text"
                id={`name-${index}`}
                name={`name[${index}]`}
                label={`${
                  selectActiveValues[index]?.value === "options"
                    ? "Select"
                    : "Input"
                } Field Name`}
                defaultValue={userData[index]?.name || ""}
                {...register(`inputField[${index}].name`)}
              />
            </Col>
            {selectActiveValues[index]?.value === "radio" && (
              <Col xs={12}>
                <Input
                  type="text"
                  id={`options-${index}`}
                  name={`options[${index}]`}
                  label={"Input Field Options (comma-separated)"}
                  defaultValue={userData[index]?.options?.join(",") || ""}
                  onChange={(event) => handleOptionsChange(event, index)}
                  {...register(`inputField[${index}].options`)}
                />
              </Col>
            )}
            {selectActiveValues[index]?.value === "options" && (
              <Col xs={12}>
                <Input
                  type="text"
                  id={`options-${index}`}
                  name={`options[${index}]`}
                  label={"Select Field Options (comma-separated)"}
                  defaultValue={userData[index]?.options?.join(",") || ""}
                  onChange={(event) => handleOptionsChange(event, index)}
                  {...register(`inputField[${index}].options`)}
                />
              </Col>
            )}
            <Col xs={12} className="mb-2">
              <Button
                type="button"
                variant="danger"
                onClick={() => handleRemoveField(index)}
              >
                Remove Field
              </Button>
            </Col>
          </Row>
        ))}
        <Col xs={12} className="mb-2">
          <Button type="button" onClick={handleAddField}>
            Add Field
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default EditDynamicInput;
