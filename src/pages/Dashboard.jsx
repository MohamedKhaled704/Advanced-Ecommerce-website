import React, { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../api/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const handleEdit = (product) => {
    navigate("/form", { state: {product} });
  }


  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    }
  })

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
      deleteMutation.mutate(id);
    }
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error in fetching products</p>;


  return (
    <div>
      <div className="mt-3 container">
        <h1 className="capitalize text-center font-semibold text-6xl text-[#393280]">
          welcome admin{" "}
        </h1>
        <div className="mt-10 flex flex-col gap-y-8">
          <form action="" className="w-full flex justify-center gap-x-2">
            <input
              type="text"
              name=""
              id=""
              role="search"
              placeholder="Search product by name"
              className="font-semibold xs:text-[18px] text-[16px] tracking-wide py-3 px-2 rounded-2xl bg-[#F6F6F6] outline-none min-w-56 max-w-screen-md w-full "
            />
            <input
              type="submit"
              value="Search"
              className="capitalize bg-[#393280] text-white py-3 xs:px-5 px-3 xs:text-[18px] text-[14px] rounded-3xl cursor-pointer"
            />
          </form>
          <div className="overflow-x-auto shadow-[0_4px_10px_0_rgba(0,0,0,0.15)]">
            <Link to='/form' className="capitalize bg-[#393280] text-white py-3 px-5 rounded-md cursor-pointer float-end m-3">add new product</Link>
            <table className="border border-[#EAE8DF] min-w-full">
              <thead>
                <tr className="">
                  <th className="capitalize border-r border-b px-2 py-3">id</th>
                  <th className="capitalize border-r border-b px-2 py-3">
                    name
                  </th>
                  <th className="capitalize border-r border-b px-2 py-3">
                    writer
                  </th>
                  <th className="capitalize border-r border-b px-2 py-3">
                    description
                  </th>
                  <th className="capitalize border-r border-b px-2 py-3">
                    price
                  </th>
                  <th className="capitalize border-r border-b px-2 py-3">
                    image
                  </th>
                  <th className="capitalize border-b">actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.map((item) => (
                  <tr key={item.id} className="divide-x">
                    <td className="capitalize text-center px-2 py-3">{item.id}</td>
                    <td className="capitalize px-2 py-3">{item.name}</td>
                    <td className="capitalize px-2 py-3">{item.writer}</td>
                    <td
                      className="capitalize px-2 py-3 max-w-xs truncate"
                      title={item.description}
                    >
                      {item.description}
                    </td>
                    <td className="px-2 py-3">{item.price}</td>
                    <td
                      className="max-w-xs truncate px-2 py-3"
                      title={item.img}
                    >
                      {item.img}
                    </td>
                    <td className="text-center px-2 py-3 space-x-2 space-y-2">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View
                      </button>
                      <button onClick={() => handleEdit(item)} className="text-yellow-600 hover:text-yellow-800 font-medium">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)} disabled={deleteMutation.isPending} className="capitalize text-red-600 hover:text-red-800 font-medium">
                        {deleteMutation.isPending? "deleting..." : "delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
