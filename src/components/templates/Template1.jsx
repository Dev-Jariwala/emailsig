import React from "react";

const Template1 = ({ formData }) => {
  const textColorStyle = {
    color: `#${formData?.textColor}` || "#000000",
  };
  const themeColorStyle = {
    color:
      formData.themeColor?.length < 3 ? "#00000" : `#${formData?.themeColor}`,
  };
  const linkColorStyle = {
    color: `#${formData?.linkColor}` || "#000000",
  };
  const borderLeftStyle = {
    borderLeft:
      formData.themeColor?.length < 3
        ? "1px solid #000000"
        : `1px solid #${formData?.themeColor}`,
  };
  const borderTopStyle = {
    borderTop:
      formData.themeColor?.length < 3
        ? "1px solid #000000"
        : `1px solid #${formData?.themeColor}`,
  };
  return (
    <table
      style={{
        padding: "10px",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 15px",
            }}
          >
            {formData.imgURL && (
              <div>
                <img
                  src={formData.imgURL}
                  alt="profile"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                />
              </div>
            )}
            {(formData.firstname ||
              formData.lastname ||
              formData.jobtitle ||
              formData.department ||
              formData.companyname) && (
              <div>
                {(formData.firstname || formData.lastname) && (
                  <h2>
                    {formData.firstname} {formData.lastname}
                  </h2>
                )}
                {formData.jobtitle && <div>{formData.jobtitle}</div>}
                {(formData.department || formData.companyname) && (
                  <div>
                    {formData.department} <span>&nbsp;</span>
                    {formData.companyname === "" || formData.department === ""
                      ? ""
                      : "|"}{" "}
                    <span>&nbsp;</span>
                    {formData.companyname}
                  </div>
                )}
              </div>
            )}
          </td>
          {(formData.mobilenumber ||
            formData.officenumber ||
            formData.email ||
            formData.address ||
            formData.websiteurl) && (
            <td
              style={{
                padding: "10px 15px",
                ...borderLeftStyle,
              }}
            >
              {(formData.mobilenumber || formData.officenumber) && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span style={{ ...themeColorStyle, marginRight: "10px" }}>
                    <img
                      width="16"
                      height="16"
                      src={`https://img.icons8.com/ios-filled/48/${formData.themeColor}/phone.png`}
                      alt="phone"
                    />
                  </span>
                  {formData.mobilenumber} <span>&nbsp;</span>
                  {formData.mobilenumber === "" || formData.officenumber === ""
                    ? ""
                    : "|"}
                  <span>&nbsp;</span>
                  {formData.officenumber}
                </div>
              )}
              {formData.email && formData.email !== "" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span style={{ ...themeColorStyle, marginRight: "10px" }}>
                    <img
                      width="16"
                      height="16"
                      src={`https://img.icons8.com/fluency-systems-filled/48/${formData.themeColor}/new-post.png`}
                      alt="new-post"
                    />
                  </span>
                  {formData.email}
                </div>
              )}
              {formData.websiteurl && formData.websiteurl !== "" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span style={{ ...themeColorStyle, marginRight: "10px" }}>
                    <img
                      width="16"
                      height="16"
                      src={`https://img.icons8.com/metro/52/${formData.themeColor}/link.png`}
                      alt="link"
                    />
                  </span>
                  <a style={textColorStyle} href={formData.websiteurl}>
                    {formData.websiteurl}
                  </a>
                </div>
              )}
              {formData.address && formData.address !== "" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span style={{ ...themeColorStyle, marginRight: "10px" }}>
                    <img
                      width="16"
                      height="16"
                      src={`https://img.icons8.com/ios-filled/50/${formData.themeColor}/marker.png`}
                      alt="marker"
                    />
                  </span>
                  {formData.address}
                </div>
              )}
            </td>
          )}
        </tr>
        {(formData.facebook ||
          formData.instagram ||
          formData.linkedin ||
          formData.twitter) && (
          <>
            <tr style={{ height: "20px" }}></tr>
            <tr>
              <td
                colSpan="2"
                style={{
                  padding: "15px 0",
                  ...borderTopStyle,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {formData.facebook && formData.facebook !== "" && (
                    <div style={{ margin: "0 10px" }}>
                      <a href={formData.facebook} style={{ ...linkColorStyle }}>
                        <img
                          width="24"
                          height="24"
                          src={`https://img.icons8.com/ios-filled/48/${formData.linkColor}/facebook.png`}
                          alt="marker"
                        />
                      </a>
                    </div>
                  )}
                  {formData.instagram && formData.instagram !== "" && (
                    <div style={{ margin: "0 10px" }}>
                      <a
                        href={formData.instagram}
                        style={{ ...linkColorStyle }}
                      >
                        <img
                          width="24"
                          height="24"
                          src={`https://img.icons8.com/ios-filled/48/${formData.linkColor}/instagram.png`}
                          alt="marker"
                        />
                      </a>
                    </div>
                  )}
                  {formData.twitter && formData.twitter !== "" && (
                    <div style={{ margin: "0 10px" }}>
                      <a href={formData.twitter} style={{ ...linkColorStyle }}>
                        <img
                          width="24"
                          height="24"
                          src={`https://img.icons8.com/ios-filled/48/${formData.linkColor}/twitter.png`}
                          alt="marker"
                        />
                      </a>
                    </div>
                  )}
                  {formData.linkedin && formData.linkedin !== "" && (
                    <div style={{ margin: "0 10px" }}>
                      <a href={formData.linkedin} style={{ ...linkColorStyle }}>
                        <img
                          width="24"
                          height="24"
                          src={`https://img.icons8.com/ios-filled/48/${formData.linkColor}/linkedin.png`}
                          alt="marker"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default Template1;
