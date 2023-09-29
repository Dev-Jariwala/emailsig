import React, { useRef, useState } from "react";
import "./App.css";
import Preview from "./components/preview/Preview";

function App() {
  const [formFields, setFormFields] = useState("templates");
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Smit",
    jobtitle: "Marketer",
    department: "Marketing",
    companyname: "Reliance",
    officenumber: "1112223333",
    mobilenumber: "1112223333",
    websiteurl: "https://www.google.com",
    email: "john@smith.com",
    address: "123 Main St, Anytown, CA, 12345",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    imgURL: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    textColor: "000000",
    themeColor: "F2547F",
    linkColor: "6A78D1",
  });
  const [template, setTemplate] = useState("template1");
  const clearAllData = () => {
    setFormData({
      firstname: "",
      lastname: "",
      jobtitle: "",
      department: "",
      companyname: "",
      officenumber: "",
      mobilenumber: "",
      websiteurl: "",
      email: "",
      address: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      instagram: "",
      imgURL: "",
      textColor: "",
      themeColor: "",
      linkColor: "",
    });
  };
  const tempBodyRef = useRef(null); // Reference to the template element

  const copyEmailSignature = (event) => {
    event.preventDefault();
    let element = tempBodyRef.current;
    console.log(element);

    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNode(element);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      selection.removeAllRanges();

      alert("Signature Copied");
    } catch (exception) {
      alert(exception);
    }
  };
  const copySourceCode = (event) => {
    event.preventDefault();
    const componentCode = tempBodyRef.current.outerHTML;
    const textArea = document.createElement("textarea");
    textArea.value = componentCode;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the textarea content
    textArea.select();
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textArea);

    alert("Source Code Copied");
  };

  return (
    <>
      <div className="container">
        <form className="info-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-header">
            <button
              className={`ff-inclusiveSans btn ${
                formFields === "templates" ? "setedFormFields" : ""
              }`}
              onClick={() => setFormFields("templates")}
            >
              <i className="fa-solid fa-store"></i>
            </button>
            <button
              className={`ff-inclusiveSans btn ${
                formFields === "write" ? "setedFormFields" : ""
              }`}
              onClick={() => setFormFields("write")}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className={`ff-inclusiveSans btn ${
                formFields === "color" ? "setedFormFields" : ""
              }`}
              onClick={() => setFormFields("color")}
            >
              <i className="fa-solid fa-droplet"></i>
            </button>
            <button
              className={`ff-inclusiveSans btn ${
                formFields === "image" ? "setedFormFields" : ""
              }`}
              onClick={() => setFormFields("image")}
            >
              <i className="fa-solid fa-images"></i>
            </button>
          </div>
          <div className="form-body">
            {formFields === "write" && (
              <div className="pen">
                <div className="ff-inclusiveSans f-section">
                  Enter your signature Details :
                </div>
                <div className="input-field">
                  <label htmlFor="firstname" className="if-label ff-moli">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="John"
                    className="if-input ff-moli"
                    value={formData.firstname}
                    onChange={(e) => {
                      setFormData({ ...formData, firstname: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="lastname" className="if-label ff-moli">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Smit"
                    className="if-input ff-moli"
                    value={formData.lastname}
                    onChange={(e) => {
                      setFormData({ ...formData, lastname: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="jobtitle" className="if-label ff-moli">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobtitle"
                    placeholder="Marketer"
                    className="if-input ff-moli"
                    value={formData.jobtitle}
                    onChange={(e) => {
                      setFormData({ ...formData, jobtitle: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="department" className="if-label ff-moli">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    placeholder="Marketing"
                    className="if-input ff-moli"
                    value={formData.department}
                    onChange={(e) => {
                      setFormData({ ...formData, department: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="companyname" className="if-label ff-moli">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    placeholder="Reliance"
                    className="if-input ff-moli"
                    value={formData.companyname}
                    onChange={(e) => {
                      setFormData({ ...formData, companyname: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="officenumber" className="if-label ff-moli">
                    Office Number
                  </label>
                  <input
                    type="text"
                    id="officenumber"
                    placeholder="111 222 3333"
                    className="if-input ff-moli"
                    value={formData.officenumber}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        officenumber: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="mobilenumber" className="if-label ff-moli">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobilenumber"
                    placeholder="111 222 3333"
                    className="if-input ff-moli"
                    value={formData.mobilenumber}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        mobilenumber: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="websiteurl" className="if-label ff-moli">
                    Website URL
                  </label>
                  <input
                    type="text"
                    id="websiteurl"
                    placeholder="www.relience.com"
                    className="if-input ff-moli"
                    value={formData.websiteurl}
                    onChange={(e) => {
                      setFormData({ ...formData, websiteurl: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="email" className="if-label ff-moli">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="john@smit.com"
                    className="if-input ff-moli"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="address" className="if-label ff-moli">
                    Address
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    placeholder="Address"
                    className="if-input ff-moli fixed-width"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                    }}
                  />
                </div>
                <div className="ff-inclusiveSans f-section">
                  Enter your social links :
                </div>
                <div className="input-field">
                  <label htmlFor="linkedin" className="if-label ff-moli">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    placeholder="https://www.linkedin.com"
                    className="if-input ff-moli"
                    value={formData.linkedin}
                    onChange={(e) => {
                      setFormData({ ...formData, linkedin: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="facebook" className="if-label ff-moli">
                    Facebook
                  </label>
                  <input
                    type="text"
                    id="facebook"
                    placeholder="https://www.facebook.com"
                    className="if-input ff-moli"
                    value={formData.facebook}
                    onChange={(e) => {
                      setFormData({ ...formData, facebook: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="twitter" className="if-label ff-moli">
                    Twitter
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    placeholder="https://www.twitter.com"
                    className="if-input ff-moli"
                    value={formData.twitter}
                    onChange={(e) => {
                      setFormData({ ...formData, twitter: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="instagram" className="if-label ff-moli">
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    placeholder="https://www.instagram.com"
                    className="if-input ff-moli"
                    value={formData.instagram}
                    onChange={(e) => {
                      setFormData({ ...formData, instagram: e.target.value });
                    }}
                  />
                </div>
              </div>
            )}
            {formFields === "templates" && (
              <div className="templates-buttons">
                <h2 className="ff-inclusiveSans">Templates : </h2>
                <div
                  className={`temp-button ${
                    template === "template1" ? "opc50" : ""
                  }`}
                  onClick={() => setTemplate("template1")}
                >
                  <img
                    className={` ${
                      template === "template1" ? "t-img" : "tn-img"
                    }`}
                    src="img/template1.png"
                    
                    alt="temp1"
                  />
                  <h3 className="ff-moli">Template 1</h3>
                </div>
                <div
                  className={`temp-button ${
                    template === "template2" ? "opc50" : ""
                  }`}
                  onClick={() => setTemplate("template2")}
                >
                  <img
                    className={` ${
                      template === "template2" ? "t-img" : "tn-img"
                    }`}
                    src="img/template2.png"
                    
                    alt="temp1"
                  />
                  <h3 className="ff-moli">Template 2</h3>
                </div>
              </div>
            )}
            {formFields === "color" && (
              <div className="color">
                <div className="input-field">
                  <label htmlFor="themeColor" className="if-label ff-moli">
                    Theme Color
                  </label>
                  <input
                    type="text"
                    id="themeColor"
                    placeholder={`F2547F`}
                    className="if-input ff-moli"
                    value={formData.themeColor}
                    onChange={(e) => {
                      setFormData({ ...formData, themeColor: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="textColor" className="if-label ff-moli">
                    Text Color
                  </label>
                  <input
                    type="text"
                    id="textColor"
                    placeholder={`00000`}
                    className="if-input ff-moli"
                    value={formData.textColor}
                    onChange={(e) => {
                      setFormData({ ...formData, textColor: e.target.value });
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="linkColor" className="if-label ff-moli">
                    Link Color
                  </label>
                  <input
                    type="text"
                    id="linkColor"
                    placeholder={`6A78D1`}
                    className="if-input ff-moli"
                    value={formData.linkColor}
                    onChange={(e) => {
                      setFormData({ ...formData, linkColor: e.target.value });
                    }}
                  />
                </div>
              </div>
            )}
            {formFields === "image" && (
              <div className="image">
                <div className="input-field">
                  <label htmlFor="imgURL" className="if-label ff-moli">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="imgURL"
                    placeholder="image url"
                    className="if-input ff-moli"
                    value={formData.imgURL}
                    onChange={(e) => {
                      setFormData({ ...formData, imgURL: e.target.value });
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
        <div className="email-container">
          <Preview
            template={template}
            setTemplate={setTemplate}
            formData={formData}
            ref={tempBodyRef}
          />{" "}
          {/* Pass the ref */}
          <div className="buttons">
            <button
              className="create ff-lexend"
              onClick={(event) => copyEmailSignature(event)}
            >
              Copy Signature
            </button>
            <button
              className="create ff-lexend"
              onClick={(event) => copySourceCode(event)}
            >
              Copy Source Code
            </button>
            <button className="create ff-lexend" onClick={clearAllData}>
              Clear All Data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
