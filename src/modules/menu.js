import { create_tab_content, add_index_content_child} from "./component_functions";

function menu_tab(){
    const tab_content = document.getElementById("tabbed-content")
    const menu_tab_content = add_index_content_child('menu')
    tab_content.appendChild(menu_tab_content)
    return tab_content
}

export default menu_tab;