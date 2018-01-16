var tabela = document.querySelector("#tabela-pacientes");
//console.log(tabela);

//criando a funcao que escuta um 2click
tabela.addEventListener("dblclick", function(event){
  //console.log("dei um 2click");

  //so removo se o elemento é um TD,
  if(event.target.tagName == 'TD' ){
    //add a classe que faz o paciente sumir aos poucos
    event.target.parentNode.classList.add("fadeOut");

    //set para a remoção esperar meio segundo, para dar tempo do paicente sumir
    setTimeout(function() {
      //target(TD que foi clicada)
      //parentNode:qual é o nó(TR) pai da TD clicada, pois apago a tr toda
        event.target.parentNode.remove();
    }, 500);




  }







});
