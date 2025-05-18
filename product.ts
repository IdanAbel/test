const productsData = {
  belleza: [
    {
      name: "Crema Facial Hidratante",
      description: "Hidrata y revitaliza tu piel.",
      price: "€19.99",
      link: "#",
      images: [
        "https://via.placeholder.com/300x200?text=Crema+1",
        "https://via.placeholder.com/300x200?text=Crema+2"
      ]
    },
    {
      name: "Sérum Antiedad",
      description: "Reduce arrugas y líneas de expresión.",
      price: "€29.99",
      link: "#",
      images: [
        "https://via.placeholder.com/300x200?text=Serum+1",
        "https://via.placeholder.com/300x200?text=Serum+2"
      ]
    }
  ],
  moda: [
    {
      name: "Camiseta Casual",
      description: "Cómoda y moderna para cualquier ocasión.",
      price: "€14.99",
      link: "#",
      images: [
        "https://via.placeholder.com/300x200?text=Camiseta+1"
      ]
    }
  ],
  tecnologia: [
    {
      name: "Auriculares Inalámbricos",
      description: "Sonido claro y sin cables.",
      price: "€49.99",
      link: "#",
      images: [
        "https://via.placeholder.com/300x200?text=Auriculares+1",
        "https://via.placeholder.com/300x200?text=Auriculares+2"
      ]
    }
  ]
};

function createProductCard(product, index) {
  const carouselId = `carousel${index}`;
  return `
    <div class="col-md-4">
      <div class="card shadow-sm">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${product.images.map((img, i) => `
              <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100" alt="${product.name}">
              </div>`).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text fw-bold">${product.price}</p>
          <a href="${product.link}" target="_blank" class="btn btn-primary w-100">Comprar</a>
        </div>
      </div>
    </div>
  `;
}
