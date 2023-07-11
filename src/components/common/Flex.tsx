type FlexProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
};

export const Flex = ({ children, ...props }: FlexProps) => (
  <div
    style={{
      display: "flex",
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const FlexColumn = ({ children, ...props }: FlexProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const FlexCenter = ({ children, ...props }: FlexProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};
