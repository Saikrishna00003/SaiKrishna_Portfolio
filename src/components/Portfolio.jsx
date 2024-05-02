import React from "react";
import SeminarManagementsystem from "../assets/portfolio/Seminar Management system.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: SeminarManagementsystem,
      href:"https://github.com/Saikrishna00003/SeminarManagementSystem",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            > <button className=" px-28  m-2 duration-200 hover:scale-110">
                  Code
                </button></a>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
