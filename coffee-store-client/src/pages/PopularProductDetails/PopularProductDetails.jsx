import React from "react";
import { useLoaderData, useParams } from "react-router";

const PopularProductDetails = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  const { id } = useParams();
  console.log(id);

  const matchedCoffee = coffees.find((item) => item._id == id);
  console.log(matchedCoffee);

  const {photoUrl, coffeeName, coffeeChef,taste, price} = matchedCoffee

  return  <div className="flex justify-center items-center card card-side mt-20 h-full ">
      <figure>
        <img className="h-50 " src={photoUrl} alt="product photo" />
      </figure>
      <div className="mx-5 flex justify-around items-center flex-col ">
          <h2 className="text-4xl">{coffeeName}</h2>
          <p className="text-xl">Coffee Chef: {coffeeChef}</p>
          <p className="text-xl">Taste: {taste}</p>
          <p className="text-xl">Price: {price}</p>
      </div>
    </div>
};

export default PopularProductDetails;
