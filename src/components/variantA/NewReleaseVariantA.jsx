import React from "react";
import { fetchProducts } from "../../api/product";
import { useQuery } from "@tanstack/react-query";
// import image1 from '../../assets/images/book5 4.png'
// import image2 from '../../assets/images/book3 4.png'
// import image3 from '../../assets/images/book16 1.png'
// import image4 from '../../assets/images/book4 4.png'

export default function NewReleaseVariantA() {

      const {data, isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
      })
      console.log(data);
      
      if(isLoading) return <p>Loading... </p>
      if(error) return <p>Error in loading products</p>
      
  return (
    <div>
      <div className="mt-24 mx-[10px]">
        {/* Start newrelease top "text" */}
        <div className="flex flex-col gap-y-5">
          <p className="uppercase text-[#7A7A7A] text-[13px] font-medium tracking-widest text-center">
            some quality items
          </p>
          <div className="flex items-center gap-x-9">
            <svg className="flex-1"
              width="445"
              height="1"
              viewBox="0 0 445 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="445" height="1" fill="#E0E0E0" />
            </svg>
            <h2 className="capitalize font-semibold text-3xl lg:text-5xl text-[#393280] text-center">new release books</h2>
            <svg className="flex-1"
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
        <div className="mt-16 grid grid-cols-4 gap-x-9">
          {data.map((item) => (            
            <div key={item.id} className="flex flex-col gap-y-4 items-center border border-[#EAE8DF] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
              <div>
                <picture><img src={item.img} alt="book image" /></picture>
              </div>
              {/* Product text */}
              <div className="flex flex-col items-center gap-y-3">
                <h4 className="capitalize font-semibold text-[22px] text-[#393280]">{item.name}</h4>
                <p className="capitalize text-[14px] text-[#888888]">{item.writer}</p>
              </div>
              {/* Product price */}
              <div>
                <span className="font-bold text-[18px] text-[#ED553B]">${item.price}.00</span>
              </div>
            </div>
          ))}
        </div>
        {/* End newrelease main */}
      </div>
    </div>
  );
}
