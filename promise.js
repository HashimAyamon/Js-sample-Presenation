async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach(product => {
      console.log(product);
    });

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
fetchProducts();
