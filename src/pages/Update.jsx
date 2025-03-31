import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify';

function Update() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(
    {
      id: localStorage.getItem("id"),
      productName: localStorage.getItem("Product Name"),
      desc: localStorage.getItem("desc"),
      imgUrl: localStorage.getItem("imgUrl"),
    }
  );

  function handleChange(e) {

    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://67c7cfb2c19eb8753e7adb2a.mockapi.io/myproject/${product.id}`, product);
      toast.success("Product Updated Successfully");
      navigate("/");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update product");
    }
  };

  return (
    <div>
      {/* header */}
      <div className="bg-blue-50">
        <div className="w-11/12 mx-auto text-red-950 py-5 flex justify-between items-center">
          <h1 className="text-center text-blue-950 my-2 text-xl">
            CRUD Operation
          </h1>
          <div>
            <Link to="/">
              <button className="bg-blue-700 text-white px-4 py-2 font-semibold border-none rounded-md text-2xl">
                All Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-11/12 mx-auto ">
        <div className="flex flex-col items-center mx-auto w-8/12 my-10">
          <h2 className=" text-center text-xl py-2 font-bold">
            Update A Product
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text "
              name="productName"
              placeholder="Enter Product Name"
              className="border border-red-500 mb-3 px-2 w-[300px]"
              value={product.productName}
              onChange={handleChange}

            />
            <textarea
              rows="4"
              type="text"
              name="desc"
              placeholder="Enter Product Description"
              className="border border-red-500 mb-3 px-2 w-[300px]"
              value={product.desc}
              onChange={handleChange}
            />
            <input
              type="text"
              name="imgUrl"
              placeholder="Enter Product image url"
              className="border border-red-500 mb-3 px-2 w-[300px]"
              value={product.imgUrl}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-green-700 w-[100px] mx-auto mb-4 text-white px-4 py-2 border-none rounded-md cursor-pointer font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update