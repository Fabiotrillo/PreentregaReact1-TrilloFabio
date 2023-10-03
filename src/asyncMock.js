  const products = [
    { id: 1, name: 'Percha de Alambre', description: 'Práctica y económica, la percha de alambre ofrece simplicidad y ligereza para colgar tu ropa, siendo ideal para un uso cotidiano y una organización eficiente.', img: "../img/producto01.jpg", category: "perchas", price: 500 },
    { id: 2, name: 'Percha de Plastico', description: 'Ligera y versátil, la percha de plástico es práctica y funcional, perfecta para organizar diversas prendas en tu armario de forma sencilla.', img: "../img/producto02.png", category: "perchas", price: 750 },
    { id: 3, name: 'Percha de Terciopelo', description: 'Suave al tacto y antideslizante, la percha de terciopelo es ideal para prendas delicadas, manteniendo la ropa en su lugar y sin marcas.', img: "../img/producto03.png", category: "perchas", price: 560 },
    { id: 4, name: 'Percha de Madera', description: 'Elegante y duradera, la percha de madera brinda un toque clásico y resistente para organizar y mantener tus prendas en buen estado.ripción del Producto 4', img: "../img/producto04.jpg", category: "perchas", price: 400 },
    { id: 5, name: 'Percha de Plastico', description: 'Ligera y versátil, la percha de plástico es práctica y funcional, perfecta para organizar diversas prendas en tu armario de forma sencilla.', img: "../img/producto05.jpg", category: "perchas", price: 800 },
    { id: 6, name: 'Maniquie Hombre Fibra', description: 'Maniquí de fibra de alta calidad, ideal para exhibir prendas con elegancia y realismo. Su durabilidad y acabado detallado lo convierten en una elección excepcional para destacar tus diseños.', img:"../img/producto07.jpg", category:"maniquies", price: 900 },
    { id: 7, name: 'Maniquie Mujer Fibra', description: 'Maniquí de fibra de alta calidad, ideal para exhibir prendas con elegancia y realismo. Su durabilidad y acabado detallado lo convierten en una elección excepcional para destacar tus diseños..', img:"../img/producto08.jpeg", category:"maniquies", price: 900 },
    { id: 8, name: 'Maniquie Mujer Fibra', description: 'Maniquí de fibra de alta calidad, ideal para exhibir prendas con elegancia y realismo. Su durabilidad y acabado detallado lo convierten en una elección excepcional para destacar tus diseños.', img:"../img/producto09.jpg", category:"maniquies", price: 900 },
    { id: 9, name: 'Maniquie Mujer Fibra', description: 'Maniquí de fibra de alta calidad, ideal para exhibir prendas con elegancia y realismo. Su durabilidad y acabado detallado lo convierten en una elección excepcional para destacar tus diseños.', img:"../img/producto10.jpg", category:"maniquies", price: 900 }
  ];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 2000);  
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    const filteredProducts = products.filter((product) => product.category === category);
    if (filteredProducts.length > 0) {
      resolve(filteredProducts);
    } else {
      reject(new Error('No se encontraron productos para esa categoría.'));
    }
  });
};




