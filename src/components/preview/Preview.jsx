import React, { forwardRef, useState } from "react";

import "./preview.css";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";

const Preview = forwardRef(({ template, setTemplate, formData }, ref) => {
  const textColorStyle = {
    color: `#${formData?.textColor}` || "#000000",
  };
  return (
    <div className="preview">
      <div className="p-header">
        <div className="colors">
          <div className="red ball"></div>
          <div className="yellow ball"></div>
          <div className="green ball"></div>
        </div>
        <div className="sender-details">
          <div className="ff-lexend title">To: Your Recipient</div>
          <div className="ff-lexend title">
            Subject: Check out my new Email Signature
          </div>
        </div>
      </div>
      <div className="p-body" style={textColorStyle}>
        <div className="template" ref={ref}>
          {template === "template1" ? (
            <Template1 formData={formData}></Template1>
          ) : (
            <></>
          )}
          {template === "template2" ? (
            <Template2 formData={formData}></Template2>
          ) : (
            <></>
          )}
          {template === "template3" ? (
            <Template3 formData={formData}></Template3>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
});

export default Preview;
