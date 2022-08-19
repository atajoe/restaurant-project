// import create_header from "./initial-page-load";
import { create_tab_content, add_index_content_child} from "./component_functions";


function home_tab(){
    const tab_content = document.getElementById("tabbed-content")
    const home_tab_content = add_index_content_child('home')
    tab_content.appendChild(home_tab_content)
    return tab_content
}

export default home_tab;



