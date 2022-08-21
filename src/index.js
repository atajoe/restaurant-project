
import home_tab from './modules/home.js';   
import menu_tab from './modules/menu.js';
import contact_tab from './modules/contact.js';
import create_index_page from './modules/component_functions';

(function loadWebsite() {
    //Content container
    create_index_page();
    home_tab();
    menu_tab();
    contact_tab();

})();





