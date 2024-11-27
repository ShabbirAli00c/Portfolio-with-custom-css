import React from "react";

const ReservationSection = () => {
  return (
    <section className=" bg-gradient-to-r from-black to bg-slate-900 py-10">
      <div className=" container mx-auto text-center">
        <h2 className=" text-3xl font-bold mb-6 text-white">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Type Your Name"
              className="w-full p-3 border bor-grey-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Mail"
              className="w-full p-3 border bor-grey-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4 text-white">
            <input
              type="Date"
              className="w-full p-3 border bor-grey-300 rounded-md"
              required
            />
          </div>

          <div className='mb-4 text-white'>
          <input type='Time' 
          className='w-full p-3 border bor-grey-300 rounded-md'
          required/>
        </div>

        <div className='mb-4'>
          <button className=' bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Reserved Table

          </button>
        </div>

        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
