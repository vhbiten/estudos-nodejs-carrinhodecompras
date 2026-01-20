async function addItem(userCart, item) {
    userCart.push(item)
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }
}

async function reduceQuantity(userCart, index){
    const deleteIndex = index -1
    if (index => 0 && userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

async function calculateTotal(userCart, type = "cart") {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)

    if (type === "cart"){
        console.log(`Total do carrinho: ${result}`)
    }else {
        console.log(`Total da lista de desejos: ${result}`)
    }
    
}

async function displayCart(userCart, type = "cart") {
    if (type === "cart"){
        console.log("### Itens do carrinho: ###\n")
    }else {
        console.log("### Itens da Lista de desejos: ###\n")
    }

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()} \n`)
    })
}



export {
    addItem,
    deleteItem,
    reduceQuantity,
    calculateTotal,
    displayCart
}