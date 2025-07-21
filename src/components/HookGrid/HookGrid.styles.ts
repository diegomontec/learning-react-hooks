import type { Theme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

export const gridStyles: SxProps<Theme> = (theme) => ({
  display: "grid",
  gap: 2,
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: { gridTemplateColumns: "repeat(2, 1fr)" },
  [theme.breakpoints.up("md")]: { gridTemplateColumns: "repeat(3, 1fr)" },
  [theme.breakpoints.up("lg")]: { gridTemplateColumns: "repeat(4, 1fr)" },
});

export const paperStyles = (hasLink: boolean): SxProps<Theme> => ({
  p: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #ddd",
  transition: "0.3s",
  opacity: hasLink ? 1 : 0.6,
  "&:hover": hasLink ? { boxShadow: 4, borderColor: "black" } : undefined,
});

export const titleStyles: SxProps<Theme> = {
  fontWeight: "bold",
  mb: 1,
};

export const descriptionStyles: SxProps<Theme> = {
  flexGrow: 1,
  color: "text.secondary",
};

export const linkStyles: SxProps<Theme> = {
  mt: 2,
  fontWeight: "bold",
  color: "black",
  textAlign: "right",
  display: "inline-block",
  "&:hover": { textDecoration: "underline" },
};

export const comingSoonStyles: SxProps<Theme> = {
  mt: 2,
  color: "gray",
  fontStyle: "italic",
  textAlign: "right",
  cursor: "not-allowed",
};
