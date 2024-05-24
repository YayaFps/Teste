/*Pagina de Login*/
function logar(){

  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login === "admin" && senha === "admin"){
      alert('Nosso cantinho especial aguarda por você. Vamos criar mais memórias juntas. 💕');
      location.href = "inicio.html";
  }else{
      alert('Eita! Parece que alguém tentou burlar a segurança do nosso refúgio secreto. Mas não se preocupe, estamos protegidas por um escudo de amor e risadas. Vamos tentar novamente! 💖😄');
  }

}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  