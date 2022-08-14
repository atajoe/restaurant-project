

function create_component(){
    // Creating our elements
    const nav_selection = document.createElement('div');
    const header = document.createElement('header');
    const btn = document.createElement('button');
    const unordered_list = document.createElement('ul')
    const title = document.createElement('div')
    const tab_content = document.createElement('div')
    const home = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
}

// Adding our classes/attributes to our newly created elements
function add_attributes(){
        unordered_list.classList.add("selection-list")
        nav_selection.classList.add("selection")
        title.classList.add("title")
        title.innerHTML = 'Food-on-a-Plate'
        btn.setAttribute("id", "order")
        tab_content.classList.add("tab-content")
        home.setAttribute("id","home")
        h1.innerHTML = 'Come on down for some delicious cuisine!'
        p.innerHTML = 'Tasty and affordable!'
        btn.innerHTML = 'Order Now'
        home.appendChild(h1)
        home.appendChild(p)
        home.append(btn)
        tab_content.appendChild(home)
    }

    //Creating list items to our unordered list
    function add_items_to_nav(){
        let list_item_textcontent = ['Home', 'Menu', 'Contact Us']
        list_item_textcontent.forEach((item,index) => {
        let list_item = document.createElement('li');
        let a = document.createElement('a')
        a.setAttribute('href',"#")
        list_item.textContent = `${item}`
        a.appendChild(list_item)
        unordered_list.appendChild(a)
        nav_selection.appendChild(unordered_list)
        header.appendChild(title);
        header.appendChild(nav_selection)
        master_content.appendChild(header)
    
    })
    }

function createHome(){
    create_component()
    add_attributes()
    add_items_to_nav()
}

export default createHome;