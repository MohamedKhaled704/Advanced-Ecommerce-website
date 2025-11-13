import React, { useEffect, useState } from "react";
import { dashboardFetchProducts, deleteProduct, fetchProducts, PAGE_SIZE } from "../api/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce"

export default function Dashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [viewProduct, setViewProduct] = useState(false);
  const [viewedProduct, setViewedProduct] = useState(null);
  

  const [searchValue, setSearchValue] = useState("")
  const debouncedSearch = useDebounce(searchValue, 1000)

  const [page, setPage] = useState(1)

  const {data, isLoading, isFetching, error} = useQuery({
    queryKey: ["products", page],
    queryFn: () => dashboardFetchProducts(page, PAGE_SIZE),
    keepPreviousData: true
  })

  // query to fetch all products (used only when searching across entire dataset)
  const {
    data: allProductsData,
    refetch: refetchAllProducts,
    isFetching: isFetchingAll,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchProducts,
    enabled: false,
  })

  // when the user types a search term (debounced), fetch the full collection so we can
  // search across all products instead of only the current page
  useEffect(() => {
    if (debouncedSearch && debouncedSearch.trim()) {
      refetchAllProducts();
    }
  }, [debouncedSearch, refetchAllProducts]);

  const products = data?.data || [];
  const total = Number(data?.total ?? 0);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  

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
  

    // choose source: when there is a search term use the full collection (fetched on demand),
    // otherwise use the current page products
    const source = debouncedSearch.trim() ? (allProductsData || []) : products;

    const filtered = source.filter((product) =>
      String(product?.name || "").toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const handleView = (product) => {
      setViewedProduct(product);
      setViewProduct(!viewProduct)
    }

  // keep `page` within valid bounds whenever totalPages changes
  useEffect(() => {
    // if we're currently fetching new data (including the full-count fallback),
    // don't clamp the page — let the fetch finish and update totalPages first.
    if (isFetching) return;

    // if totalPages is not a finite positive number, reset to page 1
    if (!Number.isFinite(totalPages) || totalPages < 1) {
      setPage(1);
      return;
    }

    setPage((p) => {
      if (p < 1) return 1;
      if (p > totalPages) return totalPages;
      return p;
    });
  }, [totalPages, isFetching]);

if (isLoading) return <p>Loading</p>;
if (error) return <p>Error in fetching products</p>;

  return (
    <div className="relative">
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
              value={searchValue}
              role="search"
              placeholder="Search product by name"
              className="font-semibold xs:text-[18px] text-[16px] tracking-wide py-3 px-2 rounded-2xl bg-[#F6F6F6] outline-none min-w-56 max-w-screen-md w-full "
              onChange={(e) => setSearchValue(e.target.value)}
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
                {filtered.map((item) => (
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
                      <button className="text-blue-600 hover:text-blue-800 font-medium" onClick={() => handleView(item)}>
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
            {isFetchingAll && (
              <div className="p-3 text-sm text-gray-600">Searching all products...</div>
            )}
            <div className="flex items-center gap-3 p-3">
              <button type="button" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page <= 1 || isLoading || isFetching} className="px-3 py-1 border rounded disabled:opacity-50">
                prev
              </button>
              <span className="text-sm">Page {page} of {totalPages}</span>
              <button type="button" onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page >= totalPages || isLoading || isFetching} className="px-3 py-1 border rounded disabled:opacity-50">
                next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* View Product layer */}
     
      {viewedProduct && viewProduct && (
  <div
    className="fixed inset-0 z-30 bg-black/50 flex items-start sm:items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="view-product-title"
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        setViewProduct(false);
        setViewedProduct(null);
      }
    }}
  >
    <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
      <div className="flex items-center justify-between bg-[#393280] text-white px-4 py-2">
        <h3 id="view-product-title" className="text-sm sm:text-base uppercase tracking-wide">
          Book id: #{viewedProduct.id}
        </h3>
        <button
          onClick={() => { setViewProduct(false); setViewedProduct(null); }}
          className="p-1 rounded hover:bg-white/10 transition"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="p-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          <div className="sm:col-span-1 flex justify-center">
            <div className="w-32 h-40 sm:w-40 sm:h-56 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
              <img
                src={viewedProduct.img}
                alt={viewedProduct.name || 'product image'}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="sm:col-span-2 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2 items-start">
              <div className="text-xs font-semibold uppercase text-gray-500">Book name:</div>
              <div className="sm:col-span-2 text-base text-[#393280] capitalize">{viewedProduct.name}</div>

              <div className="text-xs font-semibold uppercase text-gray-500">Writer:</div>
              <div className="sm:col-span-2 capitalize">{viewedProduct.writer}</div>

              <div className="text-xs font-semibold uppercase text-gray-500">Price:</div>
              <div className="sm:col-span-2">{viewedProduct.price}$</div>

              <div className="text-xs font-semibold uppercase text-gray-500">Description:</div>
              <div className="capitalize sm:col-span-2 text-sm text-gray-700 leading-relaxed max-h-40 overflow-auto">
                {viewedProduct.description}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
