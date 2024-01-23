import DOMPurify from "dompurify";
import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const DisplayText = ({ htmlContent, preview, handlePreview }) => {
  const contentRef = useRef(null);
  const convertHtmlToPlainText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  useEffect(() => {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);
    contentRef.current.innerHTML = sanitizedHTML;
    const preTags = contentRef.current.querySelectorAll("pre");
    preTags.forEach((preTag) => {
      const textContent = convertHtmlToPlainText(preTag.innerHTML);
      preTag.innerHTML = textContent;
      const divTag = document.createElement("div");
      divTag.innerHTML = preTag.innerHTML;
      preTag.parentNode.replaceChild(divTag, preTag);
    });
  }, [htmlContent]);

  return (
    <div className="position-relative">
      {preview && (
        <div className="w-100 d-flex justify-content-end mb-2">
          <Button variant="primary" onClick={() => handlePreview()}>
            <RxCross2 />
          </Button>
        </div>
      )}
      <div
        ref={contentRef}
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          border: "1px solid grey",
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
};

export default DisplayText;
