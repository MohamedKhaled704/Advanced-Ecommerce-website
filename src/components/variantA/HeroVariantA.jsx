import React, { useState } from "react";
import image1 from "../../assets/images/Frame 216.png";

export default function HeroVariantA() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const heroContent = [
    {
      header: "ipsum dolor si",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedeu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, aeu.",
    },
    {
      header: "dolor ipsum is",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore alias quibusdam animi nostrum harum laudantium, soluta nulla sunt provident labore, vero optio fuga doloribus.",
    },
    {
      header: 'ismud holwer fj',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, itaque totam nam ab voluptatem ducimus repudiandae earum quas repellat mollitia amet dignissimos, cupiditate?'
    },
    {
      header: 'sunfi kiofle im',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eaque, in sed quas velit ratione id, ipsam cum exercitationem ducimus ex amet commodi!'
    }
  ];  

  return (
    <div className="lg:mt-8 mt-12">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center sm:ps-14 ps-5 pe-3 bg-[linear-gradient(45deg,#FFE5E5_0%,#F5FFFF_22%,#FFFFFF_55%,#FFFFFF_100%)]">
        {/* Start hero leftside */}
        <div className="lg:w-1/2">
          <h1 className="capitalize xs:text-6xl text-4xl font-semibold leading-[1.5] text-[#393280]">
            {heroContent[currentIndex].header}
          </h1>
          <p className="font-medium xs:text-[22px] text-[16px] text-[#393280b0] tracking-wide pt-2 pb-7 xs:w-[71%]">
            {heroContent[currentIndex].paragraph}
          </p>
          <button className="uppercase flex items-center gap-x-2 text-[#393280] xs:text-[16px] text-xs tracking-widest border border-[#393280] rounded-md py-3 px-6 group hover:bg-[#393280] hover:text-white transition-colors duration-500">
            read more{" "}
            <svg
              className="group xs:w-[13px]  w-[10px]"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white transition-colors duration-500"
                d="M8.00414 0L7.22162 0.780453L10.9102 4.45764H0V5.54236H10.9102L7.22216 9.22009L8.00414 10L12.6264 5.38996L13 5L12.6264 4.61004L8.00414 0Z"
                fill="#393280"
              />
            </svg>
          </button>
          <ul className="mt-9 list-none flex gap-x-3 lg:mb-0 mb-4">
            {heroContent.map((__, index) => (
            <li key={index} onClick={() => setCurrentIndex(index)} className={`group flex justify-center items-center w-[26px] h-[26px] rounded-[50%] cursor-pointer  border-[#ED553B] ${currentIndex === index? 'border' : ''} `}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="6.5"
                  fill="#BEBEBE"
                  className={`${currentIndex === index? 'fill-[#ED553B]' : ''}`}
                />
              </svg>
            </li>
            ))}
          </ul>
        </div>
        {/* End hero leftside */}
        <div className="lg:w-1/2">
          <picture>
            <img src={image1} alt="Hero image" />
          </picture>
        </div>
      </div>
  
    </div>
  );
}
