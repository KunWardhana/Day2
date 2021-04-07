
var myName = "Kun"
myName = "Chad"
console.log(myName)

// const gabisa diubah
const myCar = "Cepet"
// myCar = "Honda Freed"
console.log(myCar)

// ambil dari html

const user = document.getElementById('user');

// es5

const user_logged_in = "Marcell"
// user.innerHTML = "Selamat datang, " + user_logged_in;


//es6
user.innerHTML = `Selamat login, ${user_logged_in}`;