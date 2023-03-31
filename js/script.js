//sticky nav bar
window.onscroll = () =>{

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};

//dark light mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onlick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};