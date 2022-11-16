const hamMenu = document.querySelector('.hamburger-menu');
const dummyDrop = document.querySelector("#Dummy_Dropdown");
const hamPosition = document.getElementById("ham");
function ham_menu_expand_contract () {
    hamPosition.classList.toggle('active');
    dummyDrop.classList.toggle('active');
    hamMenu.classList.toggle('active');
    var element = document.getElementById("Hamburger_Menu");
    element.classList.toggle('active');
}
hamMenu.addEventListener('click', ham_menu_expand_contract);

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
const contactButtons = document.querySelectorAll('.contact_button');
contactButtons.forEach(button => {
    button.addEventListener('click', contactButtonPressed);
});

const hamFields = document.querySelectorAll('.ham_field');

hamFields.forEach(field => {
    field.addEventListener('click', ham_menu_expand_contract);
})
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

