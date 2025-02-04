'use client'

import { Button, Card, Box, TextField, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function InputWithIcon() {

  const [contact, setContact] = useState({ name: '', phone: '', message: ''})
  
  const [alert, setAlert] = useState(false)
  const [alertError, setAlertError] = useState(false)

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  
  const shipMessage = async () => {
    try {
      const response = await axios.post("http://localhost:5000/contacts", contact);
      if (response.status === 201) {
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 3000)
      }
      setContact({ name: "", phone: "", message: "" });
    } catch (error) {
      setAlertError(true)
      setTimeout(() => {
        setAlertError(false)
      }, 3000)
    }
  }
  
  return (
    <Box sx={{}}>

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: 400,
          gap: 4,
          alignContent: "center",
          mx: "auto",
          my: "10vh",
          padding: "20px",
        }}
      >
        <TextField
          id="input-with-icon-textfield"
          label="Nombre"
          variant="standard"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Telefono"
          variant="standard"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />

        <TextField
          label="Mensaje"
          multiline
          variant="standard"
          name="message"
          value={contact.message}
          onChange={handleChange}
        />

        <Button onClick={shipMessage}>Enviar</Button>
      </Card>

        <Box sx={{ width: 500, mx: 'auto'}}>
          <Alert variant="filled" severity="success" hidden={!alert}>
            El mensaje ha sido enviado correctamente
          </Alert>
          <Alert variant="filled" severity="error" hidden={!alertError}>
            Los campos tienen que estar completos
          </Alert>
        </Box>
    </Box>
  );
}
