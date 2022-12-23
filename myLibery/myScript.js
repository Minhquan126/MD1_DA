class UserName{
    name
    email
    password

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setEmail(email){
        this.email = email
    }
    getEmail(){
        return this.email
    }
    setPassword(password){
        return this.password
    }
}


let ischeck;
let user;
let arr = JSON.parse(localStorage.getItem('listUser'))
if (arr == null) {
    arr = []
}

function validate() {
    let userName = document.getElementById('username').value
    let yourEmailInput = document.getElementById('useremail').value
    let yourPasswordInput = document.getElementById('userpaaword').value
    let repeatPasswordInput = document.getElementById('repeatpassword').value
let check=true;
    if (userName.trim() === '') {
        document.getElementById('checkname').innerText = 'The name is required!'
        check = false
    } else  if (validateUserName(userName)){
        document.getElementById('checkname').innerText = 'the name is exist'
    }
    else {
        document.getElementById('checkname').innerText = ''
    }
    let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (yourEmailInput.trim() === '') {
        document.getElementById('checkmail').innerText = 'The email is required!'
        check = false
    } else if (!checkMail.test(yourEmailInput)) {
        document.getElementById('checkmail').innerText = 'The email invalid!'
        check = false
    } else {
        document.getElementById('checkmail').innerText = ''
    }
    if (yourPasswordInput.trim() === '') {
        document.getElementById('checkpassword').innerText = 'The password is required!'
        check = false
    } else if (yourPasswordInput.length < 6) {
        document.getElementById('checkpassword').innerText = 'The password is short!'
        check = false
    } else {
        document.getElementById('checkpassword').innerText = ''
    }
    if (repeatPasswordInput !== yourPasswordInput) {
        document.getElementById('checkrepeatpass').innerText = 'The repeat password not match!'
        check = false
    } else {
        document.getElementById('checkrepeatpass').innerText = ''
    }
    if(check){
        ischeck = true
        user = new UserName(userName,yourEmailInput,yourPasswordInput)
    } else {
        ischeck = false
    }
    console.log('check ===================',check)
    console.log('ischeck====',ischeck)
}

function submitData() {

    if (ischeck) {
        arr.push(user);
        localStorage.setItem('listUser',JSON.stringify(arr))
        location.href = '../index.html'
    }
}
function validateUserName(userName) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].name == userName){
            return true
        }
    } return false
    let namekey = arr[i].name
    if (namekey!==null){
        document.getElementById('login').innerText = ''
        document.getElementById('rigister').innerText = ''
        document.getElementById('dropdow').innerText = namekey
    }
}

