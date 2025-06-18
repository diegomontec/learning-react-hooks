import { Box, Typography, Paper, Link } from "@mui/material";
import Grid from '@mui/material/Grid';

const App = () => {
  const hooks = [
    {
      title: "useState",
      description: "Este componente demonstra como utilizar o React Hook useState para gerenciar o estado de um formulário de envio de mensagens via WhatsApp. O usuário pode preencher um número de telefone e uma mensagem, e ao clicar no botão, será direcionado para o WhatsApp com os dados preenchidos.",
      link: "/usestate",
    },
    {
      title: "useState",
      description: "Este componente demonstra como utilizar o React Hook useRef para acessar diretamente um elemento DOM.",
      link: "#",
    },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: "600px", mx: "auto" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "text.primary",
        }}
      >
        Explore os React Hooks
      </Typography>

      <Grid container spacing={4}>
        {hooks.map((hook) => (
          <Grid item xs={12} sm={6} md={4} key={hook.title}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
