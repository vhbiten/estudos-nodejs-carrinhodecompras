import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"


const cart = [];
const wishList = [];

console.log("Bem vindo ao seu carrinho de compras!\n")

//lista de itens
const item1 = await createItem("monitor", 1200, 2)
const item2 = await createItem("teclado", 119.90, 1)
const item3 = await createItem("cpu", 1800, 1)
const item4 = await createItem("memoria", 530, 1)
const item5 = await createItem("fan", 230, 1)
const item6 = await createItem("placa de video", 3200, 1)

//adicionando itens ao carrinho
await cartService.addItem(cart, item1)
await cartService.addItem(cart, item3)
await cartService.addItem(cart, item5)
await cartService.addItem(wishList, item2)
await cartService.addItem(wishList, item4)
await cartService.addItem(wishList, item6)


//deletando itens do carrinho
await cartService.deleteItem(cart, item1.name)

//aumentando a quantidade de um item
await cartService.addQuantity(cart, 1)

//reduzindo a  quantidade de um item do carrinho
await cartService.reduceQuantity(cart, 0)


//exibindo os itens do carrinho
await cartService.displayCart(cart, "cart")
await cartService.displayCart(wishList, "wishlist")


//calculando os totais do carrinho
await cartService.calculateTotal(cart, "cart")
await cartService.calculateTotal(wishList, "wishlist")




