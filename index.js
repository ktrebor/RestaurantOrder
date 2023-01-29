import { menuArray } from "./data.js"

let orderEl = document.getElementById('order')

document.addEventListener('click', function(e){
    if (e.target.dataset.addButton) {
        handleAddProduct(e.target.dataset.addButton)
    }
})

let orderArray = []

function handleAddProduct(productId) {
    productId = Number(productId)
    const targetProductObj = menuArray.filter(function(product){
        return product.id === productId
    })[0]

    if (orderArray.includes(targetProductObj)) {
        targetProductObj.quantity++
    } else {
        targetProductObj.quantity = 1
        orderArray.push(targetProductObj)
    }
    getOrders()
}

function getOrders() {
    let orders = ''
    console.log(orderArray)
    orderArray.forEach(function(order){
        orders += `
            <div class="product-order">
                <p class="product-title">${order.name} <span>x ${order.quantity}</span> <span data-remove="${order.id}">remove</span></p>
                <p class="product-price">${order.price * order.quantity}$</p>
            </div> 
        `
    }) 
    return orders 
}

function getProducts() {
    let products = ''

    menuArray.forEach(function(product){
        products += `
            <div class="product">
                <p id="product-emoji" class="product-emoji">${product.emoji}</p>
                <div class="product-details">
                    <h3 id="product-title" class="product-title">${product.name}</h3>
                    <p id="product-ingredients" class="product-ingredients">${product.ingredients}</p>
                    <p id="product-price" class="product-price">${product.price}$</p>
                </div>
                <button data-add-button="${product.id}" class="add-product">+</button>
            </div>
        `
    })
    return products
}

function renderProducts() {
    document.getElementById('products').innerHTML = getProducts()
}

renderProducts()