import React from "react";

interface WhapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WhapperProps) => {
  return <div style={wrapperStyle}>{children}</div>;
};

export default Wrapper;

const wrapperStyle = {
  maxWidth: "1280px",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
};
