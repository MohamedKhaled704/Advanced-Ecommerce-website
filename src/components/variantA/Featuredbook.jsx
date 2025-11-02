import React from "react";
import image1 from "../../assets/images/book.png";
import { Link } from "react-router-dom";

export default function Featuredbook() {
  return (
    <div>
      <div className="bg-[linear-gradient(45deg,#FBEEEE_0%,#F7FFFE_100%)] xl:px-44 lg:px-20 px-5 md:py-24 py-5">
        <div className="flex md:flex-row flex-col md:items-center gap-x-20">
          <picture className="relative xs:min-w-80" style={{flex: "1 1 45%"}}>
            <img src={image1} alt="featured book" className="object-cover" />
            <svg width="271" height="170" viewBox="0 0 271 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[41%] left-[7%]">
<path fillRule="evenodd" clipRule="evenodd" d="M68.9308 85.5503C68.8816 72.42 59.2248 61.8198 47.362 61.8742C35.4983 61.9287 25.9222 72.6173 25.9715 85.7476C26.0207 98.8779 35.6767 109.478 47.5403 109.424C59.4031 109.369 68.9801 98.6806 68.9308 85.5503ZM47.2554 33.3654C73.3533 33.2571 94.608 56.5864 94.7279 85.4736C94.8478 114.361 73.7874 137.866 47.6896 137.974C21.5908 138.082 0.336963 114.753 0.217075 85.8658C0.0971864 56.9786 21.1567 33.4737 47.2554 33.3654Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M123.059 90.7638C161.014 90.5895 191.655 56.392 191.498 14.381C191.468 6.50423 197.214 0.0918884 204.33 0.0592076C211.446 0.0265267 217.24 6.38588 217.269 14.2626C217.486 72.0271 175.354 119.049 123.166 119.289C116.049 119.322 110.256 112.962 110.226 105.086C110.197 97.2089 115.942 90.7965 123.059 90.7638Z" fill="white"/>
<path d="M146.401 141.163C200.426 140.915 244.04 92.2382 243.816 32.4416C243.786 24.5738 249.525 18.1688 256.633 18.1362C263.742 18.1035 269.528 24.4556 269.558 32.3234C269.841 107.856 214.75 169.342 146.508 169.656C139.4 169.688 133.613 163.336 133.584 155.468C133.554 147.601 139.293 141.196 146.401 141.163Z" fill="white"/>
</svg>

          </picture>
          <div className="flex flex-col items-start xs:min-w-80" style={{flex: '1 1 50%'}}>
            <h2 className="capitalize font-semibold text-5xl text-[#393280]">
              featured book
            </h2>
            <article className="mt-11">
              <p className="relative uppercase font-medium text-[13px] text-[#888888] tracking-widest">
                by timbur hood
                <svg
                  width="101"
                  height="2"
                  viewBox="0 0 101 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-3 left-0"
                >
                  <rect width="101" height="2" fill="#ED553B" />
                </svg>
              </p>
              <h3 className="capitalize font-semibold text-[28px] text-[#393280] mt-[30px]">
                birds gonna be happy
              </h3>
              <p className="text-[16px] text-[#7A7A7A] tracking-wide mt-4 leading-[2] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <p className="font-bold text-[23px] text-[#ED553B] tracking-wide mt-9">
                $ 45.00
              </p>
            </article>
            <Link to="" className="uppercase font-medium text-[16px] text-[#393280] tracking-wider leading-[2.1] px-9 py-3 flex items-center gap-x-2 border border-[#393280] rounded-[7px] mt-28">
              view more
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00414 0L7.22162 0.780453L10.9102 4.45764H0V5.54236H10.9102L7.22216 9.22009L8.00414 10L12.6264 5.38996L13 5L12.6264 4.61004L8.00414 0Z"
                  fill="#393280"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
