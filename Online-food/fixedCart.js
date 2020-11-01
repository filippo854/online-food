class FixedCart {
 
 setFixedCart(){
  window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const headerHeight = document.querySelector('header').getBoundingClientRect().height
  if (scrollHeight > headerHeight) {
    document.querySelector('.cart').classList.add('fixed-cart')
  } 
  else {
    document.querySelector('.cart').classList.remove('fixed-cart')
  }
  
})
}
}

export { FixedCart }