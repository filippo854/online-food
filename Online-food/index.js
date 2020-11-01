import { FixedCart } from './fixedCart.js'
import { Products } from './displayProducts.js'
import { FilterProducts } from './filterProducts.js'



document.addEventListener('DOMContentLoaded', () => {
  const fixedCart = new FixedCart()
  const products = new Products()
  const filterProducts = new FilterProducts()
 

  fixedCart.setFixedCart()
  products.loadProducts().then((data)=>{
    products.displayProducts(data)
    filterProducts.clickCategories(data)
  })
  
 
 
})

