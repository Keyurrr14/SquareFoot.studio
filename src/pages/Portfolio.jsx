import React, { useState, useEffect } from 'react'
import Industrial from "../assets/images/Industrial.webp"
import Industrial2 from "../assets/images/Industrial2.webp"
import Commercial from "../assets/images/Commercial.webp"
import Commercial2 from "../assets/images/Commercial2.webp"
import Architechture from "../assets/images/Architechture.webp"
import Architechture2 from "../assets/images/Architechture2.webp"


function Portfolio() {
  return (
    <>
    <div className="flex justify-center items-center gap-16 mt-10">
      <h1 className="text-4xl font-neutra text-brown">Interior</h1>
      <h1 className="text-4xl font-neutra text-brown">&</h1>
      <h1 className="text-4xl font-neutra text-brown">Architecture</h1>
    </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="aspect-square relative group">
            <img
              src={Industrial}
              alt="Industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Commercial}
              alt="Commercial"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Architechture}
              alt="Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="aspect-square relative group">
            <img
              src={Industrial2}
              alt="Industrial 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Architecture
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Commercial2}
              alt="Commercial 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Architechture2}
              alt="Architecture 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="aspect-square relative group">
            <img
              src={Industrial}
              alt="Industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Architecture
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Commercial}
              alt="Commercial"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Architechture}
              alt="Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="aspect-square relative group">
            <img
              src={Industrial2}
              alt="Industrial 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Commercial2}
              alt="Commercial 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Interior
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
          <div className="aspect-square relative group">
            <img
              src={Architechture2}
              alt="Architecture 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
              <p className="font-neutra text-2xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Architecture
              </p>
              <p className="font-neutra text-5xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                Oberoi Sky City
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio