
// import { Hand } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

function Create() {

  const [product, setProduct] = useState({
    productName: "",
    desc: "",
    imgUrl: ""
  })

  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);


    try {
      await axios.post("https://67c7cfb2c19eb8753e7adb2a.mockapi.io/myproject", product)
      setProduct({
        productName: "",
        desc: "",
        imgUrl: ""
      })

      navigate("/");

    }
    catch (error) {
      console.log("error :", error);
    }
  }

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
              <button className="bg-red-700 text-white px-4 py-2 border-none rounded-md font-semibold text-2xl cursor-pointer">
                All Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-11/12 mx-auto ">
        <div className="flex flex-col items-center mx-auto w-full sm:w-8/12 my-10">
          <h2 className=" text-center text-xl py-2 font-bold">Add A Product</h2>
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
              className="bg-green-700 w-[100px] mx-auto mb-4 text-white px-4 py-2 cursor-pointer rounded-md text-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create