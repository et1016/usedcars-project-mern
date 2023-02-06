class CartService {
  getCartLocalStorage() {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  }
}

export default new CartService();
