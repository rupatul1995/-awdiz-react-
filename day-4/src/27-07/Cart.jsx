import React, { useEffect, useState } from "react";
import Api from "../axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();
  console.log(products, "products");
  async function getAllCartProducts() {
    setLoading(true);
    try {
      const response = await Api.get("/user/get-all-cart-product");
      if (response.data.success) {
        setProducts(response.data.cartProducts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "error");
    }
  }

  async function BuyProducts() {
    setLoading(true);
    try {
      const response = await Api.post("/user/buy-products");
      if (response.data.success) {
        toast.success(response.data.message);
        router('/order-page'); // Redirect to order details page
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    getAllCartProducts();
  }, []);
  return (
    <div>
      <h1>Cart Products</h1>
      {loading ? (
        <div>
          <h1>Loading...</h1>
         
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {products.map((product) => (
            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              // onClick={() => router(`/product/${product._id}`)}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src={product.image}
              />
              <p>Title : {product.name}</p>
              <p>Price : {product.price}/-</p>

        <button onClick={BuyProducts}>Place Order</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;