import React from "react";
import image1 from '../../assets/images/pexels-olha-ruskykh-5984619 1.png'

export default function EbookVariantA() {
  return (
    <div>
      {/* Start ebook section */}
      <div className="mt-24 bg-[linear-gradient(90deg,#FCECEC_0%,#F6FFFE_100%)] flex lg:flex-row lg:gap-x-[76px] flex-col">
        {/* Start ebook leftside */}
        <div className="flex flex-col gap-y-8 my-10 sm:my-24 mx-2 sm:ms-16 lg:me-0 sm:me-16 lg:w-[50.18%]">
          {/* Start ebook leftside top */}
          <div className="flex flex-col gap-y-1">
            <span className="flex items-center text-[14px] font-bold gap-x-3 tracking-widest text-[#ED553B]">
              <svg
                width="33"
                height="2"
                viewBox="0 0 33 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="2" fill="#ED553B" />
              </svg>
              ebook
            </span>
            <h2 className="font-extrabold text-[24px] xs:text-[30px] text-[#38426C] tracking-wide">Access, Read, Practice & Engage with Digital Content (eBook) </h2>
            <p className="font-medium text-[16px] xs:text-[18px] text-[#393280B3] leading-[1.78]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* End ebook leftside top */}

          {/* Start ebook leftside bottom *form* */}
          <div>
            <form action="" className="relative ">
              <input type="text" name="" id="" placeholder="enter your email address" className="w-full placeholder:capitalize font-semibold text-[14px] tracking-wide xs:tracking-widest placeholder:text-[#BCBCBC] py-[17px] xs:py-5 ps-2 xs:ps-5 rounded-[10px] outline-none" />
              <input type="submit" value="login" className="absolute right-0 capitalize text-white bg-[#ED553B] font-bold text-[14px] xs:text-xl py-[17px] px-2 xs:px-11 rounded-tr-[10px] rounded-br-[10px] cursor-pointer" />
            </form>
          </div>
          {/* End ebook leftside bottom *input* */}
        </div>
        {/* End ebook leftside */}

        {/* Start ebook rightside *Picture* */}
        <div className="flex justify-center">
          <picture className="flex"><img className="lg:flex-1" src={image1} alt="ebook image" /></picture>
        </div>
        {/* Start ebook rightside *Picture* */}
        
      </div>
      {/* End ebook section */}
    </div>
  );
}
