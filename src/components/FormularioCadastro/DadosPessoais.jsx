import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";


function DadosPessoais({aoEnviar, validarCPF}){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return(
    <form 
      onSubmit = {(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
      }}
    >
      <TextField 
        id="nome" 
        label="Nome"
        variant="outlined" 
        margin="normal" 
        fullWidth
        value={nome}
        onChange={(event) => {
          let tmpNome = event.target.value;
          if(tmpNome.length >= 10){
            tmpNome = tmpNome.substr(0,3);
          }
          setNome(tmpNome);
        }}
      />
      <TextField 
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />
      <TextField 
        id="cpf" 
        label="CPF" 
        variant="outlined" 
        margin="normal" 
        fullWidth
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
      />

      <FormControlLabel 
        label="Promoções"
        control={
          <Switch 
            name="promocoes" 
            color="primary"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel 
        label="Novidades"
        control={
          <Switch 
            name="novidades"
            color="primary"
            checked = {novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;