import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div
      className="featured bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("../../../public/bg.jpg")` }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="left text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Your Neighborhood Hair Heroes
          </h1>
          <div className="search flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter your search"
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-auto"
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white rounded-md px-6 py-2 w-full md:w-auto"
            >
              Search
            </button>
          </div>
          <div className="popular mt-8 flex flex-wrap items-center gap-4">
            <span className="font-bold">Popular:</span>
            <button className="bg-black text-white rounded-md px-4 py-2">
              Location
            </button>
            <button className="bg-black text-white rounded-md px-4 py-2">
              Rating
            </button>
            <button className="bg-black text-white rounded-md px-4 py-2">
              Availability
            </button>
            <button className="bg-black text-white rounded-md px-4 py-2">
              Price range
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
