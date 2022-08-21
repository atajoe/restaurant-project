// Creating our navigation bar
function create_nav(title_text,id){
    const header = document.createElement('header');
    const title = document.createElement('div');
    title.classList.add(id)
    title.innerHTML = title_text;
    header.appendChild(title)
    return header;
}

// Creating our navigation bar list items (Home, Menu, Contact) since I used an unordered list followed by list items to include in header section.
function add_nav_items(){
        const nav_items_section = document.createElement('div');
        const nav_items_section_list= document.createElement('ul');
        nav_items_section_list.classList.add('selection-list');
        const home_item = create_item('Home')
        const menu_item = create_item('Menu')
        const contact_us_item = create_item('Contact')
        nav_items_section_list.appendChild(home_item)
        nav_items_section_list.appendChild(menu_item)
        nav_items_section_list.appendChild(contact_us_item)
        nav_items_section.appendChild(nav_items_section_list)
        
        return nav_items_section

    }

// Function that creates each list item in my unordered list
function create_item(text){
    const list_item = document.createElement('li')
    const a = document.createElement('a');
    list_item.setAttribute('id', text)
    a.setAttribute('href', "#");
    list_item.textContent = `${text}`
    list_item.dataset.refid = text
    a.appendChild(list_item);
    return a
}


// Component Function that actually creates the initial page when user enters. We're grabbing main_content this from our HTML page
// Then we create our header from create_nav, create our nav_items, and then create our tabbed-content container to store our home/menu/page divs.
function create_index_page(){
    const main_content = document.getElementById('content');
    const header = create_nav('Food-on-a-Plate', 'title');
    const nav_items = add_nav_items()
    const tab_container = create_tab_container()
    header.appendChild(nav_items)
    main_content.appendChild(header)
    main_content.appendChild(tab_container)
    add_nav_events()
    return main_content
}

function create_tab_container(){
    const main_content = document.createElement('div');
    main_content.classList.add("tab-container")
    main_content.setAttribute('id', 'tab-container')
    return main_content
}

//
function create_tab(id){
    const content_child = document.createElement('div')
    content_child.setAttribute('id',id)
    return content_child
}

const flip_page = (e) => {
    if (e.target.dataset.refid === "Home"){
        document.getElementById("home").style.display = "flex";
        document.getElementById("menu").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (e.target.dataset.refid === "Menu"){
        document.getElementById("home").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("menu").style.display = "inherit";
    } else if (e.target.dataset.refid === "Contact"){
        document.getElementById("home").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("contact").style.display = "block"
    }
    return;
}

function add_nav_events(){
    const homebtn = document.getElementById('Home');
    const menubtn = document.getElementById('Menu');
    const contactbtn = document.getElementById('Contact');
  

    homebtn.addEventListener('click', (e) => {
        console.log('Home button worked!')
        flip_page(e)
    });
    menubtn.addEventListener('click', (e) => {
        console.log('Menu button worked!')
        flip_page(e)

    });
    contactbtn.addEventListener('click', (e) =>{
        console.log('Contact button worked!')
        flip_page(e)
    })

    
}



export default create_index_page;
export {create_tab_container,create_tab, flip_page, add_nav_events}