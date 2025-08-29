

const CarRent = () => {
  return (
    <div className="bg-blue-100">
      <section id="car-rent" className="bg-blue-100 py-10">
        <h1 className="text-center text-slate-800 font-semibold text-4xl mt-10">
          CONVENIENT <span className="text-red-700">CARS PERFECT TRIP</span>
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
           <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="innova.jpg"
              alt="Innova"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Innova
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="ertiga.jpg"
              alt="Ertiga"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Ertiga
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="swift.webp"
              alt="swift"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Swift
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="xuv.webp"
              alt="xuv"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              XUV 700
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="brezza.jpg"
              alt="brezza"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Brezza
            </h4>
          </div>
           <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="elevate.jpg"
              alt="Elevate"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Elevate
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="city.webp"
              alt="City"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              City
            </h4>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition cursor-pointer">
            <img
              src="slavia.avif"
              alt="Slavia"
              className="w-100 h-40 mb-4"
            />
            <h4 className="text-3xl font-semibold text-slate-800">
              Slavia
            </h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarRent
