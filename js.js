const hamMenu = document.querySelector('.hamburger-menu');
const dummyDrop = document.querySelector("#Dummy_Dropdown");
const hamPosition = document.getElementById("ham");
hamMenu.addEventListener('click', () => {
    hamPosition.classList.toggle('active');
    dummyDrop.classList.toggle('active');
    hamMenu.classList.toggle('active');
    var element = document.getElementById("Hamburger_Menu");
    element.classList.toggle('active');

});

function contactButtonPressed() {
    const contactPage = document.getElementById("Contact_Page");
    if(contactPage.classList.contains('hidden')){
        contactPage.classList.remove('hidden');
        contactPage.classList.toggle('active');
    } else {
        contactPage.classList.toggle('active');
        contactPage.classList.add('hidden');
    }
}
const contactButton = document.getElementsByClassName('contact_button');
const contactButton0 = contactButton[0];
const contactButton1 = contactButton[1];
contactButton0.addEventListener('click', contactButtonPressed);
contactButton1.addEventListener('click', contactButtonPressed);


// const scrollBox = document.getElementById('Scroll_Box');
// scrollBox.style.height = screen.height - document.getElementById('Desktop_Navbar').height - document.getElementById('Mobile_Navbar').height; 
// scrollBox.style.width = screen.width - document.getElementById('Desktop_Navbar').width - document.getElementById('Mobile_Navbar').width; 
// console.log(scrollBox.height);

// const freeSpace = document.querySelector('#free_space_bottom');
// freeSpace.addEventListener('click',() => {
//     dummyDrop.classList.toggle('active');
//     hamMenu.classList.toggle('active');
//     var element = document.getElementById("Hamburger_Menu");
//     element.classList.toggle('active');

// });

