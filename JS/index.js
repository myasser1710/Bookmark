var siteNameInput = document.getElementById('siteName')

var siteUrlInput = document.getElementById('siteUrl')


// var searchInput = document.getElementById("searchInput")
// var addBtnInput = document.getElementById("addBtn")
// var updateBtnInput = document.getElementById("updateBtn")



var container = []
if (localStorage.getItem('sites')!= null) {
    container = JSON.parse(localStorage.getItem('sites'))
    displayProducts()
}

function AddProduct() {

    console.log(validateInputs(siteNameInput));

    if (validateInputs(siteNameInput)&& 
        validateInputs(siteUrlInput)) {

        var site ={
            name : siteNameInput.value,
            url : siteUrlInput.value
        }

        container.push(site)
        // container.sort((a, b) => a.price - b.price)
        localStorage.setItem("sites" , JSON.stringify(container))
        clearForm()
        displayProducts()
        console.log("hii");

    }
} 


function clearForm() {

    let deleteData = [siteNameInput , siteUrlInput ]

    for (let i = 0; i < deleteData.length; i++) {
        
        deleteData[i].value = null 
        deleteData[i].classList.remove('is-valid')
        deleteData[i].classList.remove('is-invalid')  
    }
}



function displayProducts() {
    var divContainer = ``;
    

    for (let i = 0; i < container.length; i++) {

        divContainer += `
        <div class="row col-12 py-3 border-bottom  bg-white border-2 ">
            <div class="col-3 ">
                <span id="siteIndex">${i+1}</span>
            </div>

            <div class="col-3">
                <span>${container[i].name}</span>
            </div>

            <div class="col-3">
                <button onclick="visit()" class="btn btn-success btn-sm px-4">visit</button>

            </div>

            <div class="col-3">
                <button onclick="deleteSite(${i})" class="btn btn-danger btn-sm  px-4">Delete</button>
            </div>
        </div>
        `


        
    }

    document.getElementById(`contain`).innerHTML = divContainer
    
}



function deleteSite(index) {
    container.splice(index , 1)
    displayProducts()
    localStorage.setItem( "sites" , JSON.stringify(container))      
    // console.log('yalaa');                                                                           
}




function validateInputs(element) {


    var regexValues ={
        siteName : /^[a-zA-Z0-9]{3,30}$/ ,
        siteUrl : /^([\da-z\.-]+)\.([a-z]{2,})([\/\w \.-]*)*\/?$/ 
    }

    var valid = regexValues[element.id].test(element.value)
    
    if (valid) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.replace('d-block','d-none')

    }
    else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        element.nextElementSibling.classList.replace('d-none','d-block')
    }

    return valid

}
















