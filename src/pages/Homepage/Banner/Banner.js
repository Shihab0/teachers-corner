import React from "react";
import Lottie from "lottie-react";
import bannerPhoto from "./bannerPhoto.json";

const Banner = () => {
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container grid lg:grid-cols-2 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center pl-6 pr-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Welcome to <br />
            <span className="text-yellow-500"> Teacher's Corner</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Finding a Great Tutor or Teacher with
            <br />
            teacher's corner, Kishoreganj
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="/"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
            >
              Register
            </a>
            <a
              href="/"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
            >
              Login
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6  mt-8 lg:mt-0 h-64 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Lottie animationData={bannerPhoto} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
