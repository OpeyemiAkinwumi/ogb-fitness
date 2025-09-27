const ROOT_URL = "http://127.0.0.1:8000";

// Create a function that gets the products from the api

export async function getProducts() {
  const response = await fetch(`${ROOT_URL}/products/`);

  //   if (!data.response) {
  if (!response.ok) {
    throw new Error("Error getting the products");
  }

  const data = await response.json();

  return data;
}
