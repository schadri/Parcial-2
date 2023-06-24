const productsContainer = document.getElementById("products-container")

const getProductTemplate = (image, cardTitle, cardPrice, cardText) => `
  <div id="card" class="col col-6 col-lg-4 col-xl-4">
    <div class="card">
      <div class="card-eye">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-eye"></i>
        </button>
      </div>
      <img
        class="card-img-top"
        src="${image}"
        alt="Producto 1"
      />
      <div class="card-body">
        <h5 class="card-title">${cardTitle}</h5>
        <p class="card-text">${cardText}</p>
        <p class="card-price">$${cardPrice}</p>
      </div>
    </div>
  </div>
`;

const getProductContainerTemplate = (categoryName, products) => `
<div class="mt-5">
  <h3>${categoryName}</h3>
  <div class="row">${products}</div>
</div>
`;

fetch('./data/productos.json')
  .then(response => response.json())
  .then(data => {
    Object.keys(data.categories).forEach(category => {
      const thisCategory = data.categories[category];
      const categoryName = thisCategory.name
      let categoryProducts = ``;
      thisCategory.data.forEach(product => {
       categoryProducts += getProductTemplate(
          product.image, 
          product.name, 
          product.price,
          product.description
        )  
      })
      const formatedCategory = getProductContainerTemplate(categoryName, categoryProducts)
      productsContainer.innerHTML += formatedCategory;
    });

  })