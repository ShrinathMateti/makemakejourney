const About = () => {
  return (
    <div className="mt-16 mb-32">
      {/* Hero Section */}
      <section
        id="about"
        className="relative h-40 bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-black mt-10">About Us</h1>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-2 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="mt-2 text-3xl font-semibold text-slate-800 mb-4 text-center md:text-left">
            Who We Are
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-xl">
            Welcome to
            <span className="font-semibold text-blue-600">
              {" "}
              Make My Journey
            </span>
            , your trusted travel partner. We specialize in crafting
            personalized journeys that combine adventure, comfort, and
            unforgettable experiences.
          </p>
          <p className="text-slate-600 leading-relaxed text-xl">
            Whether you’re planning a family holiday, a romantic getaway, or an
            adventurous trip, our mission is to make your journey seamless and
            truly memorable.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src="about.jpg"
            alt="About Make My Journey"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
