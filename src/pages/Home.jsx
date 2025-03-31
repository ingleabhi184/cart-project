import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { add } from '../redux/reducer/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Home() 
{
  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    async function getApi() 
    {
      try {
        const response = await axios.get("https://67c7cfb2c19eb8753e7adb2a.mockapi.io/myproject");
        setProductData(response.data);
      }
      catch (error) 
      {
        console.log(error);
      }
    }
    getApi();
  }, []);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log("Added to cart:", item);
    dispatch(add(item));
    toast.success("Product Added to Cart");
  };

  return (
    <>
      {/* Header */}
      <div className="bg-blue-50">
        <div className="w-11/12 mx-auto text-red-950 py-5 flex justify-between items-center">
          <h1 className="text-center text-blue-950 my-2 text-2xl font-bold">
            aMart
          </h1>
          <div>
            <Link to="create">
              <button className="bg-red-700 font-semibold rounded-md text-white text-xl px-4 py-2">
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl py-5 font-bold">All Products</h2>
        <marquee behavior="alternate" direction="left" scrollamount="20" className="text-2xl font-bold text-sky-500"> Welcome to aMart</marquee>
        <div className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {productsData.map((item, i) => (
              <div key={i} className="bg-[#eee] p-7 flex flex-col items-center justify-center rounded-lg ">

                {/* Product Image */}
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="w-[auto] h-[390px]brightness-60 object-cover rounded-lg shadow-lg  transition-transform duration-400 hover:scale-110 hover:shadow-2xl hover:brightness-120"
                />

                {/* Product Name */}
                <h2 className="text-center text-blue-950 text-2xl font-bold py-4">
                  {item.productName}
                </h2>

                {/* Product Description */}
                <p className="text-lg pb-4 font-semibold">{item.desc}</p>

                {/* Buttons */}
                <div className="mx-auto flex gap-x-5">
                  <Link to={`/product/${item.id}`}>
                    <button className="bg-blue-800 text-white text-xl px-4 py-2 cursor-pointer rounded-md font-semibold">
                      Show All Detail
                    </button>
                  </Link>

                  <button
                    onClick={() => handleAdd(item)}
                    className="bg-green-700 text-white px-4 py-2 cursor-pointer rounded-md text-xl font-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
