
import home_tab from './modules/home.js';   
import menu_tab from './modules/menu.js';
import contact_tab from './modules/contact.js';
import create_index_page from './modules/component_functions';
// import { index_page } from './modules/initial-page-load.js'

const master_content = document.getElementById('content');

function loadWebsite() {
    

    //Content container
    create_index_page();
    master_content.appendChild(home_tab());
    master_content.appendChild(menu_tab());
    master_content.appendChild(contact_tab());
    addnavevents();

};

function addnavevents(){
    const homebtn = document.getElementById('Home');
    const menubtn = document.getElementById('Menu');
    homebtn.addEventListener('click', (e) => {
        console.log('Home button worked!')
        document.getElementById("menu").style.display = "none";
        document.getElementById("home").style.display = "flex";
    });
    menubtn.addEventListener('click', (e) => {
        console.log('Menu button worked!')
        document.getElementById("home").style.display = "none";
        document.getElementById("menu").style.display = "flex";

    });
    
}


loadWebsite();
