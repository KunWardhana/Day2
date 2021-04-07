
// var myName = "Kun"
// myName = "Chad"
// console.log(myName)
// // const gabisa diubah
// const myCar = "Cepet"
// // myCar = "Honda Freed"
// console.log(myCar)
// ambil dari html
// const cart = document.getElementById('cart');


// function addProduct(name , Category){
//     return{
//         name: name,
//         categore: Category
//     }
// }

// var getProduct = addProduct("ip12", "Smartphone")

// console.log(getProduct)

// cart.innerHTML = `Product 1:: ${getProduct.name}, category ${getProduct.categore} 

// es6

const cart = document.getElementById('cart');


function addProduct(name , Category){
    return{
        name, Category
    }
}

var getProduct = addProduct("ip12", "Smartphone")
var product = addProduct("sp", "ip")

console.log(getProduct)

cart.innerHTML = `Product 1: ${getProduct.name} category ${getProduct.categore} `
cart.innerHTML = `Product 1:: ${product.name}, category ${product.categore} `
