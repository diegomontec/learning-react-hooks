import { Box, Typography, Paper, Link } from "@mui/material";
import hooks from "../data/HooksData.json";
import type { HookItem } from "../types/Hook";

const typedHooks: HookItem[] = hooks as HookItem[];

const HookGrid = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gap: 2,
        gridTemplateColumns: "1fr",
        [theme.breakpoints.up("sm")]: { gridTemplateColumns: "repeat(2, 1fr)" },
        [theme.breakpoints.up("md")]: { gridTemplateColumns: "repeat(3, 1fr)" },
        [theme.breakpoints.up("lg")]: { gridTemplateColumns: "repeat(4, 1fr)" },
      })}
    >
      {typedHooks.map((hook) => {
        const hasLink = hook.link.trim() !== "";

        return (
          <Paper
            key={hook.title}
            elevation={2}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              transition: "0.3s",
              opacity: hasLink ? 1 : 0.6,
              "&:hover": hasLink
                ? { boxShadow: 4, borderColor: "black" }
                : undefined,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {hook.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1 }}
            >
              {hook.description}
            </Typography>

            {hasLink ? (
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
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Acessar →
              </Link>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: "gray",
                  fontStyle: "italic",
                  textAlign: "right",
                  cursor: "not-allowed",
                }}
              >
                Em breve
              </Typography>
            )}
          </Paper>
        );
      })}
    </Box>
  );
};

export default HookGrid;
