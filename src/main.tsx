import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "./theme";
import App from "./App.tsx";
import { ExportHooks } from "./hooks/pages/exportHooks.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/usestate" element={<ExportHooks.SendWhatsApp />} />
          <Route path="/useeffect" element={<ExportHooks.UseEffect />} />
          <Route path="/usememo" element={<ExportHooks.UseMemo />} />
          <Route path="/usecallback" element={<ExportHooks.UseCallback />} />
          <Route path="/usecontext" element={<ExportHooks.UseContext />} />
          <Route path="/useref" element={<ExportHooks.UseRef />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
