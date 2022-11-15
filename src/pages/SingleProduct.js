import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../apis/productsApi";

const SingleProduct = () => {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => getProductById(queryKey[1]),
  });

  if (isLoading) {
    return (
      <div className="text-center mx-auto mt-10 w-1/2">
        <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-900"></div>
      </div>
    );
  }

  return (
    <section className="product py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
          <div className="col-span-1 text-center flex justify-center w-full h-96 object-fit p-5">
            <img src={data?.data.image} alt={data?.data.title} />
          </div>
          <div className="col-span-1 p-5">
            <h1 className="text-xl font-bold">{data?.data.title}</h1>
            <p className="text-gray-500 my-5">{data?.data.description}</p>
            <h3 className="text-slate-700 font-bold mb-5">
              Rating - {data?.data.rating?.rate} from {data?.data.rating?.count}{" "}
              reviews
            </h3>
            <h3 className="text-slate-700 font-bold mb-5">
              Price - ${data?.data.price}
            </h3>
            <button className="p-3 w-2/3 bg-slate-900 text-gray-50 hover:bg-slate-800 uppercase transition-all">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
