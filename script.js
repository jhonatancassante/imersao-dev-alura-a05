// Id Campo: filme
//Função: adicionarFilme()
//Id mostrar: listaFilmes

function adicionarFilme() {
  var linkFilme = document.getElementById("filme").value;
  if (linkFilme.endsWith(".jpg")) {
    listarFilmes(linkFilme);
  } else {
    console.error("Endereço do filme inválido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmes(linkFilme) {
  var elementoLinkFilme = "<img src=" + linkFilme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML += elementoLinkFilme;
}