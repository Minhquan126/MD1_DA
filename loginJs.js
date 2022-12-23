let arr = JSON.parse(localStorage.getItem('listUser'))
function login(){
    let check = false
   let userName = document.getElementById('username').value
   let password = document.getElementById('userpassword').value
    if (userName.trim()==''||password.trim()==''){
        document.getElementById('checkpassword').innerText = 'ten dang nhap, mat khau khong duoc de trong'
    } else {
        for (let i = 0; i < arr.length; i++) {
         if (arr[i].username==userName&&arr[i].password==password)
             localStorage.setItem('user'),JSON.stringify(arr[i])
            check = true
            break
        }
        if (check){
            location.href = 'index.html'
        }
    }
}