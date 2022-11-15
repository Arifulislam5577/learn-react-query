import React from "react";

const Home = () => {
  return (
    <section className=" dark:text-gray-700">
      <div className="container mx-auto flex flex-col items-center text-center w-2/3 my-20">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Quisquam necessita vel
          <span className="dark:text-violet-400">laborum doloribus </span>
          delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
