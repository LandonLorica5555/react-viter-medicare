import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaAmbulance, FaUserMd } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { HiOutlineRectangleStack } from "react-icons/hi2";

const Emergency = () => {
  return (
    <>
      {/* Emergency Section */}
      <section
        id="emergency"
        className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="justify-items-center">
                <FaAmbulance className="text-8xl text-white" />
            </div>
          <div className="mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">24/7 Emergency Services</h1>
            <p className="text-xl mb-8">
              Our emergency department is staffed around the clock with experienced medical professionals ready to handle any medical crisis.
            </p>
            <div className="grid grid-cols-1">
                <ul className="flex flex-row items-center gap-4 mb-4">
                    <li>
                        <div className="bg-white bg-opacity-20 p-2 rounded-full">
                            <GoClock/>
                        </div>
                    </li>
                    <li>
                        <p className="text-lg">Immediate response to critical conditions.</p>
                    </li>
                </ul>
                <ul className="flex flex-row items-center gap-4 mb-4">
                    <li>
                        <div className="bg-white bg-opacity-20 p-2 rounded-full">
                            <HiOutlineRectangleStack/>
                        </div>
                    </li>
                    <li>
                        <p className="text-lg">State-of-the-art emergency facilities.</p>
                    </li>
                </ul>
                <ul className="flex flex-row items-center gap-4 mb-4">
                    <li>
                        <div className="bg-white bg-opacity-20 p-2 rounded-full">
                            <BsTelephone/>
                        </div>
                    </li>
                    <li>
                        <p className="text-lg">Emergency hotline: (555) 123-4567</p>
                    </li>
                </ul>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
