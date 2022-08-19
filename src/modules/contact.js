// import create_header from "./initial-page-load";
import { create_tab_content, add_index_content_child } from "./component_functions";

function contact_tab(){
    const tab_content = document.getElementById("tabbed-content")
    const contact_tab_content = add_index_content_child('contact')
    tab_content.appendChild(contact_tab_content)
    return tab_content
}

export default contact_tab;