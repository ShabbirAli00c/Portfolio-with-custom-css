import React from "react";
import { CiStar } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function ProductList() {
  return (
    <div className="bg-gradient-to-r from-black to-grey-900 w-full min-h-screen gap-12 flex-wrap flex justify-center items-center mb-3 mt-3">
      {/* //Card1 */}
      <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0">
        <img
          src="images/b1.jpg"
          alt=""
          className="h-70 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className=" font-bold text-lg mb-2">Maxican Burger</h2>
          <span className="text-xl font-semibold">Rs:300.00</span>
          <div className=" flex items-center gap-2">
            <span className="text-sm line-through opacity-75">Rs:400.00</span>
            <span className="text-sm font-bold p-2 bg-yellow-500 rounded-s-2xl text-gray-600">
              Save as 10%
            </span>
          </div>
          <div className=" flex items-center mt-2 gap-1">
          <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
          <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 ">Most of us have learned in school to give feedback in the hamburger format.</p>
        </div>
        <div className=" flex items-center justify-center gap-2 mb-2">
          <button className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold">Buy Now</button>
          <FaShoppingCart className="w-6 h-6 text-yellow-400 hover:text-gray-600" />

          <button className="px-3 py-1 rounded-lg w-10 h-10">
          <FaHeart className="w-6 h-6 text-yellow-400 hover:text-red-600" />
          </button>
        </div>
      </div>
      {/* //Card2 */}

      <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0">
        <img
          src="images/b2.jpg"
          alt=""
          className="h-70 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className=" font-bold text-lg mb-2">Fixing Burger</h2>
          <span className="text-xl font-semibold">Rs:400.00</span>
          <div className=" flex items-center gap-2">
            <span className="text-sm line-through opacity-75">Rs:500.00</span>
            <span className="text-sm font-bold p-2 bg-yellow-500 rounded-s-2xl text-gray-600">
              Save as 10%
            </span>
          </div>
          <div className=" flex items-center mt-2 gap-1">
          <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
          <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 ">The best burgers offer a combination of tastes and sweet, sour, salt with a bit of crunch</p>
        </div>
        <div className=" flex items-center justify-center gap-2 mb-2">
          <button className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold">Buy Now</button>
          <FaShoppingCart className="w-6 h-6 text-yellow-400 hover:text-gray-600" />

          <button className="px-3 py-1 rounded-lg w-10 h-10">
          <FaHeart className="w-6 h-6 text-yellow-400 hover:text-red-600" />
          </button>
        </div>
      </div>
      {/* //Card3 */}
      <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 lg:mt-0">
        <img
          src="images/b3.jpg"
          alt=""
          className="h-70 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className=" font-bold text-lg mb-2">Family Burger</h2>
          <span className="text-xl font-semibold">Rs:500.00</span>
          <div className=" flex items-center gap-2">
            <span className="text-sm line-through opacity-75">Rs:600.00</span>
            <span className="text-sm font-bold p-2 bg-yellow-500 rounded-s-2xl text-gray-600">
              Save as 10%
            </span>
          </div>
          <div className=" flex items-center mt-2 gap-1">
          <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
          <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 ">A great burger starts with high-quality, fresh ground beef. The best burgers</p>
        </div>
        <div className=" flex items-center justify-center gap-2 mb-2">
          <button className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 font-semibold">Buy Now</button>
          <FaShoppingCart className="w-6 h-6 text-yellow-400 hover:text-gray-600" />

          <button className="px-3 py-1 rounded-lg w-10 h-10">
          <FaHeart className="w-6 h-6 text-yellow-400 hover:text-red-600" />
          </button>
        </div>
      </div>
    
    
    </div>
    
    
  );
}

export default ProductList;
