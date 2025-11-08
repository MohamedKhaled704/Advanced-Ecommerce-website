import React, { useState } from "react";
import image1 from "../../assets/images/Unsplash.png";
import image2 from "../../assets/images/pexels-pixabay-415078.jpg"
import image3 from "../../assets/images/pexels-ekrulila-2128249.jpg"
import image4 from "../../assets/images/pexels-nietjuhart-1831744.jpg"

export default function Offer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const offerContent = [
    {
      head: `All books are 50% off now! Don't miss such a deal!`,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      img: image1,
    },
    {
      head: `Get 50% off all books — this offer won’t last long!`,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis ut, ullam provident eveniet eaque!",
      img: image2,
    },
    {
      head: `Every book is half price right now! Grab your favorites before the sale ends!`,
      paragraph:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptas quam quas animi autem?",
      img: image3,
    },
    {
      head: `Enjoy 50% discount on all books! Hurry, don’t miss out this amazing deal!`,
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam impedit dolorum aspernatur itaque animi in accusantium?",
      img: image4,
    },
  ];
  return (
    <div>
      <div className="mt-20">
        <div className="container bg-[#FCEBEA] rounded-[20px] flex lg:flex-row flex-col gap-y-5 sm:px-20 xs:px-10 px-4 py-9">
          {/* Start offer leftside */}
          <div className="flex flex-col" style={{flex: '1 1 40%'}}>
            <h2 className="font-bold xs:text-[45px] text-3xl text-[#463C74] leading-[1.47]">
              {offerContent[currentIndex].head}
            </h2>
            <p className="mt-3 text-[18px] text-[#393280] leading-[1.78]">
              {offerContent[currentIndex].paragraph}
            </p>
            <div className="flex items-center gap-x-10 mt-7">
              <p className="font-bold text-[26px] text-[#ED553B] leading-[1.8] tracking-widest flex flex-col items-center">
                768
                <span className="uppercase font-medium text-[16px] text-black">
                  days
                </span>
              </p>
              <p className="font-bold text-[26px] text-[#ED553B] leading-[1.8] tracking-widest flex flex-col items-center">
                01
                <span className="uppercase font-medium text-[16px] text-black">
                  hour
                </span>
              </p>
              <p className="font-bold text-[26px] text-[#ED553B] leading-[1.8] tracking-widest flex flex-col items-center">
                27
                <span className="uppercase font-medium text-[16px] text-black">
                  mint
                </span>
              </p>
              <p className="font-bold text-[26px] text-[#ED553B] leading-[1.8] tracking-widest flex flex-col items-center">
                55
                <span className="uppercase font-medium text-[16px] text-black">
                  sec
                </span>
              </p>
            </div>
            <div className="mt-16 flex items-center gap-x-4">
              {offerContent.map((_, index) => (
                <div key={index} onClick={() => setCurrentIndex(index)} className={`${currentIndex === index? 'border w-[40px]' : ''} group hover:w-[40px] h-[40px] rounded-[50%] flex justify-center items-center cursor-pointer border-[#ED553B] hover:border`}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="#BEBEBE" className={`${currentIndex === index? 'fill-[#ED553B]' : ''}`} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          {/* End offer leftside */}
          {/* Start offer rightside *picture* */}
          <picture className="min-w-80 max-h-[488px] flex" style={{flex: '1 1 60%'}}>
            <img src={offerContent[currentIndex].img} alt="books" />
          </picture>
          {/* End offer rightside */}
        </div>
      </div>
    </div>
  );
}
