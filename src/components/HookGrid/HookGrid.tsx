import { Box, Typography, Paper, Link } from "@mui/material";
import { HooksMap } from '../../data/HooksMap'
import type { HookItem } from "../../types/HookItem";
import {
  gridStyles,
  paperStyles,
  titleStyles,
  descriptionStyles,
  linkStyles,
  comingSoonStyles,
} from "./HookGrid.styles";

const hookList: HookItem[] = Object.values(HooksMap);

const HookGrid = () => {
  return (
    <Box sx={gridStyles}>
      {hookList.map((hook) => {
        const hasLink = hook.link.trim() !== "";

        return (
          <Paper key={hook.title} elevation={2} sx={paperStyles(hasLink)}>
            <Typography variant="h6" sx={titleStyles}>
              {hook.title}
            </Typography>

            <Typography variant="body2" sx={descriptionStyles}>
              {hook.description}
            </Typography>

            {hasLink ? (
              <Link
                href={hook.link}
                underline="none"
                aria-label={`Acessar o exemplo de ${hook.title}`}
                title={`Acessar o exemplo de ${hook.title}`}
                sx={linkStyles}
              >
                Acessar →
              </Link>
            ) : (
              <Typography variant="body2" sx={comingSoonStyles}>
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
