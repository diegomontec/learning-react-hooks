import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import theme from "./theme";
import App from "./App";
import Index from "./hooks/page/Index.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/usestate" element={<Index.SendWhatsApp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
