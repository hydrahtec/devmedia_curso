<?php
  //Variáveis
  $nome = $_POST['nome'];
  $data_nascimento = $_POST['data_nascimento'];
  $telefone = $_POST['telefone'];
  $numero_registro = $_POST['numero_registro'];
  $validade = $_POST['validade'];
  $carro = $_POST['carro'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "Nome: ".$nome."\n"."Data de nascimento: ".$data_nascimento."\n"."Telefone: ".$telefone."\n"."CNH: ".$numero_registro."\n"."Validade: ".$validade."\n"."Carro: ".$carro."\n"."Este pedido foi enviado em ".$data_envio." ás ".$hora_envio;
  
  //Emails para quem será enviado o formulário
  $destino = "hydrahtec@gmail.com";
  $assunto = "Alucar - aluguel de carro";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=UTF-8\n";
  $headers .= "From: $nome";

  //Enviar
  mail($destino, $assunto, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=https://hydrahtec.com/alucar/contato.html'>";
?>