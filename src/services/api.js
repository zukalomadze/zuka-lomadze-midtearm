export class API_SERVICE {
  static async getProductData({ quantity = 20 }) {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/products?_quantity=${quantity}`
      );
      const result = await response.json();
      console.log(result)
      return result;
    } catch (error) {
      console.trace(error);
    }
  }
}
export default API_SERVICE;
