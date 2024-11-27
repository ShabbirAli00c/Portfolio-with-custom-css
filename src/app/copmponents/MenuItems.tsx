import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const prductImages = [
    "https://media.istockphoto.com/id/1247815554/photo/big-tasty-hamburger-or-cheeseburger-on-black-background.jpg?s=612x612&w=0&k=20&c=gOncSxn60rF_bK_6lXUtN4EU8Qa1zfbAL7aVzqL_2ao=",
    "https://png.pngtree.com/background/20230613/original/pngtree-big-food-burger-in-front-of-dark-background-picture-image_3422899.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveXQ3xO991-qp2AR6B1n0aZU1YTcNmsqbvxUjqjYvFWLGgMYfYveqKIOehUD0e2iTibI&usqp=CAU",
    "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-tasty-burger-sitting-down-in-a-black-background-with-a-slice-image_2892637.jpg",
    "https://img.freepik.com/premium-photo/hamburger-with-yellow-cheeseburger-top-it_939652-16732.jpg?semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/burger-black-background-menu_127425-580.jpg",
  ];
  return (
    <div className=" relative text-center p-10">
      <div
        className=" absolute inset-0"
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20230413/original/pngtree-food-burger-juicy-and-delicious-background-picture-image_2422702.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now...!</h1>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={prductImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className=" text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Monarch Burger{index + 1}
                </p>
                <div className=" flex items-center justify-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm  text-blue-800 ml-2 cursor-auto">
                      {""} $199
                    </p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
