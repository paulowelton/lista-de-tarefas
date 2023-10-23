
 document.getElementById("adicionarBtn").addEventListener("click", adicionarTarefa);

 function adicionarTarefa() {
   var input = document.getElementById("tarefaInput");
   var tarefa = input.value;

   if (tarefa !== "") {
     var lista = document.getElementById("listaTarefas");
     var item = document.createElement("li");
     item.appendChild(document.createTextNode(tarefa));
     lista.appendChild(item);

     input.value = "";
   }
 }
