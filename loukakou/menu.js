let btnMenu = document.querySelector('#menu-icon');
let body = document.querySelector('body');
let row = document.querySelector('#row');
let ptitle = document.querySelector('#ptitle');
let categories=document.querySelector('.categories');
let products=document.querySelector('.products');
let icon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let hidden = document.querySelector('.hidden');
let downClick = document.querySelector('#down');
let scat = document.querySelector('.scat');
let tcat = document.querySelector('.tcat');
let focat = document.querySelector('.focat');




btnMenu.addEventListener('click', () => {

    if(btnMenu.id === 'menu-icon'){
     MainMenu();
     hidden.style.display='block';
    }else if(btnMenu.id === 'monkey'){
    backToMain();
    }
});



function backToMain(){
    row.style.display = 'block';
    ptitle.style.display = 'block';
    categories.style.display = 'flex';
    products.style.display = 'block';
    hidden.style.display='none';
    nav.style.backgroundImage = "url('content/Front End Intro/assets/header-bg.jpg')";
    btnMenu.id = 'menu-icon';
    menu.style.color = 'black';
    btnMenu.name = 'menu-outline';
}




function MainMenu(){

    /*body.style.backgroundImage ="url('content/Front End Intro/assets/placeholder.jpg')";*/
    row.style.display = 'none';
    ptitle.style.display = 'none';
    categories.style.display = 'none';
    products.style.display = 'none';
    btnMenu.name = 'close-outline';
    nav.style.background ='none';
    nav.style.border = 'none';
    menu.style.color='#9d0208';
    
   
    btnMenu.id = 'monkey';

}

downClick.addEventListener('click', () => {
    if(downClick.id === 'down'){
        Down();
    }else if(downClick.id === 'up'){
        Up();
    }
    

})

function Up(){
    scat.style.display = 'none';
    tcat.style.display = 'none';
    focat.style.display = 'none';
    downClick.name = 'arrow-down-outline';
    downClick.id = 'down';
}

function Down(){
    scat.style.display = 'flex';
    tcat.style.display = 'flex';
    focat.style.display = 'flex';
    downClick.name = 'arrow-up-outline';
    downClick.id = 'up';
}