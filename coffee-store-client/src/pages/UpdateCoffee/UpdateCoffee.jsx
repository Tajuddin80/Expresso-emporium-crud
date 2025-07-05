
import Swal from "sweetalert2";
import UpdateCoffeeInput from "./UpdateCoffeeInput";
import { useLoaderData } from "react-router";

// https://i.ibb.co/1GLHXC0C/1.png
// https://i.ibb.co/SDmMJL9D/2.png
// https://i.ibb.co/vvhvzsLd/3.png
// https://i.ibb.co/Pz6Pg8pN/4.png
// https://i.ibb.co/jkYmjmM4/5.png
// https://i.ibb.co/20nykhk3/6.png

const UpdateCoffee = () => {
  const {
    _id,
    coffeeName,
    coffeeChef,
    coffeeSupplier,
    taste,
    price,
    details,
    photoUrl,
  } = useLoaderData();

  console.log(coffeeName);
  
  // console.log(coffee);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to the db
fetch(`https://coffee-store-server-eta-black.vercel.app/${_id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedCoffee),
})
  .then((res) => {
    if (!res.ok) {
      return res.text().then(text => {
        console.error("Server error page:", text);
        throw new Error(`Server returned ${res.status}`);
      });
    }
    return res.json();
  })
  .then((data) => {
    if (data.modifiedCount) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Coffee updated successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  })
  .catch((err) => console.error("Update failed:", err));

  };

  const inputFields = [
    {
      name: "coffeeName",
      id: "coffeeName",
      placeholder: "Enter coffee name",
      labelText: "Coffee Name",
      defaultValue: coffeeName,
    },
    {
      name: "coffeeChef",
      id: "coffeeChef",
      placeholder: "Enter chef's name",
      labelText: "Coffee Chef",
      defaultValue: coffeeChef,
    },
    {
      name: "coffeeSupplier",
      id: "coffeeSupplier",
      placeholder: "Enter supplier name",
      labelText: "Coffee Supplier",
      defaultValue: coffeeSupplier,
    },
    {
      name: "taste",
      id: "taste",
      placeholder: "Enter taste profile",
      labelText: "Taste",
      defaultValue: taste,
    },
    {
      name: "price",
      id: "price",
      placeholder: "Enter price",
      labelText: "price",
      defaultValue: price,
    },
    {
      name: "details",
      id: "details",
      placeholder: "Enter coffee details",
      labelText: "Details",
      defaultValue: details,
    },
  ];

  return (
    <div className="w-[70%]  mx-auto my-20">
      <div className=" text-center space-y-10">
        <h1 className=" text-4xl">Update Coffee</h1>
        <p className="text-xl mb-5"></p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid md:grid-cols-2 md:gap-6">
          {inputFields.map((field, index) => (
            <UpdateCoffeeInput key={index} fieldData={field} />
          ))}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="photoUrl"
            id="photoUrl"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            defaultValue={photoUrl}
            required
          />
          <label
            htmlFor="photoUrl"
            className="text-xl peer-focus:font-medium absolute text-gray-500 bg-white px-1 duration-300 transform -translate-y-6 scale-75 top-2 left-0 z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:px-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
          >
            Coffee Photo URL
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 rounded-xl w-full cursor-pointer px-4 py-2  text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
