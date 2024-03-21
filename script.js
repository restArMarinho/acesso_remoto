function link(){
    var codigo = document.getElementById("codigo").value;
    var link = document.getElementById("link");
    var linkcompleto = `https://${codigo}-187-18-143-165.ngrok-free.app/cozinharemote.html`;
    link.href = linkcompleto;
    link.innerHTML = linkcompleto;
    link.style.display = "block";
}