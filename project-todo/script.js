const btnSend = document.querySelector(".btn_send")
let arr = []
const editName = document.querySelector('.edit-name')
const editLastName = document.querySelector('.edit-LastName')
const btnEdit = document.querySelector('.btn_edit')
const editPassword = document.querySelector('.edit-Password')
const modal = document.querySelector('.wrapper_modal')
btnSend.addEventListener('click', createUser)
const ul = document.querySelector("ul")




function createUser() {
    const lastName = document.querySelector(".last_name")
    const firstName = document.querySelector(".first_name")
    const password = document.querySelector(".pass")
    const h2 = document.querySelector("h2")
    const form = document.querySelector(".form__page")
    const objUser = {
        lastNameUser: lastName.value,
        firstNameUser: firstName.value,
        passUser: password.value
    }
    if (lastName.value == '' && firstName.value == '' && password.value == '') {

        h2.style.color = 'green'
        h2.innerHTML = 'надо заполнить поля'
    } else if (lastName.value !== '' && firstName.value !== '' && password.value !== '') {
        h2.innerHTML = ''
        arr.push(objUser)
        createList(arr)
        form.reset()
    }
}





function createTempalte(name, pass, lastName, id) {
    const li = document.createElement('li')
    li.id = id
    const template =
        `
    <span>${name}</span>
    <span>${pass}</span>
    <span>${lastName}</span>
    <button class = "btn_del">del</button>
    <button class="create__Modal-Form">open modal</button>
    `
    li.innerHTML = template
    return li
}





ul.addEventListener('click', listenerCreateFunctionUser)

function listenerCreateFunctionUser(event) {
    const elemPage = event.target
    if (elemPage.classList.contains('btn_del')) {
        delUser(elemPage)
    } else if (elemPage.classList.contains('create__Modal-Form')) {
        modal.classList.remove('none')
        editUsers(elemPage)
        modal.id = elemPage.parentNode.id
    }
}





function delUser(elemPage) {
    const parentBtn = elemPage.parentNode
    const idPageLi = parentBtn.id
    const filterArr = arr.filter((item, index) => {
        if (idPageLi == index) {
            return false
        } else {
            return true
        }
    })
    arr = filterArr
    createList(arr)
}






btnEdit.addEventListener('click', (event) => {
    event.preventDefault()
    id = event.target.parentNode.parentNode.parentNode.parentNode.id
    arr[id].lastNameUser = editLastName.value
    arr[id].firstNameUser = editName.value
    arr[id].passUser = editPassword.value
    createList(arr)
    modal.classList.add('none')
})





function editUsers(elemPage, btn) {
    const btnModalClose = document.querySelector('.btn_modal-close')
    const id = elemPage.parentNode.id
    btnModalClose.addEventListener('click', (event) => {
        event.preventDefault()
        modal.classList.add('none')
    })
    editName.value = arr[id].firstNameUser
    editLastName.value = arr[id].lastNameUser
    editPassword.value = arr[id].passUser
}






function createList(data) {
    ul.innerHTML = ''
    data.forEach((item, index) => {
        const resultLi = createTempalte(item.lastNameUser, item.firstNameUser, item.passUser, index)
        ul.append(resultLi)
    });
}