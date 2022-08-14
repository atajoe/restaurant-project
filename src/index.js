import create_header from './modules/initial-page-load.js'


loadWebsite()
function loadWebsite() {
    const master_content = document.getElementById('content')

    //Content container
    create_header()
    addnavevents()

};

function addnavevents(){
    const homebtn = document.getElementById('Home');
    homebtn.addEventListener('click', (e) => {
        console.log('Home button worked!')
    })
}
