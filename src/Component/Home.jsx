import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import model from "../assets/images/model.png";
import model2 from "../assets/images/model2.png";
import jeansModal from "../assets/images/jeansModal.png";
import jeansModal2 from "../assets/images/JeansModalBlue.png";
import jacketmodel from "../assets/images/jacketModelBlack.png";

import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../features/counter/counterSlice";

const Home = ({ searchQuery }) => {
  const cart = useSelector((state) => state.counter.cart);

  const optionSelected = useSelector((state) => state.counter.optionSelected);
  console.log("my", optionSelected);

  const dispatch = useDispatch();
  console.log(cart, "cart now");

  const [itemAdded, setitemAdded] = useState([]);

  const handleAddToCart = (product, index) => {
    dispatch(addTocart({ product, index }));

    setitemAdded((prev) => [...prev, product.id]);
  };

  const [productDetails, setproductDetails] = useState([
    {
      id: uuidv4(),
      productName: "Classic Denim Shirt",
      productDetails:
        "A lightweight and breathable denim shirt, perfect for any occasion.",
      price: 4200,
      quantity: 0,
      logo: jeansModal2,
      type: "hoodie",
    },
    {
      id: uuidv4(),
      productName: "Striped Casual Denim Shirt",
      productDetails:
        "A striped denim shirt with a relaxed fit, perfect for summer wear.",
      price: 4600,
      quantity: 0,
      logo: jeansModal,
      type: "hoodie",
    },
    {
      id: uuidv4(),
      productName: "Vintage Denim Coat",
      productDetails:
        "A classic denim coat with a vintage design, ideal for colder seasons.",
      price: 6000,
      quantity: 0,
      logo: model,
      type: "jacket",
    },
    {
      id: uuidv4(),
      productName: "Casual Denim Jacket",
      productDetails:
        "A stylish denim jacket, great for layering and a timeless fashion statement.",
      price: 5000,
      quantity: 0,
      logo: jacketmodel,
      type: "jacket",
    },
    {
      id: uuidv4(),
      productName: "Premium Denim Jacket",
      productDetails:
        "A premium-quality denim jacket with a trendy and versatile design.",
      price: 5500,
      quantity: 0,
      logo: jacketmodel,
      type: "jacket",
    },
    {
      id: uuidv4(),
      productName: "Classic Denim Jeans",
      productDetails:
        "Durable and comfortable denim jeans, perfect for casual and everyday wear.",
      price: 4500,
      quantity: 0,
      logo: jeansModal,
      type: "jeans",
    },
    {
      id: uuidv4(),
      productName: "Slim Fit Jeans",
      productDetails:
        "Modern slim-fit jeans designed for a sleek and tailored appearance.",
      price: 4800,
      quantity: 0,
      logo: jeansModal,
      type: "jeans",
    },
    {
      id: uuidv4(),
      productName: "Sports Denim Tank Top",
      productDetails:
        "Lightweight and breathable denim tank top, ideal for workouts and outdoor activities.",
      price: 3300,
      quantity: 0,
      logo: jeansModal,
      type: "hoodie",
    },
    {
      id: uuidv4(),
      productName: "Stylish Polo Shirt",
      productDetails:
        "A modern polo shirt with a clean look, suitable for both casual and semi-formal events.",
      price: 3500,
      quantity: 0,
      logo: model2,
      type: "hoodie",
    },
    {
      id: uuidv4(),
      productName: "Classic Denim Hoodie",
      productDetails:
        "A cozy hoodie with a denim finish, combining warmth with style.",
      price: 5300,
      quantity: 0,
      logo: model2,
    },
  ]);

  const filteredProducts = productDetails.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     <div className="products flex gap-4 p-4 flex-wrap justify-center">
  {filteredProducts.map((v, idx) => {
    return (
      <div
        key={v.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden w-72 sm:w-80 md:w-64 xl:w-72"
      >
        {/* Image at the top */}
        <img
          src={v.logo}
          alt="Product"
          className="w-full object-cover"
        />
        {/* Product details */}
        <div className="p-4 grid grid-rows-[auto,1fr] gap-4">
          {/* Product Name and Details */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {v.productName}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {v.productDetails}
            </p>
            <p className="text-gray-800 font-bold mt-4 text-lg">
              PKR {v.price}
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-end">
            {cart?.find((value) => value?.id === v.id) ? (
              <button className="bg-gray-300 text-white py-2 px-4 w-full rounded-lg ">
                Item Added
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(v, idx)}
                className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>

    </>
  );
};

export default Home;
