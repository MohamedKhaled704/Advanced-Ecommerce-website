import React, { useState } from "react";
// import { fetchProducts } from "../../api/product";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";


export default function NewReleaseVariantA() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slicedProducts = async () => {
    const res = await axios.get('https://6900f2b5ff8d792314bc19f7.mockapi.io/products');
    return res.data.slice(0, 12)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: slicedProducts,
  });

  if (isLoading) return <p>Loading... </p>;
  if (error) return <p>Error in loading products</p>;

  const slideProducts = [];
  for (let i = 0; i < data.length; i += 3) {
    slideProducts.push(data.slice(i, i + 3))
  }

  return (
    <div>
      <div className="mt-24 mx-[10px]">
        {/* Start newrelease top "text" */}
        <div className="flex flex-col gap-y-5">
          <p className="uppercase text-[#7A7A7A] text-[13px] font-medium tracking-widest text-center">
            some quality items
          </p>
          <div className="flex items-center gap-x-9">
            <svg
              className="flex-1"
              width="445"
              height="1"
              viewBox="0 0 445 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="445" height="1" fill="#E0E0E0" />
            </svg>
            <h2 className="capitalize font-semibold text-3xl lg:text-5xl text-[#393280] text-center">
              new release books
            </h2>
            <svg
              className="flex-1"
              width="445"
              height="1"
              viewBox="0 0 445 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="445" height="1" fill="#E0E0E0" />
            </svg>
          </div>
        </div>
        {/* End newrelease top "text" */}

        {/* Start newrelease main */}
        <div className="mt-16 grid xl:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
          {/* {data.map((item) => ( */}
          {slideProducts[currentSlide]?.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-4 items-center">
              <div className="border border-[#EAE8DF] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
                <picture>
                  <img src={item.img} alt="book image" />
                </picture>
              </div>
              {/* Product text */}
              <div className="flex flex-col items-center gap-y-3">
                <h4 className="capitalize font-semibold md:text-[22px] text-[18px] text-[#393280]">
                  {item.name}
                </h4>
                <p className="capitalize text-[14px] text-[#888888]">
                  {item.writer}
                </p>
              </div>
              {/* Product price */}
              <div>
                <span className="font-bold text-[18px] text-[#ED553B]">
                  ${Number(item.price).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* End newrelease main */}

        <hr className="mt-14" />

        {/* Start newrelease bottom */}
        <div className="flex flex-row items-center justify-between pt-6 pb-3 pe-1">
          <div className="flex sm:justify-center flex-1 gap-x-3 sm:ms-0 ms-3">
            {slideProducts.map((_, index) => (
            <span key={index} onClick={() => setCurrentSlide(index)} className={`${currentSlide === index? 'bg-[#ED553B] w-[39px]' : ''} group flex justify-center items-center hover:w-[39px] h-[39px] rounded-[50%] border-[#ED553B] cursor-pointer hover:border`}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="6.5"
                  fill="#BEBEBE"
                  className="group-hover:fill-[#ED553B]"
                />
              </svg>
            </span>
            ))}
          </div>
          <div className="">
            <Link
              to="/books"
              className="capitalize text-[#ED553B] text-[16px] font-bold tracking-wide flex items-center gap-x-2 scale-100 hover:scale-105"
            >
              {" "}
              view all products
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0662 0L9.24158 0.856675L11.7499 3.40467H0V4.59533H11.7499L9.24217 7.14392L10.0662 8L14 4L10.0662 0Z"
                  fill="#ED553B"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* End newrelease bottom */}
      </div>
    </div>
  );
}
