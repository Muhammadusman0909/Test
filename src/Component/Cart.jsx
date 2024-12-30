import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, checkout, subtractProduct } from "../features/counter/counterSlice";


const Cart = ({ setisCartOpen, isCartOpen }) => {
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  console.log("my cart", cart);

  const handleClose = () => {
    setisCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    setisCartOpen(!isCartOpen);

    dispatch(checkout())
 
  };

  const handleSubtract = (product) => {
    dispatch(subtractProduct(product));
  };

  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  const returnPrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item?.price * item?.quantity;
    });

    return total;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
      {/* Modal Content */}
      <div
        className="fixed right-4 top-20 bg-white rounded-lg shadow-lg w-80 p-4 z-50 overflow-y-auto"
        style={{ maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h5 className="text-xl font-medium">Your Cart</h5>
          <button
            onClick={handleClose}
            className="text-black font-bold text-lg"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="mt-4 space-y-4">
          {cart.length > 0 ? (
            cart.map((v) => (
              <div
                key={v.id}
                className="flex items-center bg-white shadow rounded-lg border border-green-200 p-4"
              >
                <img
                  src={v.logo}
                  alt={v.productName}
                  className="w-16 h-28 rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {v.productName}
                  </h3>
                  <p className="text-gray-600 text-sm">{v.productDetails}</p>
                  <p className="text-gray-800 font-bold text-sm">
                    PKR {v.price}
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    {v.quantity > 0 ? (
                      <button
                        onClick={() => handleSubtract(v)}
                        className="bg-gray-200 p-1 rounded-full"
                      >
                        -
                      </button>
                    ) : null}
                    <div className="text-lg font-semibold">{v.quantity}</div>
                    <button
                      onClick={() => handleAdd(v)}
                      className="bg-gray-200 p-1 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-2 text-sm text-gray-700">
                    Total: PKR {v.price * v.quantity}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-semibold">Total: {returnPrice()} PKR</p>
          <button
            onClick={handleCheckout}
            className="btn btn-primary bg-green-500 text-white rounded-md p-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
