import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { add } from '../redux/reducer/cartSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});

  const handleUpdate = () => {
    // localStorage.setItem("singleProduct", JSON.stringify(singleProduct));
    localStorage.setItem("id", singleProduct.id);
    localStorage.setItem("Product Name", singleProduct.productName);
    localStorage.setItem("desc", singleProduct.desc);
    localStorage.setItem("imgUrl", singleProduct.imgUrl);

    navigate("/update");

  };

  useEffect(() => {
    async function getSingleProduct() {

      try {
        const response = await axios.get(`https://67c7cfb2c19eb8753e7adb2a.mockapi.io/myproject/${id}`);
        console.log(response.data);
        setSingleProduct(response.data);
        // console.log("id", id);
      }
      catch (error) {
        console.log("error", error);
      }
    }
   
    getSingleProduct();
  }, [])

  async function handleDelete() {
    try {
      await axios.delete(`https://67c7cfb2c19eb8753e7adb2a.mockapi.io/myproject/${id}`);
      navigate("/");
    }
    catch (error) {
      console.log(error);
    }
  }

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log("Added to cart:", item);
    dispatch(add(item));
    toast.success("Product Added to Cart");
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between py-10">
        <h2 className='text-3xl font-bold '>Single Product</h2>
        <div className="flex gap-x-5">
          <button
            onClick={handleUpdate}
            className="bg-green-700 text-white px-4 py-2 font-semibold text-xl border-none rounded-md cursor-pointer"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-700 text-white px-4 py-2 font-semibold text-xl border-none rounded-md cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="">
        <div className="p-5 flex flex-col  items-center justify-center">



          <img src={singleProduct.imgUrl} alt="product" className="w-[500px] h-auto brightness-90 object-cover rounded-lg shadow-lg  transition-transform duration-400 hover:scale-110 hover:shadow-2xl hover:brightness-120" />
          <h2 className=" text-center text-blue-950 text-4xl py-3 font-extrabold">
            {singleProduct.productName}
          </h2>
          <p className="text-2xl pb-2 font-semibold">{singleProduct.desc}</p>
          <div className="flex gap-x-10">
            <button

              className="bg-green-700 text-white px-4 py-2 my-5 text-xl font-semibold rounded-md cursor-pointer"
              onClick={() => handleAdd(singleProduct)}>
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-700 text-white px-4 py-2 my-5 text-xl font-semibold rounded-md cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product