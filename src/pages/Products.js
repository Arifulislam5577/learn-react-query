import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getProducts } from "../apis/productsApi";

const Products = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    // cacheTime: 3000,cacheTime by Default 5 min
  });

  return (
    <section className="py-10 ">
      <div className="container">
        {isLoading && (
          <div className="text-center mx-auto mt-10 w-1/2">
            <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-900"></div>
          </div>
        )}

        {isError && (
          <div className="flex items-center p-6 space-x-4 rounded-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center self-stretch justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span>{error.message}</span>
          </div>
        )}
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between ">
          {data?.data.map((pd) => (
            <article
              className="p-5 bg-gray-50 flex flex-col items-center justify-center shadow"
              key={pd.id}
            >
              <Link to={`/product/${pd.id}`}>
                <img src={pd.image} alt={pd.title} className="h-20" />
              </Link>

              <div className="product-description mt-5 text-center">
                <Link to={`/product/${pd.id}`}>
                  <h2 className="font-bold text-sm text-slate-900 hover:text-slate-700 transition-all">
                    {pd.title}
                  </h2>
                </Link>
                <h3 className="text-slate-900 my-5">${pd.price}</h3>
                <button className="bg-gray-200 text-sm py-2 px-4  hover:bg-slate-900 transition-all hover:text-gray-50 rounded-md border-none text-slate-900 hover:scale-90">
                  Add To Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
