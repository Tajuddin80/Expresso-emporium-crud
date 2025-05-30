import React from "react";

const InputField = ({ fieldData }) => {
  const { name, id, placeholder, labelText } = fieldData;

  return (
    <div className="relative z-0 w-full mb-5 group text-black">
      <input
        type="text"
        name={name}
        id={id}
        className="block text-xl py-2.5 px-0 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={id}
        className="text-xl peer-focus:font-medium absolute text-sm text-gray-500 bg-white px-1 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 left-0 z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:px-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputField;
