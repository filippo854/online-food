
class Products{
 constructor(){
  this.productsCenter = document.querySelector('.dishes-items')
 }

 async loadProducts() {
    try {
      const result = await fetch('./products.json')
      const data = await result.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  displayProducts(productsList){
   let singleProduct = ''
   productsList.map((product) => {
    singleProduct += `<div class="single-dish ${product.category}"> <a href="index-${product.category}-${product.id}.html">
    <div class="dish-img" style="background-image: url('${product.image}')">
    </div>
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <div class="price-and-btn">
    <h2>${product.price} zł</h2>
     <button class="add-btn" data-id=${product.id}>+ do koszyka</button>
    </div></a>
   </div>`
   })
   this.productsCenter.innerHTML = singleProduct
  }
}

export { Products }