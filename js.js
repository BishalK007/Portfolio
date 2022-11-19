// For Desktop NavBar
const navButtonDesktop = document.getElementById('nav_button_desktop');
navButtonDesktop.addEventListener('click',() => {
    navButtonDesktop.classList.toggle('active');
    document.getElementById('Desktop_Navbar').classList.toggle('active');
    document.querySelector('.ham').classList.toggle('active');
    document.querySelector('.hamburger-menu').classList.toggle('active');
    document.querySelector('.Navtext_Desktop').classList.toggle('active');
    document.querySelector('.border_desktop_nav_button_back_curve1').classList.toggle('active');
    document.querySelector('.border_desktop_nav_button_back_curve2').classList.toggle('active');
    document.querySelectorAll('.border_desktop_nav_button_back').forEach(element => {
        element.classList.toggle('active');
    });

    


})


