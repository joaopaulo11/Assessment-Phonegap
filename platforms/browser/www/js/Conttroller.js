var txt = new Textos();

$(document).ready(function(){
    txt.verificaLingua();



    txt.setTextos();


});

function trocarLinguagem(){
    txt.TrocaLingua();
    txt.setTextos();
}