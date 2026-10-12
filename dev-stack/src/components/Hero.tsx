const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#technologies"
              className="px-7 py-3 rounded-xl brand-gradient text-white font-semibold shadow-md"
            >
              Explore Technologies
            </a>
            <button className="px-7 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium shadow-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
            alt="Hero Illustration"
            className="w-full max-w-md h-auto object-contain rounded-2xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;