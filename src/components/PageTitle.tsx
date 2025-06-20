import { Box, Typography } from "@mui/material";

const PageTitle = () => (
  <Box sx={{ p: 4 }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        textAlign: "left",
        color: "text.primary",
      }}
    >
      Explore os React Hooks
    </Typography>
  </Box>
);

export default PageTitle;
