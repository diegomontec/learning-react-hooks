import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "./theme";
import App from "./App.tsx";
import { ExportHooks } from "./hooks/pages/exportHooks.ts";
import { HooksMap } from "./data/HooksMap.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/usestate"
            element={<ExportHooks.SendWhatsApp hook={HooksMap.usestate} />}
          />
          {/* <Route
            path="/useeffect"
            element={<ExportHooks.UseEffect hook={hookMap.useeffect} />}
          />
          <Route
            path="/usememo"
            element={<ExportHooks.UseMemo hook={hookMap.usememo} />}
          />
          <Route
            path="/usecallback"
            element={<ExportHooks.UseCallback hook={hookMap.usecallback} />}
          />
          <Route
            path="/usecontext"
            element={<ExportHooks.UseContext hook={hookMap.usecontext} />}
          />
          <Route
            path="/useref"
            element={<ExportHooks.UseRef hook={hookMap.useref} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
