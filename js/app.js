var header = document.getElementById('header');
var paginas = document.getElementById('paginas');
var texto = document.getElementById('texto');
var showSidebar = false;

function toogleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        paginas.style.marginLeft = '-10vw';
        paginas.style.animationName = 'showSidebar';


    }
    else {
        paginas.style.marginLeft = '-100vw';
        paginas.style.animationName = '';
    }
}

var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('r1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if( cont > 2){
        cont = 1
 
   }

   document.getElementById('r'+cont).checked = true
}

//barra de pesquisa//
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    var query = document.getElementById("searchInput").value;
    if (query) {
        // Redirecionar para o mecanismo de busca ou página desejada com a consulta
        window.location.href = "https://www.seusite.com/pesquisa?q=" + encodeURIComponent(query);
    }
});