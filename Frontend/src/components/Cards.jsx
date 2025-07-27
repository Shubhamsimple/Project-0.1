import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 light:text-white dark:border">
          <figure>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.catagory}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline hovver:bg-pink-500 duration-200">${item.price}</div>
              <div className=" cursor-pointer px-1 py-1 rounded-full border-[1px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;