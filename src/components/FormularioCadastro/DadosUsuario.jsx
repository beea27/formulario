import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return(
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({email, senha}) 
        }
      }}
    >
      <TextField 
        id="email"
        name="email"
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
        name="senha" 
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
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
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