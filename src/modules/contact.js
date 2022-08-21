import { create_tab } from "./component_functions";

function contact_tab(){
    const master_content = document.getElementById('content');
    const tab_container = document.getElementById("tab-container")
    const create_contact_tab = create_tab('contact')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Contact Us'
    create_contact_tab.appendChild(h1)
    tab_container.appendChild(create_contact_tab)
    master_content.appendChild(tab_container)
    return master_content
}




export default contact_tab;