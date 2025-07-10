import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaPills } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { HiOutlineRectangleStack } from "react-icons/hi2";

const Pharmacy = () => {
  return (
    <>
      {/* Pharmacy Section */}
      <section id="pharmacy" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl text-blue-800 font-bold mb-4">
              In House Pharmacy
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Our fully stocked pharmacy provides covenient access to medications with expert advice from out licensed pharmacists.
            </p>
            <div className="grid grid-cols-1">
              <ul className="flex flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-gray-200 bg-opacity-20 p-2 rounded-full">
                    <FaPills className="text-3xl text-blue-600"/>
                  </div>
                </li>
                <li>
                  <p className="text-blue-800 text-lg font-bold">
                    Prescription Medications
                  </p>
                  <p className="text-lg text-gray-600">
                    Fast filling of all your prescription needs
                  </p>
                </li>
              </ul>
              <ul className="flex flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-gray-200 bg-opacity-20 p-2 rounded-full">
                    <FaPills className="text-3xl text-blue-600"/>
                  </div>
                </li>
                <li>
                  <p className="text-blue-800 text-lg font-bold">
                    Over-the-Counter
                  </p>
                  <p className="text-lg text-gray-600">
                    Wide selection of health and wellness products
                  </p>
                </li>
              </ul>
              <ul className="flex flex-row items-center gap-4 mb-4">
                <li>
                  <div className="bg-gray-200 bg-opacity-20 p-2 rounded-full">
                    <FaPills className="text-3xl text-blue-600"/>
                  </div>
                </li>
                <li>
                  <p className="text-blue-800 text-lg font-bold">
                    Compounding Services
                  </p>
                  <p className="text-lg text-gray-600">
                    Custom medication formulations when needed
                  </p>
                </li>
              </ul>
              
            </div>
          </div>
          <div className="items-center justify-items-center">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden">
                <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                    <FaPills className="text-8xl text-blue-600" />
                </div>
                
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;
