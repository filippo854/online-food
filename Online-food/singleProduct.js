class SingleProductDisplay{
 constructor(){
  this.productSidePage = document.querySelector('.single-product-side-page')
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

  displaySingleProduct(productsList){
   let singleProductSidePage = ''
   singleProductSidePage += `<img src="${productsList[0].image}" alt="" class="single-product-side-page-img">
   <div class="single-product-info">
    <h1>${productsList[0].name}</h1>
    <h2>${productsList[0].description}</h2>
    <p>${productsList[0].moreDescription}</p>
   </div>`
   
   this.productSidePage.innerHTML = singleProductSidePage
  }
}

document.addEventListener('DOMContentLoaded', () => {

 const singleProductDisplay = new SingleProductDisplay()

 singleProductDisplay.loadProducts().then((data)=>{
  singleProductDisplay.displaySingleProduct(data)
 })


})