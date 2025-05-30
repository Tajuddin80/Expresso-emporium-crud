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
        fetch(`http://localhost:3000/coffees/${_id}`, {
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
    <div className="card card-side bg-base-200 shadow-sm  ">
      <figure>
        <img className="h-50 " src={photoUrl} alt="product photo" />
      </figure>
      <div className="flex justify-around items-center gap-10">
        <div>
          <h2 className="card-title">{coffeeName}</h2>
          <p>Coffee Chef: {coffeeChef}</p>
          <p>Taste: {taste}</p>
          <p>Price: {price}</p>
        </div>
        <div className="join join-vertical gap-4">
          <Link
            to={`/productdetails/${_id}`}
            className="btn join-item bg-blue-200"
          >
            View
          </Link>
          <button className="btn join-item bg-yellow-200">Edit</button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
