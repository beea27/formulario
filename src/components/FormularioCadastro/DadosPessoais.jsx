import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}){
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return(
    <form 
      onSubmit = {(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField 
        id="nome" 
        name="nome" 
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
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
      />
      <TextField 
        id="sobrenome" 
        name="sobrenome"
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
        name="cpf"
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
        onBlur={validarCampos}
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;