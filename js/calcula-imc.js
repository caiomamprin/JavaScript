
    <!--console.log("Olá Mundo");-->
    <!--console.log(document);-->
    <!--console.log(document.querySelector("h1"));-->
    var titulo = document.querySelector(".titulo");
  //  console.log(titulo);
  //   console.log(titulo.textContent);

    titulo.textContent = "Aparecida Nutricionista";



      //pegando todas as informações do 1o paciente
    var pacientes = document.querySelectorAll(".paciente");
    //console.log(pacientes);

    //for para percorer o array pacientes e obter as infos deles
    for(i = 0 ; i< pacientes.length ; i++){
      var paciente = pacientes[i];
      //console.log(paciente);

     //armazenando o td que contém o peso do paciente
    var tdPeso = paciente.querySelector(".info-peso");
    //armazenando o td que contém a altura do paciente
    var tdAltura = paciente.querySelector(".info-altura");

    //var que armazena o valor que contem em tdPeso
    var peso = tdPeso.textContent;
    //var que armazena o valor que contem em tdPeso
    var altura = tdAltura.textContent;
    //calculando o imc peso / altura*altura
    //armazenando tdImc em uma var para podermos seta-la
    var tdImc = paciente.querySelector(".info-imc");

    //verifica o peso e altura e armazena nas vars
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    //Caso peso nao seja valido escreve na td e deixa vermelha
    if(!pesoEhValido){
      //console.log("Peso Inválido");
      tdImc.textContent="Peso Inválido";
      paciente.classList.add("paciente-invalido");
    }

    //caso altura nao seja valida escreve na td e deixa vermelha
   if(!alturaEhValida){
     //console.log("Altura Inválida");
     tdImc.textContent="Altura Inválida";
     paciente.classList.add("paciente-invalido");
   }

   //se verdadeiro calcula o imc
    if(pesoEhValido && alturaEhValida){
      var imc = calculaImc(peso,altura);
      //atribuindo o valor calculado a td Imc
      tdImc.textContent = imc;
    }
  }//fecha o for

    //funcao para calcular Imc
    function calculaImc(peso,altura){
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(2);
    }//calculaImc

    //funcao validaPeso
    function validaPeso(peso){
      if(peso > 0 && peso < 1000 ){
        return true;
      }else{
        return false;
      }
    }//validaPeso

    //funcao ValidaAltura
    function validaAltura(altura){
      if(altura >0 && altura < 3.00 ){
        return true;
      }else{
        return false;
      }
    }//validaAltura
