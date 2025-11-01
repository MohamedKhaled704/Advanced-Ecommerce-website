import React, {useState} from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";
import PreHeaderVariantA from "../components/variantA/PreHeaderVariantA";

export default function AllProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [listSort, setListSort] = useState(false)

  const toggleFilterExpantion = () => {
    setIsOpen(!isOpen);
  };
  const {data, isLoading, error} = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts
  }) 
  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Error in fetching products</h1>

  return (
    <div>
      <PreHeaderVariantA />
      {/* Start header */}
      <div className="mt-5 container">
        <div className="grid xs:grid-cols-3 grid-cols-2 justify-between items-center gap-y-5">
          <div className="bg-[#ED553B] w-[60px] h-[60px] rounded-[10px] flex items-center justify-center">
            <div className="bg-[#ED553B] w-[55px] h-[55px] rounded-[10px] border-2 border-white flex items-center justify-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.08342 15.1679C0.796082 15.1679 0.520509 15.2821 0.317328 15.4853C0.114146 15.6884 0 15.964 0 16.2514V24.9166C0 25.2039 0.114146 25.4795 0.317328 25.6827C0.520509 25.8859 0.796082 26 1.08342 26H9.75081C10.0382 26 10.3137 25.8859 10.5169 25.6827C10.7201 25.4795 10.8342 25.2039 10.8342 24.9166V16.2514C10.8342 15.964 10.7201 15.6884 10.5169 15.4853C10.3137 15.2821 10.0382 15.1679 9.75081 15.1679H1.08342ZM16.2514 15.1679C15.964 15.1679 15.6884 15.2821 15.4853 15.4853C15.2821 15.6884 15.1679 15.964 15.1679 16.2514V24.9166C15.1679 25.2039 15.2821 25.4795 15.4853 25.6827C15.6884 25.8859 15.964 26 16.2514 26H24.9166C25.2039 26 25.4795 25.8859 25.6827 25.6827C25.8859 25.4795 26 25.2039 26 24.9166V16.2514C26 15.964 25.8859 15.6884 25.6827 15.4853C25.4795 15.2821 25.2039 15.1679 24.9166 15.1679H16.2514ZM1.08342 -3.57628e-07C0.796082 -3.57628e-07 0.520509 0.114146 0.317328 0.317327C0.114146 0.520508 0 0.796081 0 1.08342V9.75081C0 10.0382 0.114146 10.3137 0.317328 10.5169C0.520509 10.7201 0.796082 10.8342 1.08342 10.8342H9.75081C10.0382 10.8342 10.3137 10.7201 10.5169 10.5169C10.7201 10.3137 10.8342 10.0382 10.8342 9.75081V1.08342C10.8342 0.796081 10.7201 0.520508 10.5169 0.317327C10.3137 0.114146 10.0382 -3.57628e-07 9.75081 -3.57628e-07H1.08342ZM16.2514 -3.57628e-07C15.964 -3.57628e-07 15.6884 0.114146 15.4853 0.317327C15.2821 0.520508 15.1679 0.796081 15.1679 1.08342V9.75081C15.1679 10.0382 15.2821 10.3137 15.4853 10.5169C15.6884 10.7201 15.964 10.8342 16.2514 10.8342H24.9166C25.2039 10.8342 25.4795 10.7201 25.6827 10.5169C25.8859 10.3137 26 10.0382 26 9.75081V1.08342C26 0.796081 25.8859 0.520508 25.6827 0.317327C25.4795 0.114146 25.2039 -3.57628e-07 24.9166 -3.57628e-07H16.2514Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <picture className="w-[87px] h-[87px] rounded-[50%] bg-[#C4C4C4] justify-self-center">
            {" "}
          </picture>

          <div className="flex gap-x-6 xs:col-span-1 col-span-2 justify-self-end">
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
            </div>
          </div>
        </div>
      </div>
      {/* End header */}
      {/* Start Page path panner */}
      <div className="mt-[18px]">
        <div className="bg-[linear-gradient(45deg,#FFE5E5_0%,#F5FFFE_100%)] text-center py-8">
          <h2 className="uppercase font-medium text-[20px] leading-[1.6] text-[#393280]">
            home / products
          </h2>
        </div>
      </div>
      {/* End Page path panner */}

      {/* Start all products main */}
      <div className="container mt-16">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-x-[59px] gap-y-12">
          {/* Start all products main leftside "filter" */}
          <div className="col-span-1">
            <ul className="list-none flex flex-col gap-y-[18px]">
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  price
                </h4>
                <span
                  className="cursor-pointer py-2"
                  onClick={toggleFilterExpantion}
                >
                  {isOpen ? (
                    <svg
                      width="17"
                      height="2"
                      viewBox="0 0 17 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1L17 1" stroke="#393280" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                      <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                    </svg>
                  )}
                </span>
              </li>
              <li className={`${isOpen ? "flex" : "hidden"} flex-col gap-y-6`}>
                <div className="flex lg:flex-row md:flex-col justify-between items-center">
                  <div className="flex gap-x-2 items-center">
                    <span className="font-bold text-[16px] leading-[2] text-[#393280]">
                      $
                    </span>
                    <input
                      type="number"
                      className="border w-20 p-1 outline-none font-bold text-[16px] text-[#393280]"
                    />
                  </div>
                  <span className="font-medium text-[18px] text-[#888888] tracking-wider">
                    to
                  </span>
                  <div className="flex gap-x-2 items-center">
                    <span className="font-bold text-[16px] leading-[2] text-[#393280]">
                      $
                    </span>
                    <input
                      type="number"
                      className="border w-20 p-1 outline-none font-bold text-[16px] text-[#393280]"
                    />
                  </div>
                </div>
                <button className="bg-[#393280] text-center text-white text-[16px] font-medium capitalize py-3 px-9">
                  {" "}
                  filter{" "}
                </button>
              </li>
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  Product type
                </h4>
                <span className="cursor-pointer py-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                    <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                  </svg>
                </span>
              </li>
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  availability
                </h4>
                <span className="cursor-pointer py-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                    <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                  </svg>
                </span>
              </li>
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  brand
                </h4>
                <span className="cursor-pointer py-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                    <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                  </svg>
                </span>
              </li>
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  color
                </h4>
                <span className="cursor-pointer py-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                    <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                  </svg>
                </span>
              </li>
              <li className="flex justify-between items-center border-b-2 pb-[18px]">
                <h4 className="capitalize font-bold text-[16px] leading-[2] text-[#393280]">
                  material
                </h4>
                <span className="cursor-pointer py-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 9L17 9" stroke="#393280" strokeWidth="2" />
                    <path d="M8 17L8 0" stroke="#393280" strokeWidth="2" />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          {/* End all products main leftside "filter" */}

          {/* Start all products main rightside "Products" */}
          <div className="col-span-4 md:col-span-3 flex flex-col gap-y-11">
            {/* Start all products main rightside "Products" Head */}
            <div className="flex justify-between sm:items-center items-baseline font-bold text-[16px] text-[#393280] leading-[2]">
              <form action="" className="flex lg:flex-row flex-col">
                <label htmlFor="product-sort"> Sort by : </label>
                <select id="product-sort" className="appearance-none">
                  <option value="default">Alphabetically, A-Z</option>
                  <option value="small">alphabetically, a-z</option>
                </select>
              </form>
              <p className="hidden sm:flex lg:flex-row sm:flex-col"><span>showing 1 - 12</span> <span>of 26 result</span></p>
              <form action="" className="flex lg:flex-row flex-col items-center">
                <label htmlFor="productsperpage">Show :</label>
                <select
                  name=""
                  id="productsperpage"
                  className="appearance-none"
                >
                  <option value="default">12</option>
                </select>
              </form>
              <div className="flex sm:flex-row flex-col gap-10 ">
                <svg className="cursor-pointer" onClick={() => setListSort(false)}
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.958413 9.58222C0.704226 9.58222 0.46045 9.48124 0.280713 9.3015C0.100976 9.12177 0 8.87799 0 8.6238V0.958413C0 0.704226 0.100976 0.46045 0.280713 0.280713C0.46045 0.100976 0.704226 0 0.958413 0H8.62572C8.87991 0 9.12368 0.100976 9.30342 0.280713C9.48316 0.46045 9.58413 0.704226 9.58413 0.958413V8.6238C9.58413 8.87799 9.48316 9.12177 9.30342 9.3015C9.12368 9.48124 8.87991 9.58222 8.62572 9.58222H0.958413ZM14.3762 9.58222C14.122 9.58222 13.8782 9.48124 13.6985 9.3015C13.5188 9.12177 13.4178 8.87799 13.4178 8.6238V0.958413C13.4178 0.704226 13.5188 0.46045 13.6985 0.280713C13.8782 0.100976 14.122 0 14.3762 0H22.0416C22.2958 0 22.5396 0.100976 22.7193 0.280713C22.899 0.46045 23 0.704226 23 0.958413V8.6238C23 8.87799 22.899 9.12177 22.7193 9.3015C22.5396 9.48124 22.2958 9.58222 22.0416 9.58222H14.3762ZM0.958413 23C0.704226 23 0.46045 22.899 0.280713 22.7193C0.100976 22.5396 0 22.2958 0 22.0416V14.3743C0 14.1201 0.100976 13.8763 0.280713 13.6966C0.46045 13.5168 0.704226 13.4159 0.958413 13.4159H8.62572C8.87991 13.4159 9.12368 13.5168 9.30342 13.6966C9.48316 13.8763 9.58413 14.1201 9.58413 14.3743V22.0416C9.58413 22.2958 9.48316 22.5396 9.30342 22.7193C9.12368 22.899 8.87991 23 8.62572 23H0.958413ZM14.3762 23C14.122 23 13.8782 22.899 13.6985 22.7193C13.5188 22.5396 13.4178 22.2958 13.4178 22.0416V14.3743C13.4178 14.1201 13.5188 13.8763 13.6985 13.6966C13.8782 13.5168 14.122 13.4159 14.3762 13.4159H22.0416C22.2958 13.4159 22.5396 13.5168 22.7193 13.6966C22.899 13.8763 23 14.1201 23 14.3743V22.0416C23 22.2958 22.899 22.5396 22.7193 22.7193C22.5396 22.899 22.2958 23 22.0416 23H14.3762Z"
                    fill="#ED553B"
                  />
                </svg>

                <svg className="cursor-pointer" onClick={() => setListSort(true)}
                  width="29"
                  height="24"
                  viewBox="0 0 29 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4694 9.66699H1.53056C0.685253 9.66699 0 10.4893 0 11.5037V11.697C0 12.7114 0.685253 13.5337 1.53056 13.5337H27.4694C28.3147 13.5337 29 12.7114 29 11.697V11.5037C29 10.4893 28.3147 9.66699 27.4694 9.66699Z"
                    fill="black"
                  />
                  <path
                    d="M27.4694 19.333H1.53056C0.685253 19.333 0 20.1553 0 21.1697V21.363C0 22.3774 0.685253 23.1997 1.53056 23.1997H27.4694C28.3147 23.1997 29 22.3774 29 21.363V21.1697C29 20.1553 28.3147 19.333 27.4694 19.333Z"
                    fill="black"
                  />
                  <path
                    d="M27.4694 0H1.53056C0.685253 0 0 0.822303 0 1.83667V2.03C0 3.04436 0.685253 3.86667 1.53056 3.86667H27.4694C28.3147 3.86667 29 3.04436 29 2.03V1.83667C29 0.822303 28.3147 0 27.4694 0Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            {/* End all products main rightside "Products" Head */}

            {/* Start all products main rightside "Products" main */}
            <div className={`${listSort? 'flex flex-col' : "grid lg:grid-cols-3 grid-cols-2"} gap-5`}>
              {data.map((item) => (
                <div key={item.id} className={`${listSort? 'flex lg:flex-row items-center flex-col gap-x-12 overflow-x-auto min-w-full' : 'flex flex-col justify-between xs:items-center items-start flex-wrap gap-y-2'} `}>
                <picture className="flex flex-1"><img className="flex-1" src={item.img} alt={item.img} /></picture>
                <div className={`${listSort? 'sm:flex-row flex-col gap-x-12 gap-y-2' : 'flex-col gap-2 items-start sm:items-center '} flex `}>
                <div className={`${listSort? 'gap-x-12 sm:flex-row ' : 'gap-x-5'} flex flex-col gap-y-2 sm:items-center items-start`}>
                <h4 className="capitalize font-semibold xs:text-[18px] text-[16px] leading-[1.5] text-[#393280] min-h-[48px] xs:min-h-0 ">{item.name}</h4>
                <p className="capitalize text-[#888888] xs:text-[14px] text-[12px] tracking-wide">{item.writer}</p>
                </div>
                <p className="font-bold xs:text-[22px] text-[18px] text-[#ED553B] tracking-wide">$ {item.price}</p>
                </div>
              </div>
              ))}
            </div>
            {/* End all products main rightside "Products" main */}
          </div>
          {/* End all products main rightside "Products" */}
        </div>
      </div>
    </div>
  );
}
