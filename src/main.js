import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"


const cart = [];
const wishList = [];

console.log("Bem vindo ao seu carrinho de compras!\n")

const item1 = await createItem("monitor", 1200, 2)
const item2 = await createItem("teclado", 119.90, 1)

//adicionando itens ao carrinho
await cartService.addItem(cart, item1)
await cartService.addItem(wishList, item2)

//deletando itens do carrinho
// await cartService.deleteItem(cart, item1.name)

//reduzindo a  quantidade de um item do carrinho
await cartService.reduceQuantity(cart, 0)


//exibindo os itens do carrinho
await cartService.displayCart(cart, "cart")
await cartService.displayCart(wishList, "wishlist")


//calculando os totais do carrinho
await cartService.calculateTotal(cart)
await cartService.calculateTotal(wishList)




