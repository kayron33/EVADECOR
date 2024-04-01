let modalSite=document.querySelector('dialog')
let btnFechar=document.querySelectorAll('dialog fechar')

let cont=0


setTimeout(()=>{
modalSite.showModal()

}, 2000);
//document.addEventListener('mouseleave',()=>{
  //  if(cont==0)


    //modalSite.showModal()
//})

btnFechar.forEach(button => {
    button.addEventListener('click',()=>{
        modalSite.close()
        cont=1;
    })
})