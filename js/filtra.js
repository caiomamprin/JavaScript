//pego o campo filtro da tabela para usar o que é escrito
var campoFiltro = document.querySelector("#filtrar-tabela");
//console.log(campoFiltro);

//adiciono o evento input para saber qnd o user digita algo nele
campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes);
 // se o valor no campo filtro maior que 0
  if (this.value.length > 0) {
    //percorre o o array de pacientes
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //expressao regular para filtrar
            //o "i"  caseSensitive
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome)){
              paciente.classList.add("invisivel");
              }else{
                paciente.classList.remove("invisivel");
              }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }//for
    }//else
  });//funcao
