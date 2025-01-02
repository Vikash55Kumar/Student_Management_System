import React from 'react';
import laptop from "../../assets/laptop.png";
import mobile1 from "../../assets/mobile1.png";
import a4 from "../../assets/a4.png";
import a6 from "../../assets/a6.png";
import circle from "../../assets/circle.png";
import sq from "../../assets/sq.png";
import tri4 from "../../assets/tri4.png";
import tri5 from "../../assets/tri5.png";

export default function H1() {
  return (
    <div className="bg-sky-700 relative pb-0">
      <div className="absolute top-[40%] left-0 right-0">
        <img className="absolute top-5 left-5 w-4 h-4" src={circle} alt="Circle" />
        <img className="absolute top-10 right-10 w-4 h-4" src={tri4} alt="Triangle 1" />
        <img className="absolute bottom-10 left-10 w-4 h-4" src={tri4} alt="Triangle 2" />
        <img className="absolute bottom-5 right-5 w-4 h-4" src={tri5} alt="Triangle 3" />
        <img className="absolute top-20 left-20 w-4 h-4" src={tri4} alt="Triangle 4" />
        <img className="absolute bottom-20 right-20 w-4 h-4" src={tri5} alt="Triangle 5" />
        <img className="absolute top-40 left-40 w-4 h-4" src={sq} alt="Square" />
      </div>

      <div className="container mx-auto text-center py-20">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Free Online Student <br/>Management Software
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 p-2">
          Now you can manage your school, college, or any educational center with eSkooly. <br/> It's 100% free for a lifetime with no limitations.
        </p>

        {/* CTA Buttons */}
        <div className="flex md:flex-row flex-col md:justify-center space-x-4 mb-8">
          <a href="/userSignup" >
          <button type="button" className="btn btn-primary h-12">Sign Up Now, It's Free</button>
            {/* <i className="im im-icon-Add-User mr-2"></i>Sign Up Now, It's Free */}
          </a>
          <a href="#product">
            <button type="button" className="btn btn-light h-12 md:mt-0">Learn More</button>
          </a>
        </div>

        {/* Images */}
        <div className="relative">
          <img className="inline-block md:w-[60%] " src={laptop} alt="Laptop" />
          <img
            className="absolute top-10 left-[80%] md:left-[66%] w-20 md:mt-20 transform -translate-x-1/2 md:w-40"
            src={mobile1}
            alt="Mobile"
          />
        </div>
      </div>

      {/* Floating Avatars */}
      <div className="absolute top-0 left-0">
        <img
          className="absolute top-10 left-10 animate-bounce"
          src={a4}
          alt="Avatar 4"
        />
        <img
          className="absolute bottom-10 right-10 w-14 h-14 animate-bounce delay-500"
          src={a6}
          alt="Avatar 6"
        />
      </div>
    </div>
  );
}
