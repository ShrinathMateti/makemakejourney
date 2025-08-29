

const Destinations = () => {
  return (
    <div>
      <section id="destinations" className="bg-blue-100 py-10">
        <h1 className="text-center text-slate-800 font-semibold text-4xl mt-10">
          TOUR OF <span className="text-red-700">ASTONISHING DESTINATION</span>
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 bg-blue-100">
          <div className="flex flex-col items-center p-12 cursor-pointer">
            <img
              className="w-full rounded-t-lg"
              src="dest1.jpg"
              alt="sikkim"
            />
            <h1 className="text-slate-800 text-lg rounded-b-lg bg-white w-full text-center font-semibold">
              SIKKIM
            </h1>
          </div>
          <div className="flex flex-col items-center p-12 cursor-pointer">
            <img
              className="w-full rounded-t-lg"
              src="dest2.jpg"
              alt="darjeeling"
            />
            <h1 className="text-slate-800 text-lg rounded-b-lg bg-white w-full text-center font-semibold">
              DARJEELING
            </h1>
          </div>
          <div className="flex flex-col items-center p-12 cursor-pointer">
            <img
              className="w-full rounded-t-lg"
              src="dest3.jpg"
              alt="gangtok"
            />
            <h1 className="text-slate-800 text-lg rounded-b-lg bg-white w-full text-center font-semibold">
              GANGTOK
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-slate-800 py-10">
        <h1 className="text-center text-4xl text-white font-semibold">BEST SERVICE WE STRIVE TO PROVIDE <br/> OUR CUSTOMERS</h1>
      </section>
    </div>
  );
};

export default Destinations;
