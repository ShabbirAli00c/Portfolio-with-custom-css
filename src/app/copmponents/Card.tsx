import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="flex-cols-1 md:flex-cols-1 lg:flex-row-1 container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:h-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burger</h2>
        <p className="mb-4 text-white">
          Experience your Good burgers feature hot, juicy, well-seasoned meat.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-bold mt-46 text-center text-white">
          Coming SooN: Our New Burger Branch Launches
        </h3>
        <ul className="text-white ml-3">
          <li>
            <strong>Bacon BBQ Burger: </strong>
            Beef patty, smoked bacon, cheddar cheese, crispy onion rings, BBQ
          </li>
          <br />

          <li>
            <strong>Mushroom Swiss Burger: </strong>
            Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli, lettuce
          </li>
          <br />
          <li>
            <strong>Spicy Jalapeño Burger: </strong>
            Beef patty, pepper jack cheese, sliced jalapeños, chipotle mayo
          </li>
          <br />
          <li>
            <strong>Guacamole Burger: </strong>
            Beef patty, guacamole, Monterey Jack cheese, lettuce, tomato
          </li>
          <br />
          <li>
            <strong>Classic Cheeseburger: </strong>
            Grilled beef patty, American cheese, lettuce, tomato, onions
          </li>
          <br />
          <li>
            <strong>Blue Cheese Bacon Burger: </strong>
            Beef patty, crumbled blue cheese, smoked bacon, caramelized onions
          </li>
          <br />

          <div className="md:h-1/2 mt-6 m:0">
            <img
              src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg"
              alt="delicious burger"
              className="w-[800px] h-[500px] rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
            />
          </div>
        </ul>
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
