import { Paper, Typography, Link } from "@mui/material";
import type { HookItem } from "../../types/HookItem";
import {
  paperStyles,
  titleStyles,
  descriptionStyles,
  linkStyles,
} from "./HookCard.styles";

type HookCardProps = {
  hook: HookItem;
};

const HookCard = ({ hook }: HookCardProps) => {
  return (
    <Paper component="article" elevation={2} sx={paperStyles}>
      <Typography variant="h6" sx={titleStyles}>
        {hook.title}
      </Typography>

      <Typography variant="body2" sx={descriptionStyles}>
        {hook.description}
      </Typography>

      <Link
        href={hook.link}
        underline="none"
        aria-label={`Acessar o exemplo de ${hook.title}`}
        title={`Acessar o exemplo de ${hook.title}`}
        sx={linkStyles}
      >
        Acessar →
      </Link>
    </Paper>
  );
};

export default HookCard;
