let quantidadeDeParticipantes = 108;
let quantidadeDeParticipantes = document.getElementById("nomeParticipantes").value;

function enviar(){
    let dataDeNascimento = document.getElementById ("dataDeNascimento").value = 17;     
      let dataDoEvento = document.getElementById ("dataDoEvento").value;


      let quantidadeDeParticipantes = document.getElementById("nomeParticipantes").value;
     
      if(dataDeNascimento<18){
          alert("O anfitrião deve ter, no mínimo, 18 anos.")
          return false;
      }
  }
