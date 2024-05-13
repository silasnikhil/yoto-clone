export const hoverStyle = {
  textDecoration: "none",
  position: "relative",
  "::after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: "-5px",
    width: "100%",
    borderBottom: "2px solid white",
  },
};
