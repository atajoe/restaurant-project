import { create_tab } from "./component_functions";

function menu_tab(){
    const master_content = document.getElementById('content');
    const tab_container = document.getElementById("tab-container")
    const create_menu_tab = create_tab('menu')
    tab_container.appendChild(create_menu_tab)
    tab_container.appendChild(menu_tab_content())
    master_content.appendChild(tab_container)
    return master_content
}

function menu_tab_content(){
    const content_child = document.getElementById('menu')
    const menu_container = document.createElement('div')
    menu_container.classList.add('menu-container')
    for (let i = 0; i < 6; i++){
        let menu_item_container = document.createElement('div')
        menu_item_container.setAttribute('id',`item-container-${i}`)
        let menu_item = document.createElement('h4')
        let img = document.createElement('img')
        img.src = '/restaurant-project/images/cheeseburger.png'
        menu_item.setAttribute("id", `menuitem-${i}`)
        menu_item.textContent = `This is menu-item-${i}`
        menu_item.appendChild(img)
        menu_item_container.appendChild(menu_item)
        menu_item_container.appendChild(img)
        menu_container.appendChild(menu_item_container)
    }
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Menu'
    content_child.appendChild(h1)
    content_child.appendChild(menu_container)
    
    return content_child
}




export default menu_tab;