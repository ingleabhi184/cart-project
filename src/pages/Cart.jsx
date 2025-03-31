import React from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/reducer/cartSlice";

function Cart() {
  const { product } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("Removed from cart:", id);
    dispatch(remove({ id }));
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
          <h1 className="md:px-5 py-2 text-xl font-semibold">All Cart Products</h1>
          <div>
            <Link to="/">
              <button className="bg-green-700 cursor-pointer rounded-md font-bold text-xl text-white px-4 py-2">
                Go to Products
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full my-10">
          {product.length === 0 && (
            <h1 className="text-center font-bold text-4xl">No Product in Cart</h1>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5">
            {product.map((item, i) => (
              <div key={i} className="p-5 flex flex-col bg-[#eee] items-center justify-center">
                <img src={item.imgUrl} className="w-auto h-[500px] brightness-60 object-cover rounded-lg shadow-lg  transition-transform duration-400 hover:scale-110 hover:shadow-2xl hover:brightness-120" alt={item.productName} />
                <h2 className="text-center text-blue-950 text-2xl font-bold py-2">
                  {item.productName}
                </h2>
                <p className="text-2xl font-semibold pb-2">{item.desc}</p>
                <button
                  className="bg-red-700 justify-self-end text-white px-4 my-5 py-2 text-xl font-semibold rounded-md cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
