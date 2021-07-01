document.addEventListener('DOMContentLoaded', function(){

    eventLiesteners();

    darkMode();

});

function darkMode(){
    const preferencia = window.matchMedia('(prefers-color-scheme: dark)');

    //console.log(preferencia.matches);

    preferencia.addEventListener('change', function(){
        if(preferencia.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    });

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');
    });
}

function eventLiesteners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}