import { Products } from './displayProducts.js'

class FilterProducts{
constructor(){
 this.productsCenter = document.querySelector('.dishes-items')
 this.categories = document.querySelectorAll('.category')
}

clickCategories(productsList){
 this.categories.forEach((category)=>{
  
  category.addEventListener('click', (e)=>{
   this.categories.forEach((category)=>{
    category.classList.remove('category-active')
   })
   e.currentTarget.classList.add('category-active')
   if(e.currentTarget.classList[0] == "category-all"){
    
    const products = new Products()
    products.displayProducts(productsList)
   }
   else if(e.currentTarget.classList[0] == "category-burgers"){
    const newArray = productsList.filter((product)=>{
    return product.category == 'burger'
 })
    const products = new Products()
    products.displayProducts(newArray)
   }
   else if(e.currentTarget.classList[0] == "category-salad"){
    const newArray = productsList.filter((product)=>{
    return product.category == 'salad'
 })
    const products = new Products()
    products.displayProducts(newArray)
   }
   else if(e.currentTarget.classList[0] == "category-pasta"){
    const newArray = productsList.filter((product)=>{
    return product.category == 'pasta'
 })
    const products = new Products()
    products.displayProducts(newArray)
   }
   else if(e.currentTarget.classList[0] == "category-addons"){
    const newArray = productsList.filter((product)=>{
    return product.category == 'addons'
 })
    const products = new Products()
    products.displayProducts(newArray)
   }
   else if(e.currentTarget.classList[0] == "category-drinks"){
    const newArray = productsList.filter((product)=>{
    return product.category == 'drinks'
 })
    const products = new Products()
    products.displayProducts(newArray)
   }
   
  })
 })
}




}

export {FilterProducts}