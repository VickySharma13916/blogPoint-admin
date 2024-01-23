import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { useHistory, Link } from "react-router-dom";
import Page from "../../components/Page";
import useWindowSize from "../../hooks/UseWindowSize";
import Select from "../Form/Select";

const InputShow = () => {
  const history = useHistory();
  const userData = history.location.state?.data;
  const inputForm = userData?.inputField;
  const isMobile = useWindowSize();
  const filterInput = inputForm?.filter((item) => item.type === "options");
  const activeOptions = filterInput?.flatMap((status) =>
    status.options.map((option) => ({
      value: option,
      label: option,
    }))
  );
  const [selectActiveValue, setSelectActiveValue] = useState(null);
  return (
    <Page>
      <Card
        border="light"
        className={`w-100 mx-auto px-4 pt-3 pb-4 my-5 position-relative profile__edit ${
          isMobile && "p-0"
        }`}
      >
        <Card.Header className="d-flex align-items-center">
          <Link
            to="/dynamicForm"
            className="btn btn-link px-0 me-3"
            title="Back"
          >
            <BiArrowBack size={24} />
          </Link>
          Dynamic Input Detail Form -- (Page)
          <br />( {userData?.inputLink} )
        </Card.Header>
        <Card.Body>
          <div
            className={`${
              isMobile ? "my-3" : "my-2"
            } d-flex flex-column justify-content-end`}
          >
            {inputForm.map((field, index) => (
              <div
                key={index}
                className=" flex flex-col justify-start items-start gap-4"
              >
                {field.type === "text" ? (
                  <div className="d-flex mt-2 flex-column gap-2">
                    <label
                      style={{
                        position: "relative",
                        left: 0,
                        top: 0,
                        padding: 0,
                        transform: "translate3d(0,0,0)",
                      }}
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type="text"
                      readOnly={true}
                      value={field.placeholder}
                      placeholder={field.placeholder}
                    />
                  </div>
                ) : field.type === "email" ? (
                  <>
                    <div className="d-flex mt-2 flex-column gap-2">
                      <label
                        style={{
                          position: "relative",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        readOnly={true}
                        value={field.placeholder}
                        type="email"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </>
                ) : field.type === "number" ? (
                  <>
                    <div className="d-flex mt-2 flex-column gap-2">
                      <label
                        style={{
                          position: "relative",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        value={field.placeholder}
                        readOnly={true}
                        type="text"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </>
                ) : field.type === "file" ? (
                  <>
                    <div className="d-flex mt-2 flex-column gap-2">
                      <label
                        style={{
                          position: "relative",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        readOnly={true}
                        type="file"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </>
                ) : field.type === "date" ? (
                  <>
                    <div className="d-flex mt-2 flex-column gap-2">
                      <label
                        style={{
                          position: "relative",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        readOnly={true}
                        type="date"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </>
                ) : field.type === "checkbox" ? (
                  <div className="d-flex mt-2 gap-2 align-items-center">
                    <input id={field.name} type="checkbox" className="w-auto" />
                    <div className="d-flex">
                      <label
                        style={{
                          position: "relative",
                          color: "#121212",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                    </div>
                  </div>
                ) : field.type === "password" ? (
                  <>
                    <div className="d-flex mt-2 flex-column gap-2">
                      <label
                        style={{
                          position: "relative",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        value={field.placeholder}
                        readOnly={true}
                        type="text"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </>
                ) : field.type === "radio" ? (
                  <>
                    <div className="d-flex mt-2 flex-column justify-item-start gap-2 align-items-start">
                      <label
                        style={{
                          position: "relative",
                          color: "#121212",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      {field.options.map((option) => (
                        <div
                          key={option}
                          className="d-flex gap-2 align-items-center"
                        >
                          <input
                            type="radio"
                            className="mr-2"
                            id={`${field.name}-${option}`}
                            value={option}
                          />
                          <label
                            style={{
                              position: "relative",
                              color: "#121212",
                              left: 0,
                              top: 0,
                              padding: 0,
                              transform: "translate3d(0,0,0)",
                            }}
                            htmlFor={`${field.name}-${option}`}
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </>
                ) : field.type === "options" ? (
                  <>
                    <div className="d-flex mt-2 flex-column justify-item-start gap-2 align-items-start">
                      <label
                        style={{
                          position: "relative",
                          color: "#121212",
                          left: 0,
                          top: 0,
                          padding: 0,
                          transform: "translate3d(0,0,0)",
                        }}
                        htmlFor={field.name}
                      >
                        {field.label}
                      </label>
                      <Select
                        className="mr-2"
                        options={activeOptions}
                        value={selectActiveValue}
                        onChange={setSelectActiveValue}
                        id={`${field.name}`}
                        placeholder={field.name}
                      />
                    </div>
                  </>
                ) : (
                  <div>Unsupported field type</div>
                )}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Page>
  );
};

export default InputShow;
