import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/Rectangle11.png";
import image2 from "../../assets/images/Rectangle12.png";
import image3 from "../../assets/images/Rectangle13.png";

export default function CategoriesVariantA() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState(1) // 1: next, -1: prev
  let index = currentIndex;
  // Restructured content: object with arrays for each category (simpler access)
  const catContent = {
    catA: [
      {
        header: 'higher education',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image1,
      },
      {
        header: 'management books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image2,
      },
      {
        header: 'engineering books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image3,
      },
    ],
    catB: [
      {
        header: 'management books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image2,
      },
      {
        header: 'higher education',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image3,
      },
      {
        header: 'engineering books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image1,
      },
    ],
    catC: [
      {
        header: 'engineering books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image3,
      },
      {
        header: 'higher education',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image1,
      },
      {
        header: 'management books',
        paragraph:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
        img: image2,
      },
    ],
  };

  // Wrap currentIndex to valid array index (handles negative and overflow)
  const length = catContent.catA.length;
  const idx = ((currentIndex % length) + length) % length;

  // trigger simple enter animation when currentIndex changes
  useEffect(() => {
    // start with hidden state then reveal (so new content transitions in)
    setAnimating(true)
    const t = setTimeout(() => setAnimating(false), 500)
    return () => clearTimeout(t)
  }, [currentIndex])

  return (
    <div>
      <div className="lg:mt-28 xs:mt-20 mt-14 xs:ps-12 xs:pe-20 px-5 flex flex-col gap-y-14">
        {/* Start categories top */}
        <div className="flex flex-col relative lg:gap-0 gap-y-5">
          {/* Start categories top main */}
          <div className="flex lg:flex-row lg:justify-between flex-col gap-y-3">
          {/* Start categories top leftside */}
          <div className="flex ">
            <div className="flex flex-col gap-y-3">
              <span className="font-bold capitalize tracking-wider text-[14px] text-[#ED553B] flex items-center gap-x-3">
                <svg
                  width="33"
                  height="2"
                  viewBox="0 0 33 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="33" height="2" fill="#ED553B" />
                </svg>
                categories
              </span>
              <h2 className="font-bold capitalize xs:text-[32px] text-[26px] text-[#393280]">
                explore our top categories
              </h2>
            </div>
          </div>
          {/* End categories top leftside */}
          {/* Start categories top rightside */}
          <div className="lg:w-1/2">
            <p className="font-medium xs:text-[18px] text-[16px] text-[#393280B3] xl:leading-[1.78]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
              ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum..
            </p>
          </div>
          {/* End categories top rightside */}
        </div>

        {/* Start categories top "arrows"  */}
            <div className="flex gap-x-7 relative xl:relative lg:absolute left-0 bottom-[10%] ">
              <span onClick={() => { setDirection(-1); setCurrentIndex(currentIndex - 1); }} className="w-[50px] h-[50px] rounded-[50%] border cursor-pointer flex items-center justify-center group hover:bg-[#ED553B] transition-all duration-300">
                <svg
                  className=""
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-[#8C8C8C] group-hover:fill-white group-hover:stroke-white group-hover:stroke-[2]"
                    d="M5.62178 0L0 5.71429L5.62178 11.4286L6.79801 10.2056L3.21663 6.56475H20V4.86382H3.21579L6.79801 1.22297L5.62178 0Z"
                    fill="#8C8C8C"
                    strokeWidth="0.1"
                  />
                </svg>
              </span>
              <span onClick={() => { setDirection(1); setCurrentIndex(currentIndex + 1); }} className="w-[50px] h-[50px] rounded-[50%] border cursor-pointer flex items-center justify-center group hover:bg-[#ED553B] transition-all duration-300">
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-[#8C8C8C] group-hover:fill-white group-hover:stroke-white group-hover:stroke-[2]"
                    d="M14.3782 0L20 5.71429L14.3782 11.4286L13.202 10.2056L16.7834 6.56475H0V4.86382H16.7842L13.202 1.22297L14.3782 0Z"
                    fill="#8C8C8C"
                    strokeWidth="0.1"
                  />
                </svg>
              </span>
            </div>
            {/* End categories top "arrows"  */}

        {/* End categories top main */}
        </div>
             
        {/* End categories top */}

        {/* Start categories main*/}
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
          <div className={"flex flex-col md:flex-row-reverse xl:flex-col gap-y-3 gap-x-6 xl:items-center transition-all duration-500 ease-in-out " + (animating ? (direction > 0 ? 'translate-x-4 opacity-0' : '-translate-x-4 opacity-0') : 'translate-x-0 opacity-100') }>
            <picture className="mb-[22px]">
              <img src={catContent.catA[idx].img} alt="books image" />
            </picture>
            <div className="md:w-[60%] flex flex-col gap-y-3 xl:items-center ">
            <h4 className="capitalize font-semibold text-2xl leading-[1.33] text-[#393280]">
              {catContent.catA[idx].header}
            </h4>
            <p className="xl:text-center text-[16px] text-[#393280B3] leading-[2] xl:leading-[1.5]">
              {catContent.catA[idx].paragraph}
            </p>
            </div>
          </div>
          <div className={"flex flex-col md:flex-row xl:flex-col gap-y-3 gap-x-6 xl:items-center transition-all duration-500 ease-in-out " + (animating ? (direction > 0 ? 'translate-x-4 opacity-0' : '-translate-x-4 opacity-0') : 'translate-x-0 opacity-100') }>
            <picture className="mb-[22px]">
              <img src={catContent.catB[idx].img} alt="books image" />
            </picture>
            <div className="md:w-[60%] flex flex-col gap-y-3 xl:items-center ">
            <h4 className="capitalize font-semibold text-2xl leading-[1.33] text-[#393280]">
              {catContent.catB[idx].header}
            </h4>
            <p className="xl:text-center text-[16px] text-[#393280B3] leading-[2] xl:leading-[1.5]">
              {catContent.catB[idx].paragraph}
            </p>
            </div>
          </div>
          <div className={"flex flex-col md:flex-row-reverse xl:flex-col gap-y-3 gap-x-6 xl:items-center  transition-all duration-500 ease-in-out " + (animating ? (direction > 0 ? 'translate-x-4 opacity-0' : '-translate-x-4 opacity-0') : 'translate-x-0 opacity-100') }>
            <picture className="mb-[22px]">
              <img src={catContent.catC[idx].img} alt="books image" />
            </picture>
            <div className="md:w-[60%] flex flex-col gap-y-3 xl:items-center ">
            <h4 className="capitalize font-semibold text-2xl leading-[1.33] text-[#393280]">
              {catContent.catC[idx].header}
            </h4>
            <p className="xl:text-center text-[16px] text-[#393280B3] leading-[2] xl:leading-[1.5]">
              {catContent.catC[idx].paragraph}
            </p>
            </div>
          </div>
        </div>
        {/* End categories main */}
        {/* Start categories bottom "button" */}
        <div className="flex justify-center">
          <button className="uppercase tracking-wider py-3 px-9 leading-[1.8] text-[#393280] border border-[#393280] rounded-[7px] flex items-center gap-x-2 group hover:bg-[#393280] hover:text-white transition-colors duration-500">
            view more
            <svg className="group"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="group-hover:fill-white transition-colors duration-500"
                d="M8.00414 0L7.22162 0.780453L10.9102 4.45764H0V5.54236H10.9102L7.22216 9.22009L8.00414 10L12.6264 5.38996L13 5L12.6264 4.61004L8.00414 0Z"
                fill="#393280"
              />
            </svg>
          </button>
        </div>
        {/* End categories bottom "button" */}
      </div>
    </div>
  );
}
