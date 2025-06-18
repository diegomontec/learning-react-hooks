import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const SendWhatsApp = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber("+55" + e.target.value);
  };

  const handleInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(encodeURIComponent(e.target.value));
  };

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${inputNumber}&text=${inputMessage}`;
    window.open(url);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 4, gap: 2, maxWidth: 400, margin: "0 auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Enviar pelo WhatsApp
      </Typography>

      <TextField
        label="Telefone"
        variant="outlined"
        type="number"
        onChange={handleInputNumber}
        fullWidth
      />

      <TextField
        label="Mensagem"
        variant="outlined"
        onChange={handleInputMessage}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ mt: 2 }}
      >
        Enviar Mensagem
      </Button>
    </Box>
  );
};

export default SendWhatsApp;
