import { Paper, Typography, Link } from "@mui/material";
import type { HookItem } from "../types/Hook";

type HookCardProps = {
  hook: HookItem;
};

const HookCards = ({ hook }: HookCardProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        width: "30%",
        height: "30%",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        transition: "0.3s",
        "&:hover": {
          boxShadow: 4,
          borderColor: "black",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {hook.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        {hook.description}
      </Typography>

      <Link
        href={hook.link}
        underline="none"
        aria-label={`Acessar o exemplo de ${hook.title}`}
        title={`Acessar o exemplo de ${hook.title}`}
        sx={{
          mt: 2,
          fontWeight: "bold",
          color: "black",
          textAlign: "right",
          display: "inline-block",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Acessar →
      </Link>
    </Paper>
  );
};

export default HookCards;
