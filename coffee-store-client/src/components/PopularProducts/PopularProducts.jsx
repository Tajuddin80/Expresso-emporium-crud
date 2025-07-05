import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const PopularProducts = ({ coffee }) => {
  const { coffeeChef, coffeeName, photoUrl, price, taste, _id } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side flex-col md:flex-row flex items-center justify-around bg-base-200 shadow-sm  ">
      <div>
        <figure>
          <img className="h-50 " src={photoUrl} alt="product photo" />
        </figure>
      </div>
      <div className="">
        <h2 className="card-title">{coffeeName}</h2>
        <p>Coffee Chef: {coffeeChef}</p>
        <p>Taste: {taste}</p>
        <p>Price: {price}</p>
      </div>

      <div className="join w-full join-vertical gap-4 md:w-auto">
        <Link
          to={`/productdetails/${_id}`}
          className="btn join-item bg-blue-200"
        >
          View
        </Link>
        <Link to={`/updateCoffee/${_id}`}  className="btn join-item bg-yellow-200">Edit</Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn join-item bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PopularProducts;
