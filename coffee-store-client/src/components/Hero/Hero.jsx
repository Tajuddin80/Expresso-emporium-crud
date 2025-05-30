import React from "react";
import img1 from "../../assets/coffee-store-resources/images/icons/1.png";
import img2 from "../../assets/coffee-store-resources/images/icons/2.png";
import img3 from "../../assets/coffee-store-resources/images/icons/3.png";
import img4 from "../../assets/coffee-store-resources/images/icons/4.png";
const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="https://i.ibb.co/GvxNxzSF/3.png"
          alt="Coffee Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text content */}
        <div className="relative z-20 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <h5 className="text-lg md:text-2xl font-light mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </h5>
          <button className="px-6 cursor-pointer py-3 bg-[#E3B577] text-[#242222] rounded-lg font-medium hover:bg-[#d4a95f] transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="h-40 bg-[#ECEAE3] flex justify-around py-3 items-center px-3">
        <div className="">
          <img src={img1} alt="" />
          <h4 className="text-2xl">Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <h4 className="text-2xl"> High Quality</h4>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src={img3} alt="" />
          <h4 className="text-2xl">Pure Grades</h4>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={img4} alt="" />
          <h4 className="text-2xl">Proper Roasting</h4>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
