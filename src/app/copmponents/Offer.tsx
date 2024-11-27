"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
}

const SpecialOffers: React.FC = () => {
  const Offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Get 50% off all drinks from 5:00P.M. to 7:00P.Mp",
    },
    {
      title: "Family Meal Deeal",
      description: "Order two Main Courses and get a Family coupon deal",
    },
    {
      title: "Weekly Brunch",
      description: "Enjoy a free complimentary drink",
    },
    {
      title: "Mid-Night Deal",
      description: "Pick up a free burger drink in this midnight deal",
    },
  ];

  const handelOfferClick = (description: string) => {
    alert(description);
  }


  return(
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Special Offer's</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Offers.map((offer, index)=> (
            <button key={index}
            onClick={()=> handelOfferClick(offer.description)}
            className="bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-95">
              <h3 className="text-2xl font-semibold text-red-700">{offer.title}</h3>
              <p className="text-grey-700 mt-2">{offer.description}</p>
            </button>
          ))}

        </div>
      </div>
      </section>
  )
 
};

export default SpecialOffers;
