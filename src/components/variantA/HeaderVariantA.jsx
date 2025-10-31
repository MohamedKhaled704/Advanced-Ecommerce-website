import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderVariantA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="container">
        {/* Start header top*/}
        <div className="grid lg:grid-cols-6 xs:grid-cols-3 grid-cols-2 items-center relative">
          <picture className="w-[86px] h-[86px] rounded-[50%] bg-[#C4C4C4] my-4 col-span-1"></picture>
          <div
            onClick={toggleMenu}
            className="relative w-10 h-10 flex flex-col justify-center items-end gap-[6px] cursor-pointer xs:hidden justify-self-end col-span-1"
          >
            <span
              className={`block h-[3px] w-8 bg-gray-800 rounded transition-all duration-300 ease-in-out 
        ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            ></span>

            <span
              className={`block h-[3px] w-8 bg-gray-800 rounded transition-all duration-300 ease-in-out 
        ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>

            <span
              className={`block h-[3px] w-8 bg-gray-800 rounded transition-all duration-300 ease-in-out 
        ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            ></span>
          </div>
          <span className="relative flex items-center min-w-[260px] xl:w-[617px] lg:w-[400px] xl:col-span-3 col-span-2 xs:mt-0 mt-7 group scale-100 hover:scale-105 transition-transform duration-300">
            <input
              name="Search"
              type="text"
              placeholder="Search Books"
              className="bg-[#F6F6F6] placeholder:text-[#BCBCBC] text-[14px] font-semibold tracking-wider rounded-[20px] py-3.5 ps-6 w-full outline-none"
            />
            <span className="absolute right-6 scale-100 group-hover:scale-110">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0013 0C7.14359 0 4.00257 3.1409 4.00257 6.99844C4.00257 8.67457 4.59046 10.2107 5.57728 11.4166L0 16.9922L1.00712 18L6.58369 12.4229C7.82915 13.444 9.39078 14.0004 11.0013 13.9969C14.859 13.9969 18 10.856 18 6.99844C18 3.1409 14.859 0 11.0013 0ZM11.0013 1.39969C14.1017 1.39969 16.6003 3.89813 16.6003 6.99844C16.6003 10.0988 14.1017 12.5972 11.0013 12.5972C7.90085 12.5972 5.40231 10.0988 5.40231 6.99844C5.40231 3.89813 7.90085 1.39969 11.0013 1.39969Z"
                  fill="#111111"
                />
              </svg>
            </span>
          </span>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            }  xs:flex items-center xs:gap-x-4 gap-x-1 xl:col-span-2 col-span-3 xs:justify-self-end xs:static absolute right-0 xs:py-0 bottom-16 `}
          >
            <div className="flex items-center xs:gap-x-2.5 gap-x-1">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0C3.687 0 1.8 1.85841 1.8 4.13636C1.8 5.56045 2.538 6.825 3.6564 7.57132C1.5162 8.47541 0 10.5672 0 13H1.2C1.2 10.3823 3.342 8.27273 6 8.27273C8.658 8.27273 10.8 10.3823 10.8 13H12C12 10.5672 10.4838 8.476 8.3436 7.57073C8.91441 7.19123 9.38209 6.67975 9.70572 6.08104C10.0293 5.48233 10.1991 4.81463 10.2 4.13636C10.2 1.85841 8.313 0 6 0ZM6 1.18182C7.6638 1.18182 9 2.49777 9 4.13636C9 5.77495 7.6638 7.09091 6 7.09091C4.3362 7.09091 3 5.77495 3 4.13636C3 2.49777 4.3362 1.18182 6 1.18182Z"
                  fill="#393280"
                />
              </svg>
              <a
                href=""
                className="uppercase text-[#393280] text-[14px] font-semibold tracking-wider"
              >
                account
              </a>
            </div>
            <span>
              <svg
                width="1"
                height="16"
                viewBox="0 0 1 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1" height="16" fill="#D1D1D1" />
              </svg>
            </span>
            <div className="flex items-center xs:gap-x-2.5 gap-x-1">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.53025 0C4.15756 0 3.03082 1.12675 3.03082 2.49943V2.99932H0.562373L0.53138 3.46822L0.031493 12.4662L0 12.9971H11.06L11.029 12.4657L10.5291 3.46772L10.4976 2.99932H8.02969V2.49943C8.02969 1.12675 6.90294 0 5.53025 0ZM5.53025 0.999774C5.92798 0.999774 6.30943 1.15777 6.59067 1.43901C6.87191 1.72026 7.02991 2.1017 7.02991 2.49943V2.99932H4.03059V2.49943C4.03059 2.1017 4.18859 1.72026 4.46983 1.43901C4.75107 1.15777 5.13251 0.999774 5.53025 0.999774ZM1.49966 3.9991H3.03082V5.49876H4.03059V3.9991H7.02991V5.49876H8.02969V3.9991H9.56084L9.99824 11.9973H1.06276L1.49966 3.9991Z"
                  fill="#393280"
                />
              </svg>

              <a
                href=""
                className="uppercase text-[#393280] text-[14px] font-semibold tracking-wider"
              >
                cart:(0$)
              </a>
            </div>
            <span>
              <svg
                width="1"
                height="16"
                viewBox="0 0 1 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1" height="16" fill="#D1D1D1" />
              </svg>
            </span>
            <div className="flex items-center xs:gap-x-2.5 gap-x-1">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41071 7.1445C-0.211799 5.02595 0.329036 1.84813 3.03321 0.78885C5.73739 -0.270425 7.35989 1.84813 7.90073 2.9074C8.44157 1.84813 10.6049 -0.270425 13.3091 0.78885C16.0133 1.84813 16.0133 5.02595 14.3908 7.1445C12.7682 9.26305 7.90073 13.5002 7.90073 13.5002C7.90073 13.5002 3.03321 9.26305 1.41071 7.1445Z"
                  stroke="#393280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <a
                href=""
                className="uppercase text-[#393280] text-[14px] font-semibold tracking-wider"
              >
                wishlist
              </a>
            </div>
          </div>
        </div>
        {/* end header top*/}

        <hr className="bg-[#E0E0E0] h-0.5 lg:mt-0 mt-3" />

        {/* Start header bottom */}

        <ul className="list-none flex flex-wrap gap-x-7 gap-y-4 justify-center items-center text-[18px] font-medium uppercase tracking-wider mt-8">
          <li>
            <Link to='/' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">home</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">about us</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='/books' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">books</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">new release</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">contact us</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">blog</Link>
          </li>
          <li>
            <svg
              width="2"
              height="18"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="18" fill="#D1D1D1" />
            </svg>
          </li>
          <li>
            <Link to='/dashboard' className="hover:text-[#ED553B] hover:font-extrabold transition-all duration-300 ease-in-out">dash board</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
