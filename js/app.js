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
        // Redirecionar para a página de pesquisa do seu site no GitHub Pages com a consulta
        window.location.href = "https://kayron33.github.io/EVADECOR/?q=" + encodeURIComponent(query);
        window.location.href = "https://kayron33.github.io/EVADECOR/cortinas.html" + encodeURIComponent(query);
        window.location.href = "https://kayron33.github.io/EVADECOR/produto.html" + encodeURIComponent(query);
    }
});
