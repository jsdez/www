import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  fullName,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e3dff2",
      color: "#000",
      padding: "20px",
      boxSizing: "border-box",
      border: "2px solid #000",
      borderRadius: "5px",
    }}
  >
    <h1
      style={{
        fontWeight: "700",
        fontSize: "24px",
        color: "#5E2EE1",
        marginBottom: "20px",
        textTransform: "uppercase",
        borderBottom: "2px solid #000",
        paddingBottom: "10px",
      }}
    >
      Hello, {fullName}!
    </h1>
    <p
      style={{
        fontSize: "16px",
        lineHeight: "1.5",
        marginBottom: "20px",
        color: "#000",
      }}
    >
      {message}
    </p>
    <p
      style={{
        fontSize: "16px",
        fontWeight: "500",
        marginBottom: "20px",
        color: "#000",
      }}
    >
      Best regards,
      <br />
      Your Team
    </p>

    <div
      style={{
        borderTop: "2px solid #000",
        paddingTop: "10px",
        marginTop: "20px",
        fontSize: "14px",
        color: "#5E2EE1",
      }}
    >
      <strong>Original Message:</strong>
      <p
        style={{
          marginTop: "10px",
          fontStyle: "italic",
          borderLeft: "4px solid #5E2EE1",
          paddingLeft: "10px",
          marginBottom: "10px",
        }}
      >
        "{message}"
      </p>
    </div>
  </div>
);
