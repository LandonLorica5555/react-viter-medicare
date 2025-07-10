import React from 'react'
import { FaHouseChimneyMedical } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <div className="flex items-center gap-2 mb-4">
                        <FaHouseChimneyMedical className="text-2xl"/>
                        <span className="text-xl font-bold">MediCare+</span>
                    </div>
                    <p>Providing compassionate healthcare services since 2005.</p>
                </div>
                
                <div className="">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#home"></a>Home</li>
                        <li><a href="#services"></a>Services</li>
                        <li><a href="#doctors"></a>Doctors</li>
                        <li><a href="#emergency"></a>Emergency</li>
                        <li><a href="#pharmacy"></a>Pharmacy</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <ul className="space-y-1">
                        <li><p className="max-w-30">123 Medical Center Drive Healthville, HV 12345</p></li>
                        <li><p className="">Phone: (555) 987-6543</p></li>
                        <li><p className="">Email: info@medicareplus.com</p></li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
                    <ul className="space-y-2">
                        <li><p>Monday - Friday: 8am - 8pm</p></li>
                        <li><p>Saturday: 9am - 5pm</p></li>
                        <li><p>Sunday: Emergency only</p></li>
                    </ul>
                </div>

                
            </div>
            <div className="justify-center items-center border-t border-blue-800 my-6">
                <p className="text-center mt-2">&copy; 2025 MediCare+. All rights reserved.</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
