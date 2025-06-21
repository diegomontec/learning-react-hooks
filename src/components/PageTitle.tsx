import { Box, Typography } from "@mui/material";

const PageTitle = () => (
  <Box>
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        textAlign: "left",
        color: "text.primary",
      }}
    >
      React Hooks
    </Typography>
  </Box>
);

export default PageTitle;
