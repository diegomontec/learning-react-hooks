import { Box, Typography } from "@mui/material";
import { titleStyles } from "./PageTitle.styles";

const PageTitle = () => (
  <Box>
    <Typography variant="h4" sx={titleStyles}>
      React Hooks
    </Typography>
  </Box>
);

export default PageTitle;
