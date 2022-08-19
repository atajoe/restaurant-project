
function create_nav(title_text,id){
    // Creating our elements
    const header = document.createElement('header');
    const title = document.createElement('div');
    title.classList.add(id)
    title.innerHTML = title_text;
    header.appendChild(title)
    return header;
}

// Creating our navigation items
function add_nav_items(){
        const nav_items_section = document.createElement('div');
        const nav_items_section_list= document.createElement('ul');
        nav_items_section_list.classList.add('selection-list');
        const home_item = create_item('Home')
        const menu_item = create_item('Menu')
        const contact_us_item = create_item('Contact Us')
        nav_items_section_list.appendChild(home_item)
        nav_items_section_list.appendChild(menu_item)
        nav_items_section_list.appendChild(contact_us_item)
        nav_items_section.appendChild(nav_items_section_list)
        
        return nav_items_section

    }

function create_item(text){
    const list_item = document.createElement('li')
    const a = document.createElement('a');
    list_item.setAttribute('id', text)
    a.setAttribute('href', "#");
    list_item.textContent = `${text}`
    list_item.dataset.target = text
    a.appendChild(list_item);
    return a
}    

function create_header(){
    const main_content = document.getElementById('content');
    const header = create_nav('Food-on-a-Plate', 'title');
    const nav_items = add_nav_items()
    const tab_content = create_tab_content()
    header.appendChild(nav_items)
    main_content.appendChild(header)
    main_content.appendChild(tab_content)
    return main_content
}

function create_tab_content(){
    const main_content = document.createElement('div');
    main_content.classList.add("tab-content")
    main_content.setAttribute('id', 'tabbed-content')
    return main_content
}

function add_index_content_child(id){
    const content_child = document.createElement('div')
    const p = document.createElement('p')
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Come on down for some delicious cuisine!'
    const btn = document.createElement('button')
    p.innerHTML = 'Tasty and affordable!'
    content_child.setAttribute('id',id)
    btn.setAttribute('id','order')
    btn.innerHTML = 'Order Now'
    content_child.appendChild(h1)
    content_child.appendChild(p)
    content_child.appendChild(btn)
  
    return content_child
}

export default create_header;
export {create_tab_content,add_index_content_child}