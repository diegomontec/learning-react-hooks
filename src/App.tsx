import { Box } from "@mui/material";

import PageTitle from "./components/PageTitle";
import HookGrid from "./components/HookGrid";

const App = () => {
  return (
    <Box p:"4">
      <PageTitle />
      <HookGrid />
    </Box>
  );
};

export default App;
