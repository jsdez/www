import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h1 style={{ color: "#333" }}>Hello, {firstName}!</h1>
    <p>{message}</p>
    <p>Best regards,<br />Your Team</p>
  </div>
);
