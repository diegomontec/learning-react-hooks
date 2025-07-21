import { Box } from "@mui/material";

import PageTitle from "./components/PageTitle/PageTitle";
import HookGrid from "./components/HookGrid/HookGrid";

const App = () => {
  return (
    <Box p={4}>
      <PageTitle />
      <HookGrid />
    </Box>
  );
};

export default App;
