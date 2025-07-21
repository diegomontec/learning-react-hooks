import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { linkStyleFooter } from "./Footer.style";

const Footer = () => {
  return (
    <Link component={RouterLink} to="/" sx={linkStyleFooter} underline="none">
      ← Voltar
    </Link>
  );
};
export default Footer;
