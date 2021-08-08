let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("items");

function CriarElemento(event){
  let li = document.createElement("li");
  li.innerHTML = input.value;
  ul.appendChild(li);

  input.value ="";
}

button.addEventListener("click",CriarElemento)