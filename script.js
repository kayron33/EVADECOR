const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImg = document.getElementById('main-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImg.src = thumbnail.src;
    });
});


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

//dialog aparecer a promoçaõ
let modalSite=document.querySelector('dialog')
let btnFechar=document.querySelectorAll('dialog button')

let cont=0


setTimeout(()=>{
modalSite.showModal()

}, 3000);
//document.addEventListener('mouseleave',()=>{
    //if(cont==0)


   /// modalSite.showModal()
//})

btnFechar.forEach(button => {
    button.addEventListener('click',()=>{
        modalSite.close()
        cont=1;
    })
})

