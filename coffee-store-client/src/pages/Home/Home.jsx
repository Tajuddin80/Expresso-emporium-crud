import React from "react";
import Hero from "../../components/Hero/Hero";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const allCoffess = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <div className="text-center mt-10 space-y-5">
      
        <p>---Sip & Savor---</p>
        <h3>Our Popular Products</h3>
        <Link to='/addcoffee' className="px-2 rounded-lg py-1 bg-[#E3B577] text-white cursor-pointer">
          Add Coffee
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 w-[90%] mx-auto mt-15">
        {allCoffess.map((coffee) => (
          <PopularProducts key={coffee._id} coffee={coffee}></PopularProducts>
        ))}
      </div>
    </div>
  );
};
export default Home;
