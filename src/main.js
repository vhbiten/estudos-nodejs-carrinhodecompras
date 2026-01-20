import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"


const cart = [];
const wishList = [];

console.log("Bem vindo ao seu carrinho de compras!\n")

const item1 = await createItem("monitor", 1200, 2)
const item2 = await createItem("teclado", 119.90, 1)

await cartService.addItem(cart, item1)
await cartService.addItem(wishList, item2)

console.log("Total do carrinho: ")
await cartService.calculateTotal(cart)

console.log("Total da Lista de desejos: ")
await cartService.calculateTotal(wishList)




