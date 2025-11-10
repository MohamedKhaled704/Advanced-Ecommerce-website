import React from "react";
import logo from "../../assets/images/sample logo 1.png";
import image1 from "../../assets/images/facebook.png";
import image2 from "../../assets/images/linkedin.png";
import image3 from "../../assets/images/twitter.png";
import image4 from "../../assets/images/youtube.png";
import image5 from "../../assets/images/footer img1.png/";
import image6 from "../../assets/images/footer img2.png/";

export default function FooterVariantA() {
  return (
    <div>
      <div className="bg-[linear-gradient(to_right,#FFE5E5_0%,#F5FFFE_13%,#FCF3FF_55%,#FFF4E5_100%)] mt-[104px] py-24">
        <div className="container flex flex-col gap-y-16">
          {/* Start footer upperside */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-y-7 gap-y-10">
            {/* Start footer upperside left part */}
            <div className="flex flex-col gap-y-3 sm:col-span-1 col-span-2">
              <picture>
                <img src={logo} alt="" />
              </picture>
              <h3 className="text-[18px] text-[#011627] leading-[1.89] tracking-wide">
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
              </h3>
              <ul className="list-none flex justify-between">
                <li>
                  <a href="">
                    <picture>
                      <img src={image1} alt="" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="">
                    <picture>
                      <img src={image2} alt="" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="">
                    <picture>
                      <img src={image3} alt="" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="">
                    <picture>
                      <img src={image4} alt="" />
                    </picture>
                  </a>
                </li>
              </ul>
            </div>
            {/* End footer upperside left part */}

            {/* Start footer upperside mid part */}
            <div className="flex flex-col sm:gap-y-10 gap-y-5 sm:w-64 sm:justify-self-end sm:col-span-1 col-span-2">
              <h3 className="uppercase font-semibold text-2xl text-[#ED553B] tracking-wide">
                company
              </h3>
              <ul className="list-none flex sm:flex-col flex-row gap-x-10 flex-wrap gap-y-2 uppercase font-semibold text-[18px] text-[#263238] tracking-wide">
                <li>
                  <a href=""> home </a>
                </li>
                <li>
                  <a href=""> about us </a>
                </li>
                <li>
                  <a href=""> books </a>
                </li>
                <li>
                  <a href=""> ebooks </a>
                </li>
                <li>
                  <a href=""> new release </a>
                </li>
                <li>
                  <a href=""> contact us </a>
                </li>
                <li>
                  <a href=""> blog </a>
                </li>
              </ul>
            </div>
            {/* End footer upperside mid part */}

            {/* Start footer upperside right part */}
            <div className="flex flex-col gap-y-10 lg:col-span-1 col-span-2">
              <h3 className="uppercase font-semibold text-2xl text-[#ED553B] tracking-wide">
                latest news
              </h3>
              <div className="flex lg:flex-col sm:flex-row flex-col  gap-y-[18px]">
                <div className="flex gap-x-5">
                  <picture
                    className="w-[100px] min-w-[100px] flex"
                    style={{ flex: "1 1 40%" }}
                  >
                    <img src={image5} alt="" />
                  </picture>
                  <div
                    className="flex flex-col gap-y-2"
                    style={{ flex: "1 1 155%" }}
                  >
                    <h4 className="font-medium text-[18px] text-[#ED553B]">
                      Nostrud exercitation
                    </h4>
                    <p className="text-xs text-[#011627] leading-[1.5]">
                      Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.{" "}
                    </p>
                    <span className="list-disc text-[10px] text-[#F6D55C] flex gap-x-3 items-center">
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#F6D55C" />
                      </svg>
                      15 April 2022
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-5">
                  <picture
                    className="w-[100px] min-w-[100px] flex"
                    style={{ flex: "1 1 40%" }}
                  >
                    <img src={image6} alt="" />
                  </picture>
                  <div
                    className="flex flex-col gap-y-2"
                    style={{ flex: "1 1 155%" }}
                  >
                    <h4 className="font-medium text-[18px] text-[#ED553B]">
                      Nostrud exercitation
                    </h4>
                    <p className="text-xs text-[#011627] leading-[1.5]">
                      Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.{" "}
                    </p>
                    <span className="list-disc text-[10px] text-[#F6D55C] flex gap-x-3 items-center">
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#F6D55C" />
                      </svg>
                      15 April 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End footer upperside right part */}
          </div>
          {/* End footer upperside */}

          {/* Start footer downside */}
          <div className="flex sm:flex-row flex-col-reverse gap-y-3 items-center sm:justify-between capitalize tracking-wide">
            <h3 className=" text-[#011627] xs:text-[18px] text-[16px]">
              © 2022 Arihant. All Rights Reserved.
            </h3>
            <div className="flex items-center gap-x-2 text-[18px]">
              <a href="" className="text-[#ED553B]">
                privacy
              </a>
              <span>
                <svg
                  width="1.5"
                  height="28"
                  viewBox="0 0 1 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="1" height="16" fill="#011627" />
                </svg>
              </span>
              <a href="">
                {" "}
                terms <span className="lowercase">o</span>f service{" "}
              </a>
            </div>
          </div>
          {/* End footer downside */}
        </div>
      </div>
    </div>
  );
}
