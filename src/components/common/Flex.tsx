type FlexProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  dataTestId?: string;
};

export const Flex = ({ children, dataTestId, ...props }: FlexProps) => (
  <div
    data-testid={dataTestId}
    style={{
      display: "flex",
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const FlexColumn = ({ children, dataTestId, ...props }: FlexProps) => (
  <div
    data-testid={dataTestId}
    style={{
      display: "flex",
      flexDirection: "column",
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const FlexCenter = ({ children, dataTestId, ...props }: FlexProps) => {
  return (
    <div
      data-testid={dataTestId}
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
