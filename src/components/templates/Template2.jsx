import React from "react";

const Template2 = ({ formData }) => {
  const textColorStyle = {
    color: `#${formData?.textColor || "000000"}`,
  };
  const themeColorStyle = {
    color:
      formData?.themeColor?.length < 3 ? `#00000` : `#${formData?.themeColor}`,
  };
  const linkColorStyle = {
    color: `#${formData?.linkColor || "000000"}`,
  };
  const borderTopStyle = {
    borderTop:
      formData?.themeColor?.length < 3
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
              //   flexDirection: "column",
              padding: "10px 15px",
            }}
          >
            <div
              style={{
                marginBottom: "",
                textAlign: "center",
                maxWidth: "350px",
              }}
            >
              {formData?.imgURL && (
                <div>
                  <img
                    src={formData?.imgURL}
                    alt="profile"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      marginBottom: "5px",
                    }}
                  />
                </div>
              )}
              {(formData?.firstname ||
                formData?.lastname ||
                formData?.jobtitle ||
                formData?.department ||
                formData?.companyname) && (
                <div style={{ textAlign: "center", maxWidth: "350px" }}>
                  {(formData?.firstname || formData?.lastname) && (
                    <h2>
                      {formData?.firstname} {formData?.lastname}
                    </h2>
                  )}
                  {formData?.jobtitle && <div>{formData?.jobtitle}</div>}
                  {(formData?.department || formData?.companyname) && (
                    <div>
                      {formData?.department} <span>&nbsp;</span>
                      {formData?.companyname === "" ||
                      formData?.department === ""
                        ? ""
                        : "|"}{" "}
                      <span>&nbsp;</span>
                      {formData?.companyname}
                    </div>
                  )}
                </div>
              )}
              {(formData?.mobilenumber ||
                formData?.officenumber ||
                formData?.email ||
                formData?.address ||
                formData?.websiteurl) && (
                <div
                  style={{
                    padding: "10px 15px 0",
                    ...borderTopStyle,
                    marginTop: "15px",
                    maxWidth: "350px",
                    textAlign: "left",
                  }}
                >
                  {(formData?.mobilenumber || formData?.officenumber) && (
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
                          src={`https://img.icons8.com/ios-filled/48/${
                            formData?.themeColor || "000000"
                          }/phone.png`}
                          alt="phone"
                        />
                      </span>
                      {formData?.mobilenumber} <span>&nbsp;</span>
                      {formData?.mobilenumber === "" ||
                      formData?.officenumber === ""
                        ? ""
                        : "|"}
                      <span>&nbsp;</span>
                      {formData?.officenumber}
                    </div>
                  )}
                  {formData?.email && formData?.email !== "" && (
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
                          src={`https://img.icons8.com/fluency-systems-filled/48/${
                            formData?.themeColor || "000000"
                          }/new-post.png`}
                          alt="new-post"
                        />
                      </span>
                      {formData?.email}
                    </div>
                  )}
                  {formData?.websiteurl && formData?.websiteurl !== "" && (
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
                          src={`https://img.icons8.com/metro/52/${
                            formData?.themeColor || "000000"
                          }/link.png`}
                          alt="link"
                        />
                      </span>
                      <a style={textColorStyle} href={formData?.websiteurl}>
                        {formData?.websiteurl}
                      </a>
                    </div>
                  )}
                  {formData?.address && formData?.address !== "" && (
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
                          src={`https://img.icons8.com/ios-filled/50/${
                            formData?.themeColor || "000000"
                          }/marker.png`}
                          alt="marker"
                        />
                      </span>
                      {formData?.address}
                    </div>
                  )}
                </div>
              )}
            </div>
          </td>
        </tr>
        {(formData?.facebook ||
          formData?.instagram ||
          formData?.linkedin ||
          formData?.twitter) && (
          <tr>
            <td
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
                  maxWidth: "350px",
                }}
              >
                {formData?.facebook && formData?.facebook !== "" && (
                  <div style={{ margin: "0 10px" }}>
                    <a href={formData?.facebook} style={{ ...linkColorStyle }}>
                      <img
                        width="24"
                        height="24"
                        src={`https://img.icons8.com/ios-filled/48/${
                          formData?.linkColor || "000000"
                        }/facebook.png`}
                        alt="marker"
                      />
                    </a>
                  </div>
                )}
                {formData?.instagram && formData?.instagram !== "" && (
                  <div style={{ margin: "0 10px" }}>
                    <a href={formData?.instagram} style={{ ...linkColorStyle }}>
                      <img
                        width="24"
                        height="24"
                        src={`https://img.icons8.com/ios-filled/48/${
                          formData?.linkColor || "000000"
                        }/instagram.png`}
                        alt="marker"
                      />
                    </a>
                  </div>
                )}
                {formData?.twitter && formData?.twitter !== "" && (
                  <div style={{ margin: "0 10px" }}>
                    <a href={formData?.twitter} style={{ ...linkColorStyle }}>
                      <img
                        width="24"
                        height="24"
                        src={`https://img.icons8.com/ios-filled/48/${
                          formData?.linkColor || "000000"
                        }/twitter.png`}
                        alt="marker"
                      />
                    </a>
                  </div>
                )}
                {formData?.linkedin && formData?.linkedin !== "" && (
                  <div style={{ margin: "0 10px" }}>
                    <a href={formData?.linkedin} style={{ ...linkColorStyle }}>
                      <img
                        width="24"
                        height="24"
                        src={`https://img.icons8.com/ios-filled/48/${
                          formData?.linkColor || "000000"
                        }/linkedin.png`}
                        alt="marker"
                      />
                    </a>
                  </div>
                )}
              </div>
            </td>
          </tr>
          )}
        
      </tbody>
    </table>
  );
};

export default Template2;
