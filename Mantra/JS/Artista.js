const Links = [];
const Valor = document.getElementsByClassName("elemento");
const Id_V = Valor[0].getAttribute('id');

const CssP1 = document.getElementsByClassName("song_side")[0];

if (Id_V == "1") {
    CssP1.style.background = `url("/Banners/1.png")`;
}


InfoSelec = 0;
Infos = [ "1", "2", "3" ];
Lienzo = document.getElementById("Info")

for(let i = 1; i <= 8; i++){

    Links[i] = document.getElementById(`Link${i}`);
}

for(let i = 1; i <= 8; i++){

    Links[i].onclick = function(){
        docInfoSelec = Infos[i-1];
    }
}

NDMX = function(){
    document.body.innerHTML ="<h1>HOLA</h1>"
}