import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const RecentTuition = () => {
  return (
    <div className="mt-14 text-gray-100 h-screen">
      <h2 className="md:text-4xl text-3xl font-bold text-center">
        Last Four Tuition
      </h2>
      <p className="text-lg font-semibold text-gray-300 text-center">
        Apply you want to
      </p>
      <div className="mt-6">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-gray-800 text-gray-50">
              <div className="container grid grid-cols-12 mx-auto bg-gray-900">
                <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                  <div className="flex justify-center mb-3">
                    <span className="px-2 text-md font-bold py-1 rounded-full bg-violet-300 text-gray-900">
                      Tuition No. 222
                    </span>
                  </div>
                  <h1 className="text-3xl font-semibold">
                    Science Tutor Needed
                  </h1>
                  {/* tuition details */}
                  <div className="mt-2 grid md:grid-cols-3 text-gray-300">
                    <p className="text-xl">
                      <span className="font-semibold ">Class: </span>
                      <span className="">10</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Salary: </span>
                      <span className="">3000-4000 Tk</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Subject: </span>
                      <span className="">Math</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Area: </span>
                      <span className="">Harua</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Weekly: </span>
                      <span className="">5 days</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-8 w-72 py-3 mt-4 hover:bg-slate-800 font-semibold border rounded border-gray-100 text-gray-100"
                  >
                    More Details
                  </button>

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="self-center text-sm">
                        Status: Available
                      </span>
                    </div>
                    <span className="text-xs">Posted: 5/12/22</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-800 text-gray-50">
              <div className="container grid grid-cols-12 mx-auto bg-gray-900">
                <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
                <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                  <div className="flex justify-center mb-3">
                    <span className="px-2 text-md font-bold py-1 rounded-full bg-violet-300 text-gray-900">
                      Tuition No. 221
                    </span>
                  </div>
                  <h1 className="text-3xl font-semibold">
                    Science Tutor Needed
                  </h1>
                  {/* tuition details */}
                  <div className="mt-2 grid md:grid-cols-3 text-gray-300">
                    <p className="text-xl">
                      <span className="font-semibold ">Class: </span>
                      <span className="">09</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Salary: </span>
                      <span className="">3000-4000 Tk</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Subject: </span>
                      <span className="">Math</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Area: </span>
                      <span className="">Ukilpara</span>
                    </p>
                    <p className="text-xl">
                      <span className="font-semibold ">Weekly: </span>
                      <span className="">5 days</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-8 w-72 py-3 mt-4 hover:bg-slate-800 font-semibold border rounded border-gray-100 text-gray-100"
                  >
                    More Details
                  </button>

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="self-center text-sm">
                        Status: Available
                      </span>
                    </div>
                    <span className="text-xs">Posted: 5/12/22</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentTuition;
