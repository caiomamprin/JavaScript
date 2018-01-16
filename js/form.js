//escutar evento quando clica no botão Adicionar
//var que recebe o botão add
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//criando a função que escuta o evento, parametro event é obrigatiorio
//para evitar o evento default
 botaoAdicionar.addEventListener("click",function(event){
   //função que evita o eventoDefault(recarregar a pagina ao clicar no botão)
   event.preventDefault();

   //var que recebe o formulario
   var form = document.querySelector("#form-adiciona");
   //console.log(form);

   //pegando os valores do input usando a funcao que obtem os dados
  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  //exibe mensagem caso haja erros no paciente adicionado
  var erros = validaPaciente(paciente);

  if(erros.length > 0) {
    exibeMensagensDeErro(erros);

    return;
  }


   //add a tr na tabela
   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);
   form.reset();

 });//funcao escutar botaoAdicionar

 //funcao que obtem os dados do formulario
 function obtemPacienteDoFormulario(form){
   //criando um objeto pacientes
   var paciente = {
     nome: form.nome.value,
     peso: form.peso.value,
     altura: form.altura.value,
     gordura: form.gordura.value,
     imc: calculaImc(form.peso.value, form.altura.value)
     }
    return paciente;
 }//funcao obtemPacienteFormulario

  function montaTd(dado,classe){
    //cria a td
    var td = document.createElement("td");
    //cria a classe(passada no parametro) para Td criada no momento
    td.classList.add(classe);
    //coloca o dado na td
    td.textContent=dado;
    return td;
  }//montaTd

  function montaTr(paciente){
    //cria a tr
     var tr = document.createElement("tr");
     //cria a classe para a tr
     tr.classList.add("paciente");
     //cria as td e adiciona ela a TR
     tr.appendChild(montaTd(paciente.nome,"info-nome"));
     tr.appendChild(montaTd(paciente.peso,"info-peso"));
     tr.appendChild(montaTd(paciente.altura,"info-altura"));
     tr.appendChild(montaTd(paciente.gordura,"info-gordura"));
     tr.appendChild(montaTd(paciente.imc,"info-imc"));
     return tr;
  }//montaTr

  //funcao que valida o paciente adicionado do form
  function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
      erros.push("o nome não pode ser branco");
    }
    if (paciente.gordura.length == 0) {
       erros.push("A gordura não pode ser em branco");
   }

   if (paciente.peso.length == 0) {
       erros.push("O peso não pode ser em branco");
   }

   if (paciente.altura.length == 0) {
       erros.push("A altura não pode ser em branco");
   }
   if(!validaPeso(paciente.peso)){
     erros.push("Peso inválido");
   }
   if(!validaAltura(paciente.altura)){
     erros.push("Altura Inválida")
   }
   return erros;
  }

  function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
  }
