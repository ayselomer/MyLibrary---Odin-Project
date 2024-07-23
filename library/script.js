document.addEventListener("DOMContentLoaded", function () {
    console.log('loaded')
})


// when add button is clicked, the form is opened
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', showform);

function showform() {
    let form = document.getElementById('form');
    form.style.display = 'block'
}


//creating new books

