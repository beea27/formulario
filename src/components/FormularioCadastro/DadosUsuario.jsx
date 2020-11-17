import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({aoEnviar}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return(
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha})
      }}
    >
      <TextField 
        id="email"
        label="email" 
        type="email"
        variant="outlined" 
        margin="normal"
        required
        fullWidth
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
      <TextField 
        id="senha" 
        label="senha"
        type="password"
        variant="outlined" 
        margin="normal"
        required
        fullWidth
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario;