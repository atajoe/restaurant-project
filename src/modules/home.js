import { create_tab } from "./component_functions";

function home_tab(){
    const master_content = document.getElementById('content');
    const tab_container = document.getElementById("tab-container")
    const create_home_tab = create_tab('home')
    tab_container.appendChild(create_home_tab)
    tab_container.appendChild(home_tab_content())
    master_content.append(tab_container)
    return master_content
}

function home_tab_content(){
    const content_child = document.getElementById('home')
    const p = document.createElement('p')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Come on down for some delicious cuisine!'
    const btn = document.createElement('button')
    p.innerHTML = 'Tasty and affordable!'
    btn.setAttribute('id','order')
    btn.innerHTML = 'Order Now'
    content_child.appendChild(h1)
    content_child.appendChild(p)
    content_child.appendChild(btn)
  
    return content_child
}


export default home_tab;



