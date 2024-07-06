import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  type: "title" | "subtitle" | "standard";
  color?: string;
  size?: number;
  width?: number;
  align?: "start" | "center" | "end";
}

const Typography = ({
  children,
  type,
  color = "white",
  size = 18,
  width,
  align = "start",
}: TypographyProps) => {
  return (
    <>
      {type === "title" && (
        <h1
          style={{
            color: color,
            textTransform: "uppercase",
            fontSize: size,
            textAlign: align,
          }}
        >
          {children}
        </h1>
      )}
      {type === "subtitle" && (
        <h3 style={{ color: color, fontSize: size }}>{children}</h3>
      )}
      {type === "standard" && (
        <p style={{ color: color, fontSize: size, textAlign:"justify", textAlignLast: "left" }}>{children}</p>
      )}
    </>
  );
};

export default Typography;
