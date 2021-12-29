import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12mt-14 lg:mt-28">
        {/* content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6 font-pop lg:font-medium">
            A simple website
          </h2>
          <p className="text-gray-400 text-lg text-center lg:text-left mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere repellendus minima voluptatum nemo doloremque accusantium distinctio excepturi et dolorem nulla consectetur asperiores tempora id illo error praesentium, odit ex aliquam.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
