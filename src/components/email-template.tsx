import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  fullName,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h1 style={{ color: "#333" }}>Hello, {fullName}!</h1>
    <p>{message}</p>
    <p>Best regards,<br />Jake Dennison | Founder @ NeoAutomate</p>
  </div>
);
