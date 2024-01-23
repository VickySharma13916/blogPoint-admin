import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { formats, modules } from "../EditorToolbar";
const Editor = ({ content, setContent, defaultValue, placeholder }) => {
  const handleChange = (html) => {
    setContent(html);
  };

  return (
    <div className="react-quill">
      <EditorToolbar toolbarId={"t1"} />
      <ReactQuill
        theme="snow"
        value={content}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules("t1")}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
