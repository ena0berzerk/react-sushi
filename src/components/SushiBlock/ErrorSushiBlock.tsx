import React from "react";

const errorSushiContainer = {
  textAlign: "center",
  width: "800px",
  padding: "50px 0",
  margin: "0 auto",
} as React.CSSProperties;

const errorH3 = {
  marginBottom: "14px",
  fontSize: "24px",
} as React.CSSProperties;

const errorP = {
  marginBottom: "8px",
} as React.CSSProperties;

const ErrorSushiBlock: React.FC = () => {
  return (
    <div style={errorSushiContainer}>
      <h3 style={errorH3}>Суши не найдены 🙁</h3>
      <p style={errorP}>
        Что-то перестало работать и нам очень жаль. Пожалуйста, попробуйте
        позже.
      </p>
      <p>Наши специалисты уже работают над устранением проблемы</p>
    </div>
  );
};

export default ErrorSushiBlock;
