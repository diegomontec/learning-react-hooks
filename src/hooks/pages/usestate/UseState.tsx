import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SendWhatsApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const FormatNumber = event.target.value.replace(/\D/g, "");
    setPhoneNumber("+55" + FormatNumber);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(encodeURIComponent(event.target.value));
  };

  const handleSendClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      sx={{
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", letterSpacing: "0.05em", mb: 2 }}
        >
          Exemplo prático de useState
        </Typography>

        <Typography variant="body1" sx={{ color: "#555", mb: 6 }}>
          Este componente demonstra como utilizar o React Hook{" "}
          <strong>useState</strong> para gerenciar o estado de um formulário de
          envio de mensagens via WhatsApp. O usuário pode preencher um número de
          telefone e uma mensagem, e ao clicar no botão, será direcionado para o
          WhatsApp com os dados preenchidos.
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Telefone"
            placeholder="DDD + digito + numero"
            variant="outlined"
            type="tel"
            onChange={handlePhoneNumberChange}
            fullWidth
          />

          <TextField
            label="Mensagem"
            variant="outlined"
            onChange={handleMessageChange}
            fullWidth
          />

          <Button
            variant="outlined"
            onClick={handleSendClick}
            sx={{
              borderColor: "black",
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "black",
              },
            }}
          >
            Enviar Mensagem
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SendWhatsApp;
