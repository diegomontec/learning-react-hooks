export const paperStyles = {
  p: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #ddd",
  transition: "0.3s",
  width: { xs: "100%", sm: "60%", md: "30%" },
  height: "auto",
  "&:hover": {
    boxShadow: 4,
    borderColor: "black",
  },
};

export const titleStyles = {
  fontWeight: "bold",
};

export const descriptionStyles = {
  flexGrow: 1,
  color: "text.secondary",
};

export const linkStyles = {
  mt: 4,
  fontWeight: "bold",
  color: "black",
  textAlign: "right",
  display: "inline-block",
  "&:hover": {
    textDecoration: "underline",
  },
};