
fetch('../data/productos.json')
  .then(response => response.json())
  .then(products => {
    console.log(products)
  })